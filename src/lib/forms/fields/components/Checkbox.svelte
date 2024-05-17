<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let field;

  const internal = writable();

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;
  $: checkedvalue =
    $field.spec?.params?.checkedvalue !== undefined ? $field.spec?.params?.checkedvalue : true;
  $: uncheckedvalue =
    $field.spec?.params?.uncheckedvalue !== undefined ? $field.spec?.params?.uncheckedvalue : false;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let checked = deepEqual(f?.data?.base, checkedvalue);
    let initial_data = {
      ...f?.data,
      base: checked ? checkedvalue : uncheckedvalue,
    };
    if (!f?.spec?.without_value_details) initial_data.base_label = label;
    let initial_state_internal = {
      ...f?.state?.internal,
      checked,
    };
    _.set(f, "data", initial_data);
    _.set(f, "state.internal", initial_state_internal);
    if (!deepEqual(f, $field)) $field = f;

    syncStoreToStore(
      field,
      internal,
      (a, b) => {
        let _clone = _.cloneDeep(a.state?.internal) || {};

        // get parts from data
        _clone.checked = deepEqual(a?.data?.base, checkedvalue);

        // set field state if changed
        if (!deepEqual(a?.state?.internal, _clone)) {
          $field.state.internal = _clone;
        }

        return _clone;
      },
      (a, b) => {
        let _clone = _.cloneDeep(a) || {};
        // update the state
        _.set(_clone, "state.internal", _.cloneDeep(b));
        // update the data
        _.set(_clone, "data.base", b?.checked ? checkedvalue : uncheckedvalue);
        return _clone;
      }
    );
  });
</script>

{#if $internal}
  <div class="flex flex-col w-full {!isValid ? `text-danger-500` : `text-surface-900`}">
    <div class="flex space-x-3 relative mt-2">
      <input
        on:keydown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        type="checkbox"
        id="input_{state_key}"
        placeholder={label}
        class="block w-5 h-5 rounded-md text-label focus:outline-primary-400"
        name={state_key}
        bind:checked={$internal.checked}
      />
      <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
        {label}
      </label>
    </div>
    {#if validationMessage}
      <p class="text-label {!isValid ? `text-danger-500` : `text-success-500`}">
        {validationMessage}
      </p>
    {/if}
  </div>
{/if}

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import "../../../../app.css";
</style>

