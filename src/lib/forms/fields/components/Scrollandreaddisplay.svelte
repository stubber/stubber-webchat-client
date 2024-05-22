<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let field;

  const internal = writable();
  let outer;

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: displaytext = $field.spec?.params?.displaytext || "";
  $: checkedvalue =
    $field.spec?.params?.checkedvalue !== undefined ? $field.spec?.params?.checkedvalue : true;
  $: uncheckedvalue =
    $field.spec?.params?.uncheckedvalue !== undefined ? $field.spec?.params?.uncheckedvalue : false;

  function handleScroll() {
    let scroll_percentage = Math.ceil(
      (outer?.scrollTop * 100) / (outer?.scrollHeight - outer.clientHeight)
    );
    if (outer?.scrollHeight - outer.clientHeight === 0) scroll_percentage = 100;
    if (!$internal.scrolled_to_bottom) $internal.scrolled_to_bottom = scroll_percentage >= 99;
  }

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
      scrolled_to_bottom: checked,
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
        if (_clone.checked) _clone.scrolled_to_bottom = true;

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

  $: if (outer) handleScroll();
</script>

{#if $internal}
  <div class="flex flex-col w-full text-surface-900">
    <!-- div with inner shadow -->
    <div
      bind:this={outer}
      class="border max-h-[300px] overflow-y-scroll shadow-inner"
      on:scroll={handleScroll}
    >
      <div class="p-6 px-2">
        {@html displaytext}
      </div>
    </div>
    <div
      class="{!$internal.scrolled_to_bottom
        ? 'opacity-20'
        : ''} flex space-x-3 relative mt-2 {!isValid ? 'border-b border-warning-500' : ''}"
    >
      <input
        disabled={!$internal.scrolled_to_bottom}
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