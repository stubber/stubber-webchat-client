<script>
  import SignaturePad from "signature_pad";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { deepEqual } from "fast-equals";
  import { writable } from "svelte/store";
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";

  export let form;
  export let field;

  const internal = writable({});

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;

  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;

  let canvasContainer;
  let pad;
  let signaturePad;

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);

    let initial_value = f?.data?.base ?? {
      data: [],
      file: undefined,
    };
    let initial_data = {
      ...f?.data,
      base: initial_value,
    };
    let initial_state_internal = {
      value: initial_value,
    };

    _.set(f, "data", initial_data);
    _.set(f, "state.internal", initial_state_internal);
    if (!deepEqual(f, $field)) $field = f;

    //init signature pad
    signaturePad = new SignaturePad(pad);
    signaturePad.addEventListener("endStroke", handleStroke);
    setTimeout(() => {
      let d = _.isArray($field.data?.base) ? $field.data?.base : [];
      signaturePad.fromData(d);
    }, 0);

    syncStoreToStore(
      field,
      internal,
      (a, b) => {
        let _clone = _.cloneDeep(a.state?.internal) || {};

        // get parts from data
        _clone.value = a?.data?.base;
        _clone.file = a?.data?.base?.file;

        // set field state if changed
        if (!deepEqual(a?.state?.internal, _clone)) {
          $field.state.internal = _clone;
          //update signature pad
          let d = _.isArray(_clone.value) ? _clone.value : [];
          signaturePad.fromData(d);
        }
        return _clone;
      },
      (a, b) => {
        let _clone = _.cloneDeep(a) || {};
        // update the state
        _.set(_clone, "state.internal", _.cloneDeep(b));
        // update the data
        _.set(_clone, "data.base", b?.value);
        return _clone;
      }
    );
  });

  async function uploadFile() {
    const fileURI = signaturePad.toDataURL();
    const fileBlob = await (await fetch(fileURI)).blob();
    const filesForm = new FormData();
    filesForm.append(label, fileBlob);
    let upload_res = await form.uploadFiles(null, filesForm);
    let { uploaded_files } = upload_res;
    if (uploaded_files?.length) {
      $internal.value.file = uploaded_files[0];
      uploaded_files.forEach((a) => {
        form.appendAttachment(a);
      });
    } else {
      console.warn("Failed to upload file");
    }

    return true;
  }

  function clear() {
    signaturePad.clear();
    $field.data.base = {
      data: null,
    };
  }

  function handleStroke() {
    const data = signaturePad.toData();
    let comparison = _.cloneDeep($internal);
    comparison.value.data = _.cloneDeep(data);
    comparison.upload = true;

    if (!deepEqual(comparison, $internal)) {
      $internal = comparison;
      uploadFile();
    }
  }

  $: canvasWidth = canvasContainer?.clientWidth;
</script>

{#if $internal}
  <div class="flex flex-col w-full text-surface-900">
    <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
      {label}
    </label>
    <div bind:this={canvasContainer}>
      <canvas
        bind:this={pad}
        id="signature-pad"
        class="signature-pad mt-2 rounded-md border"
        width={canvasWidth}
        height={200}
      />
      <div class="mt-0 text-sm">
        <button
          on:click={clear}
          type="button"
          class="text-surface-500 text-sm hover:text-surface-700"
        >
          Clear
        </button>
      </div>
    </div>
    {#if validationMessage}
      <p class="text-label {!isValid ? `text-danger-500` : `text-success-500`}">
        {validationMessage}
      </p>
    {/if}
  </div>
{/if}
