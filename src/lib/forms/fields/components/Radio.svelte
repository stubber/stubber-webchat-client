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
  $: items = _.isArray($field.spec?.params?.options)
    ? $field.spec?.params?.options?.map((o, index) => {
        let { label, value } = o || {};
        let _value = value !== undefined ? value : label;
        let _label = label ?? value;
        let _key = `${state_key}${label}${index}`;
        return { _key, _label, _value };
      })
    : [];

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let initial_item = items?.find((i) => deepEqual($field.data.base, i._value));
    if (!initial_item) initial_item = items[0];
    let initial_data = {
      ...f?.data,
      base: initial_item?._value,
    };
    if (!f?.spec?.without_value_details) initial_data.base_label = initial_item?._label;
    let initial_state_internal = {
      ...f?.state?.internal,
      selected_item_key: initial_item?._key,
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
        let item = items.find((i) => i._value === a?.data?.base);
        if (!item) item = items[0];
        if (item) {
          _clone.selected_item_key = item?._key;

          // set field_label if changed
          if (!deepEqual(a?.data?.base_label, item?._label) && !a?.spec?.without_value_details) {
            $field.data.base_label = item?._label;
          }

          // set field state if changed
          if (!deepEqual(a?.state?.internal, _clone)) {
            $field.state.internal = _clone;
          }
        }

        return _clone;
      },
      (a, b) => {
        let _clone = _.cloneDeep(a) || {};
        // update the state
        _.set(_clone, "state.internal", _.cloneDeep(b));
        // update the data
        let item = items.find((i) => i._key === b?.selected_item_key);
        _.set(_clone, "data.base", item?._value);
        if (!a?.spec?.without_value_details) _.set(_clone, "data.base_label", item?._label);
        return _clone;
      }
    );
  });
</script>

{#if $internal}
  <div class="flex flex-col w-full text-surface-900">
    <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
      {label}
    </label>
    {#if items?.length}
      <fieldset
        class="flex flex-col border {!isValid
          ? 'border-warning-500'
          : 'border-surface-300'} rounded-md px-2 py-1"
        id="input_{state_key}"
      >
        {#each items as item}
          <div class="py-1">
            <input
              id="input_{item._key}"
              name={state_key}
              bind:group={$internal.selected_item_key}
              type="radio"
              value={item._key}
            />
            <label for="input_{item._key}" class="text-field">{item._label}</label>
          </div>
        {/each}
      </fieldset>
    {/if}
    {#if validationMessage}
      <p class="text-label {!isValid ? `text-danger-500` : `text-success-500`}">
        {validationMessage}
      </p>
    {/if}
  </div>
{/if}
