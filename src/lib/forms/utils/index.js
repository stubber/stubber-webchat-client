import _ from "lodash-es";
import { components } from "$/lib/forms/fields/components/index.js";
import { derived, writable, get } from "svelte/store";
import { deepEqual } from "fast-equals";

export { createForm } from "./createForm.js";
export { createField } from "./createField.js";

export function mapFieldToComponent(fieldSettings) {
  let fieldcomponent = components[fieldSettings?.fieldtype];
  if (!fieldcomponent) return null;
  return fieldcomponent;
}

export function sortObjectsBy__order(objects) {
  if (!objects) return null;
  let sortedObjects = _.orderBy(objects, ["__order"], ["asc"]);
  return sortedObjects;
}

export function getHumanReadableName(snakeName) {
  let humanReadableName = snakeName
    .split("_")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return humanReadableName;
}

export function clickOutside(element, callbackFunction) {
  function onClick(event) {
    if (!element.contains(event.target)) {
      callbackFunction();
    }
  }

  document.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    },
  };
}

export function inputRegexMask(input, regex) {
  let lastValidValue;

  function handleBeforeInput(event) {
    lastValidValue = event.target.value;
  }

  function handleInput(event) {
    const { value, selectionStart } = event.target;
    if (!regex.test(event.target.value) && event.target.value) {
      event.target.value = lastValidValue;
      const cursorPlace = selectionStart - (value.length - event.target.value.length);
      requestAnimationFrame(() => event.target.setSelectionRange(cursorPlace, cursorPlace));
      return;
    }

    lastValidValue = value;
  }

  input.addEventListener("beforeinput", handleBeforeInput);
  input.addEventListener("input", handleInput);

  return {
    destroy() {
      input.removeEventListener("beforeinput", handleBeforeInput);
      input.removeEventListener("input", handleInput);
    },
  };
}

export async function rawResToJSON(rawRes) {
  let contentType = rawRes.headers.get("Content-Type");
  let isJSON = contentType.indexOf("application/json") !== -1;
  return isJSON ? await rawRes.json() : {};
}

export function debounce(func, debounce, precall) {
  let timeout;
  return (...args) => {
    let is_precalled = false;
    if (precall) {
      precall = false;
      is_precalled = true;
      func(...args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!is_precalled) func(...args);
    }, debounce);
  };
}

export function getFieldsToRender(fields) {
  if (!_.isObject(fields)) return null;
  let fields_array = Object.entries(fields)
    .map(([__key, spec]) => {
      return {
        ...spec,
        __key,
      };
    })
    .filter((f) => Boolean(f.__key));
  return sortObjectsBy__order(fields_array);
}

export function unequalDerived(s, func) {
  const _d = derived(s, func);

  const _s = writable(get(_d));

  _d.subscribe((v) => {
    if (!deepEqual(v, get(_s))) _s.set(v);
  });

  return {
    subscribe: _s.subscribe,
  };
}
