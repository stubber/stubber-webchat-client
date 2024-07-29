<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {
    AsYouType,
    getCountries,
    getCountryCallingCode,
  } from "libphonenumber-js";

  export let field;

  const internal = writable();
  let input;

  let countryCodes = getCountries();
  let countrySelectionIsOpen = false;
  let isError = false;
  let focusing = false;

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: internal.selected_country = { iso2: "US" };

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  function handleSearchPress(event) {
    const isLetter = /^[a-zA-Z]$/.test(event.key);

    if (isLetter) {
      countryCodes = getCountries().filter((countryCode) => {
        if (countryCode[0].toLowerCase() === event.key.toLowerCase()) {
          return true;
        }

        return false;
      });
    }

    if (event.key == "Escape" || event.key == "Backspace") {
      countryCodes = getCountries();
    }
  }

  function handleCountryChange(country) {
    $internal.selected_country.iso2 = country;
  }

  $: onRawChange($internal?.raw);
  function onRawChange(r) {
    if (!r) return;

    const formatter = new AsYouType($internal.selected_country.iso2);

    formatter.input(r);

    if (formatter.getNumber()) {
      if (
        formatter.getNumber()?.country != $internal.selected_country.iso2 &&
        formatter.getNumber()?.country != undefined
      ) {
        $internal.selected_country.iso2 = formatter.getNumber()?.country;
      }
    }

    let _clone = _.cloneDeep($internal) || {};

    if (formatter.isValid()) {
      _.set(_clone, "formatted", formatter.getNumber().number);
    } else {
      _.set(_clone, "formatted", r);
    }

    _.set(_clone, "is_valid_number", formatter.isValid());
    $internal = _clone;
  }

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let formatted = f?.data?.base ?? "";
    let raw = formatted;
    let is_valid_number = false;
    let selected_country = { iso2: "US" };
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
        if (a == undefined) {
          return;
        }
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
          _.set(
            _clone,
            "data.base_details.is_valid_number",
            b?.is_valid_number
          );
          _.set(
            _clone,
            "data.base_details.selected_country",
            b?.selected_country
          );
        }
        return _clone;
      },
      null,
      300
    );
  });

  $: if (input) setupInput(); // setup the input as soon as it's available
  function setupInput() {}
</script>

{#if $internal}
  <div class="flex flex-col w-full text-surface-900">
    <label
      for="input_{state_key}"
      class="block text-label {hide_label ? 'hidden' : ''}"
    >
      {label}
    </label>
    <div
      class="w-full flex relative mt-2 rounded-md ring-inset {focusing
        ? 'ring-2'
        : 'ring-1'} bg-white p-[2px]"
    >
      <div class="flex w-10">
        <button
          on:keydown={handleSearchPress}
          on:click={() => {
            countryCodes = getCountries();
          }}
          type="button"
          class="justify-center w-full border-0 text-sm font-medium bg-transparent"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          on:click={() => {
            countrySelectionIsOpen = !countrySelectionIsOpen;
          }}
        >
          {$internal.selected_country.iso2
            ? getFlagEmoji($internal.selected_country.iso2)
            : "Select Tag"}
        </button>
      </div>

      {#if countrySelectionIsOpen}
        <div
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-64 overflow-y-auto w-full z-30"
        >
          <div
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {#each countryCodes as countryCode}
              <a
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                on:click|preventDefault={() => {
                  $internal.selected_country.iso2 = countryCode;
                  countrySelectionIsOpen = false;
                  onRawChange($internal?.raw);
                }}
              >
                {getFlagEmoji(countryCode)}
                {countryCode}
                {getCountryCallingCode(countryCode)}
              </a>
            {/each}
          </div>
        </div>
      {/if}

      <input
        bind:this={input}
        bind:value={$internal.raw}
        on:focusin={() => (focusing = true)}
        on:focusout={() => (focusing = false)}
        type="tel"
        id="input_{state_key}"
        class="w-full rounded-md py-2 text-surface-900 border-0 outline-none focus:outline-none"
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
