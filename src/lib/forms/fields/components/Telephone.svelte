<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { AsYouType, getCountries } from 'libphonenumber-js';

  export let field;

  const internal = writable();
  let input;
  let iti;

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;

  function handleCountryChange() {
    $internal.selected_country = iti.getSelectedCountryData();
  }

  $: onRawChange($internal?.raw);
  function onRawChange(r) {
    // update fieldStateStore.data.is_valid_number
    if (!iti) return;
    let _clone = _.cloneDeep($internal) || {};
    _.set(_clone, "formatted", iti.getNumber());
    _.set(_clone, "is_valid_number", iti.isValidNumber());
    $internal = _clone;
  }

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let formatted = f?.data?.base ?? "";
    let raw = formatted;
    let is_valid_number = false;
    let selected_country = {};
    let initial_data = {
      ...f?.data,
      base: formatted,
    };
    if (!f?.spec?.without_value_details) {
      initial_data.base_details = {
        is_valid_number,
        selected_country,
      };
    }
    let initial_state_internal = {
      ...f?.state?.internal,
      raw,
      formatted,
      is_valid_number,
      selected_country,
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
        _clone.formatted = a?.data?.base;
        if (!a?.spec?.without_value_details) {
          _clone.selected_country = a?.data?.base_details?.selected_country;
          _clone.is_valid_number = a?.data?.base_details?.is_valid_number;
        }

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
        _.set(_clone, "data.base", b?.formatted);
        if (!a?.spec?.without_value_details) {
          _.set(_clone, "data.base_details.is_valid_number", b?.is_valid_number);
          _.set(_clone, "data.base_details.selected_country", b?.selected_country);
        }
        return _clone;
      },
      null,
      300
    );
  });

  $: if (input) setupInput(); // setup the input as soon as it's available
  function setupInput() {

    //override width bc base style is not responsive
    let itis = document.querySelectorAll(".iti");
    itis.forEach((iti) => {
      iti.style["width"] = "100%";
    });

    // listen for countrychange
    input.addEventListener("countrychange", handleCountryChange);

    // set initial country
    handleCountryChange();
  }
</script>

{#if $internal}
  <div class="flex flex-col w-full text-surface-900">
    <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
      {label}
    </label>
    <div
      class="w-full bg-surface-100 flex space-x-4 focus:outline-primary-400 relative mt-2 rounded-md"
    >
      <input
        bind:this={input}
        bind:value={$internal.raw}
        type="tel"
        id="input_{state_key}"
        class="w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset {!isValid
          ? 'ring-danger-500'
          : 'ring-surface-300 focus:ring-primary-400'} focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"
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
