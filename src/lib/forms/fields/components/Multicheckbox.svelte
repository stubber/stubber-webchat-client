<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let field;

  const internal = writable({
    checks: [],
  });

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
    let initial_value = f?.data?.base || [];
    let initial_data = {
      ...f?.data,
      base: initial_value,
    };
    let initial_state_internal = {
      ...f?.state?.internal,
      checks: items.map((i) =>
        Boolean(
          initial_value.find((iv) => deepEqual(iv.value, i._value) && deepEqual(iv.label, i._label))
        )
      ),
    };
    _.set(f, "state.internal", initial_state_internal);
    _.set(f, "data", initial_data);
    if (!deepEqual(f, $field)) $field = f;

    syncStoreToStore(
      field,
      internal,
      (a, b) => {
        let _clone = _.cloneDeep(a.state?.internal) || {};

        // get parts from data
        _clone.checks = items.map((i) =>
          Boolean(
            a?.data?.base.find(
              (iv) => deepEqual(iv.value, i._value) && deepEqual(iv.label, i._label)
            )
          )
        );

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
        let base = [];
        b.checks.forEach((c, index) => {
          if (c)
            base.push({
              value: items[index]._value,
              label: items[index]._label,
            });
        });
        _.set(_clone, "data.base", base);
        return _clone;
      }
    );
  });
</script>

{#if $internal}
  <div class="flex flex-col w-full {!isValid ? `text-danger-500` : `text-surface-900`}">
    {#each items as item, index}
      <div class="flex space-x-3 relative mt-2">
        <input
          on:keydown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          type="checkbox"
          id="input_{state_key}_{index}"
          placeholder={label}
          class="block w-5 h-5 rounded-md text-label focus:outline-primary-400"
          name={state_key}
          bind:checked={$internal.checks[index]}
        />
        <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
          {item._label}
        </label>
      </div>
    {/each}
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
