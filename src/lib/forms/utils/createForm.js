import _ from "lodash-es";
import { get, writable } from "svelte/store";
import * as utils from "$/lib/forms/utils/index.js";
import { deepEqual } from "fast-equals";
import jsonata from "jsonata";

async function evaluateFieldConditions(fieldContext) {
  let result = true;
  if (!fieldContext?.field?.spec?.conditions) return result;
  for (let c of fieldContext?.field?.spec?.conditions || []) {
    try {
      let pass = await jsonata(c).evaluate(fieldContext);
      if (!pass) {
        result = false;
        break;
      }
    } catch (err) {
      console.warn(err);
    }
  }
  return result;
}

async function evaluateFieldValidations(fieldContext) {
  let result = {
    valid: true,
    message: "",
  };
  let curValue = fieldContext?.field?.data;
  let validations = fieldContext?.field?.spec?.validations || [];
  if (!_.isArray(validations)) validations = [];

  for (let v of validations) {
    let { validationtype, valid_message, invalid_message, params } = v;

    let validationPassed = true;
    switch (validationtype) {
      case "required":
        if (curValue === undefined || curValue === null || curValue === "" || curValue === false) {
          validationPassed = false;
        }
        break;
      case "regex": {
        let regex = new RegExp(params?.regex);
        if (!regex.test(curValue)) {
          validationPassed = false;
        }
        break;
      }
      case "jsonata": {
        let result = false;
        try {
          result = await jsonata(params?.jsonata).evaluate(fieldContext);
        } catch (err) {
          console.log(err);
        }
        if (result !== true) {
          validationPassed = false;
        }
        break;
      }
      // default
      default:
        console.warn("validation type not found", validationtype);
        break;
    }

    result = {
      valid: validationPassed,
      message: validationPassed ? valid_message : invalid_message,
    };

    if (!validationPassed) {
      break;
    }
  }
  return result;
}

async function evaluateValues(obj, fieldcontext) {
  if (!_.isObject(obj)) return await jsonata(obj).evaluate(fieldcontext);
  let res = {};
  for (let [key, expression] of Object.entries(obj)) {
    try {
      // use lodash to check that expression is a string
      if (!_.isString(expression)) res[key] = await evaluateValues(_.cloneDeep(expression));
      else res[key] = await jsonata(expression).evaluate(fieldcontext);
    } catch (err) {
      console.warn(err);
    }
  }
  return res;
}

async function handleFormChange(s, getField) {
  // console.log("stubber-form-fields-pkg - change detected...");
  let _clone = _.cloneDeep(get(s));

  // loop through all fields in _clone.state
  for (let state_key of Object.keys(_clone?.state || {})) {
    let field = getField(state_key);
    if (!field) continue;
    let fieldcontext = _.cloneDeep({
      form: _clone,
      field: {
        ...field,
        data: field?.data?.base,
      },
    });

    // conditions
    let conditions_passed = await evaluateFieldConditions(fieldcontext);
    _.set(_clone, `state.${state_key}.conditions_passed`, conditions_passed);
    _.set(_clone, `state.${state_key}.conditions_checked`, true);

    // validations
    _.set(_clone, `state.${state_key}.validation`, await evaluateFieldValidations(fieldcontext));
    _.set(_clone, `state.${state_key}.validations_checked`, true);

    // calculate hidden field values
    if (fieldcontext.field.spec.fieldtype === "hidden" && conditions_passed) {
      let value_settings = fieldcontext?.field?.spec?.params?.value;
      let value_result;
      if (!_.isObject(value_settings)) {
        value_result = value_settings || fieldcontext?.field?.data?.base;
      } else {
        switch (value_settings?.type) {
          case "string":
            value_result = value_settings?.expression;
            break;
          case "jsonata":
            try {
              let expression = jsonata(value_settings?.expression);
              let result = await expression.evaluate(fieldcontext);
              value_result = result;
            } catch (err) {
              console.warn(err);
            }
            break;
          case "apicall": {
            let api_params = value_settings?.api_params || {};
            let result = _.cloneDeep(fieldcontext?.field?.data);
            if (!deepEqual(api_params, fieldcontext?.field?.state?.internal?.api_params)) {
              // call api here
              let { url, method, headers, body } = api_params;
              if (method && url) {
                try {
                  let fetchOptions = {};
                  fetchOptions.method = method.toUpperCase();
                  if (_.isArray(headers)) {
                    for (let h of headers) {
                      let [key, value] = h.split(":");
                      fetchOptions.headers[key] = value;
                    }
                  }
                  if (body) fetchOptions.body = JSON.stringify(body);
                  let res = await fetch(url, fetchOptions);
                  let resJSON = await utils.rawResToJSON(res);
                  result = resJSON;
                  _.set(_clone, `state.${state_key}.internal.api_params`, api_params);
                  _.set(_clone, `state.${state_key}.internal.last_call_at`, new Date().getTime());
                } catch (err) {
                  console.warn(err);
                }
              }
            }
            value_result = _.cloneDeep(result);
            break;
          }
        }
      }
      _.set(_clone, fieldcontext?.field?.state?.data_location, value_result);
    }

    // calculate the dynamic part for renderfield fields
    if (fieldcontext.field.spec.fieldtype === "renderfield" && conditions_passed) {
      let dynamic_fieldspec = _.cloneDeep(fieldcontext?.field?.spec) || {};
      _.unset(dynamic_fieldspec, "__key");
      _.unset(dynamic_fieldspec, "name");
      _.unset(dynamic_fieldspec, "fieldtype");
      _.unset(dynamic_fieldspec, "conditions");
      _.unset(dynamic_fieldspec, "validations");
      _.set(dynamic_fieldspec, "details.datapath", "");
      _.set(dynamic_fieldspec, "details.keyname", "");

      let dynamic_part = await evaluateValues(
        _.cloneDeep(dynamic_fieldspec?.params?.dynamic_fieldspec),
        fieldcontext
      );

      dynamic_fieldspec = _.merge(dynamic_fieldspec, dynamic_part);
      _.unset(dynamic_fieldspec, "params.dynamic_fieldspec");
      if (dynamic_fieldspec.fieldtype === "renderfield") _.unset(dynamic_fieldspec, "fieldtype"); // prevent loops
      _.set(dynamic_fieldspec, "details.keyname", "");
      _.set(dynamic_fieldspec, "details.datapath", "");

      _.set(_clone, `state.${state_key}.dynamic_fieldspec`, dynamic_fieldspec);
    }
  }

  let current_store = get(s);
  if (!deepEqual(current_store, _clone)) {
    // console.log("stubber-form-fields-pkg - change affected more changes...");
    s.set(_clone);
  }
}

export function createForm(opts) {
  const dependencies = opts?.dependencies || {};

  const store = opts?.form || writable({});

  let debounceHandleFormChange = utils.debounce(handleFormChange, 100);
  store.subscribe(() => {
    debounceHandleFormChange(store, getField);
  });

  function initialize(_d) {
    // console.log("initializing form...");

    let d = _.cloneDeep(_d);

    let root_spec = d?.spec || {};
    root_spec.fields = root_spec.fields || {};

    store.update((s) => {
      return {
        initial_form: _d,
        root_spec,
        spec: {},
        data: d?.data || {},
        state: {},
        attachments: [],
        render_index: (s?.render_index || 0) + 1,
      };
    });
  }

  function addField(spec, parent_field_state_key) {
    let state_key;
    let raw_fieldspec = _.cloneDeep(spec);

    store.update((s) => {
      let field_key = spec.__key;
      if (!field_key) {
        console.warn("field.__key is required. Please provide a unique key for this field.");
        return s;
      }

      let _clone = _.cloneDeep(s);
      let parent_field_state = _clone?.state?.[parent_field_state_key];
      let parent_field_spec = _.get(_clone, parent_field_state?.spec_location);
      state_key = field_key;

      if (parent_field_state?.state_key) {
        state_key = parent_field_state.state_key + "_" + state_key;
      }

      // console.log("adding field...", state_key);

      // initialize field_spec
      let field_spec = _.cloneDeep(spec);
      field_spec.fields = spec?.fields || {};
      field_spec.params = spec?.params || {};
      field_spec.fieldtype = spec.fieldtype || "text";
      field_spec.name = field_key;
      field_spec.title = spec.title || utils.getHumanReadableName(field_key);
      field_spec.description = spec.description || "";
      field_spec.conditions = spec.conditions || [];
      field_spec.validations = spec.validations || [];
      field_spec.hide_label = spec.hide_label || false;
      field_spec.details = spec?.details || {};
      field_spec.details.datapath = spec?.details?.datapath || "";
      field_spec.details.keyname = spec?.details?.keyname || field_key;
      if (parent_field_state_key) {
        field_spec.parent_field = {
          state_key: parent_field_state_key,
          __key: parent_field_spec?.__key,
        };
      }

      // initialize field_state
      let parent_spec_location = parent_field_state?.spec_location || "spec";
      let parent_data_location = parent_field_state?.data_location || "data";
      let spec_location = parent_spec_location + ".fields." + field_key;
      let data_location =
        parent_data_location +
        "." +
        (field_spec?.details?.datapath ? field_spec.details.datapath + "." : "") +
        field_spec?.details?.keyname;
      let field_state = {
        raw_fieldspec,
        state_key,
        parent_field_state_key,
        spec_location,
        data_location,
        internal: {},
      };

      // set field defaults (initvalues)
      let current_value = _.get(_clone, data_location);
      // field has never been set, check for a default
      if (current_value === undefined) {
        let initvalue_default =
          spec?.initvalue?.has_default !== false ? spec?.initvalue?.default : undefined;
        if (initvalue_default !== undefined) {
          _.set(_clone, data_location, initvalue_default);
        }
      }
      // field has been set, check for an override
      else {
        let initvalue_override =
          spec?.initvalue?.has_override !== false ? spec?.initvalue?.override : undefined;
        if (initvalue_override !== undefined) {
          _.set(_clone, data_location, initvalue_override);
        }
      }

      _.set(_clone, `state.${field_state.state_key}`, field_state);
      _.set(_clone, field_state.spec_location, field_spec);

      return _clone;
    });

    return {
      state_key,
      removeField: () => removeField(state_key),
    };
  }

  function removeField(state_key) {
    if (state_key) {
      // console.log("removing field...", state_key);
      store.update((s) => {
        let _clone = _.cloneDeep(s);

        function removeChildren(c, parent_field_state_key) {
          for (let s of Object.values(c?.state || {})) {
            if (parent_field_state_key !== s?.parent_field_state_key) continue;
            c = removeChildren(c, s?.state_key);
            _.unset(c, `state.${s.state_key}`);
          }
          return c;
        }

        _clone = removeChildren(_clone, state_key);

        _.unset(_clone, `state.${state_key}`);

        return _clone;
      });
    }
  }

  function getField(state_key) {
    // field_state
    let current_store = get(store);
    let field_state = current_store?.state?.[state_key];
    if (!field_state) return undefined;

    // field_spec
    let spec_location = field_state.spec_location;
    let field_spec = _.get(current_store, spec_location);

    // field_data
    let data_location = field_state?.data_location;
    let key = data_location?.split(".").pop();
    let datapath = data_location?.split(".").slice(0, -1).join(".");
    let nestedObject = datapath ? _.get(current_store, datapath) : current_store;
    let field_data = {};
    for (let [k, v] of Object.entries(nestedObject || {})) {
      if (k.indexOf(key) === 0 && key !== undefined) {
        field_data[`base${k.slice(key?.length)}`] = v;
      }
    }

    return _.cloneDeep({
      data: field_data || {},
      spec: field_spec || {},
      state: field_state || {},
    });
  }

  function setField(state_key, update) {
    store.update((s) => {
      let _clone = _.cloneDeep(s);

      // set field_state
      _.set(_clone, `state.${state_key}`, update?.state);

      // get the updated state
      let field_state = _.get(_clone, `state.${state_key}`);

      if (!field_state) return _clone;

      // get spec_location and data_location
      let spec_location = field_state.spec_location;
      let data_location = field_state.data_location;

      // set field_spec
      _.set(_clone, spec_location, update?.spec);

      // set field_data
      for (let [k, v] of Object.entries(update?.data)) {
        let key = data_location + k.replace(/^base/, "");
        _.set(_clone, key, v);
      }

      return _clone;
    });
  }

  async function uploadFiles(files, filesForm) {
    if (!filesForm) {
      if (!files?.length) return;
      //create formdata from files
      filesForm = new FormData();
      files.forEach((file) => {
        filesForm.append(file.name, file);
      });
    }
    let url = dependencies?.file?.upload_url;
    //send request
    let resJSON;
    try {
      let res = await fetch(url, {
        method: "POST",
        body: filesForm,
      });
      resJSON = await utils.rawResToJSON(res);
    } catch (err) {
      console.warn(err);
    }
    let uploaded_files = resJSON?.data?.uploaded_files ?? [];
    let failed_files =
      files &&
      files
        .map((f) => {
          return { filename: f.path || f?.name };
        })
        .filter((f) => !uploaded_files.find((uf) => uf.filename === f.filename));
    return {
      uploaded_files,
      failed_files,
    };
  }

  function appendAttachment(attachment) {
    console.log("append attachment here...", attachment);
    store.update((s) => {
      let attachments = _.cloneDeep(s?.attachments || []);
      attachments.push(attachment);
      return {
        ...s,
        attachments,
      };
    });
  }

  function removeAttachment(attachment) {
    console.log("remove attachment here...", attachment);
    store.update((s) => {
      let attachments = _.cloneDeep(s?.attachments || []);
      attachments = attachments.filter((a) => a.fileuuid !== attachment?.fileuuid);
      return {
        ...s,
        attachments,
      };
    });
  }

  async function submit() {
    // loop through all the fields and run the pre_submit function
    let current_store = get(store);
    let state = current_store?.state;
    let pre_submit_results = {};
    for (let [state_key, field] of Object.entries(state)) {
      let pre_submit = field?.internal?.pre_submit;
      if (pre_submit) {
        let result = await pre_submit();
        pre_submit_results[state_key] = result;
      }
    }
    console.log("pre_submit_results", pre_submit_results);
    return _.cloneDeep(get(store));
  }

  return {
    ...store,
    dependencies,
    initialize,
    addField,
    getField,
    setField,
    removeField,
    uploadFiles,
    appendAttachment,
    removeAttachment,
    submit,
  };
}
