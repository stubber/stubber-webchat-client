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
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: min_setting = $field.spec.params.min ?? false;
  $: max_setting = $field.spec.params.max ?? false;
  $: step_setting = $field.spec.params.step ?? 1;
  $: has_step = $field.spec.params.step ?? false;

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let initial_value = f?.data?.base ?? "";
    let initial_data = {
      ...f?.data,
      base: initial_value,
    };
    let initial_state_internal = {
      ...f?.state?.internal,
      raw: initial_value,
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
        _clone.raw = a?.data?.base;

        // set field state if changed
        if (!deepEqual(a?.state?.internal, _clone)) {
          $field.state.internal = _clone;
        }

        return _clone;
      },
      (a, b) => {
        let _clone = _.cloneDeep(a) || {};

        let raw = b.raw;

        // check if raw is valid
        if (max_setting != false && raw > max_setting) {
          raw = max_setting;
        }
        if (min_setting != false && raw < min_setting) {
          raw = min_setting;
        }
        if (has_step) {
          raw = Math.round(raw / step_setting) * step_setting;
        }

        // if raw is different to b.raw, update internal
        if (raw !== b.raw) $internal.raw = raw;

        b.raw = raw;

        // update the state
        _.set(_clone, "state.internal", _.cloneDeep(b));
        // update the data
        _.set(_clone, "data.base", raw);
        return _clone;
      },
      null,
      300
    );
  });
</script>

{#if $internal}
  <div class="flex flex-col w-full text-surface-900">
    <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
      {label}
    </label>
    <div class="relative rounded-md">
      <input
        on:keydown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        type="number"
        id="input_{state_key}"
        placeholder={label}
        class="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset {!isValid
          ? 'ring-danger-500'
          : 'ring-surface-300 focus:ring-primary-400'} focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"
        name={state_key}
        min={min_setting}
        max={max_setting}
        step={step_setting}
        bind:value={$internal.raw}
      />
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