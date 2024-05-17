<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import currency from "currency.js";
  import getSymbolFromCurrency from "currency-symbol-map";
  import * as utils from "$/lib/forms/utils/index.js";

  export let field;

  let { clickOutside, inputRegexMask } = utils;

  const currencyRegex = /^([0-9]+(\.?[0-9]?[0-9]?)?)$/;
  const currencyName = new Intl.DisplayNames("en-US", {
    type: "currency",
  });

  const internal = writable();
  let show_currency_list;

  function toggleCurrencySelectorPopout() {
    show_currency_list = !show_currency_list;
  }

  function handleFocusOut(e) {
    let targetIsOption = e.relatedTarget?.classList?.contains("selectitem");
    if (!targetIsOption) {
      show_currency_list = false;
    }
  }

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: currencyFixed = $field.spec?.params?.currency;
  $: currencyWhitelist = $field.spec?.params?.currency_whitelist ?? [];
  $: currencyBlacklist = $field.spec?.params?.currency_blacklist ?? [];
  $: currencyList =
    currencyWhitelist.length > 0
      ? currencyWhitelist.filter(Boolean).map((c) => {
          let name;
          try {
            name = currencyName.of(c);
          } catch (err) {
            console.warn(err);
          }
          return {
            value: c,
            symbol: getSymbolFromCurrency(c),
            name,
          };
        })
      : Intl.supportedValuesOf("currency")
          .filter((c) => {
            return !currencyBlacklist.includes(c);
          })
          .map((c) => {
            return {
              value: c,
              symbol: getSymbolFromCurrency(c),
              name: currencyName.of(c),
            };
          });

  function setSelectedCurrency(c) {
    let _clone = _.cloneDeep($internal) || {};
    _.set(_clone, "currencycode", c?.value);
    _.set(_clone, "currencysymbol", c?.symbol);
    $internal = _clone;
    show_currency_list = false;
  }

  $: onRawChange($internal?.raw);
  function onRawChange(val) {
    if (!$internal) return;
    let _clone = _.cloneDeep($internal) || {};
    _clone.cents = currency(val).intValue;
    _clone.amount = currency(val).value;
    if (!deepEqual(_clone, $internal)) $internal = _clone;
  }

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let data_currencycode =
      f?.data?.base_details?.currencycode &&
      currencyList.find((c) => c.value === f?.data?.base_details?.currencycode)
        ? f?.data?.base_details?.currencycode
        : null;
    let fixed_currencycode = currencyList.find((c) => c.value === currencyFixed)
      ? currencyFixed
      : null;
    let currencycode = data_currencycode || fixed_currencycode || currencyList?.[0]?.value || "USD";
    let currencysymbol = getSymbolFromCurrency(currencycode);
    let cents = currency(f?.data?.base).intValue;
    let amount = currency(f?.data?.base).value;
    let initial_value = amount?.toFixed(2).toString() ?? "0.00";
    let initial_data = {
      ...f?.data,
      base: initial_value,
    };
    if (!f?.spec?.without_value_details) {
      initial_data.base_details = {
        currencycode,
        currencysymbol,
        cents,
        amount,
      };
    }

    let initial_state_internal = {
      ...f?.state?.internal,
      currencycode,
      currencysymbol,
      cents,
      amount,
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
        if (!a?.spec?.without_value_details) {
          _clone.cents = a?.data?.base_details?.cents;
          _clone.amount = a?.data?.base_details?.amount;
          _clone.currencycode = a?.data?.base_details?.currencycode;
          _clone.currencysymbol = a?.data?.base_details?.currencysymbol;
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
        _.set(_clone, "data.base", b?.raw);
        if (!a?.spec?.without_value_details) {
          _.set(_clone, "data.base_details.amount", b?.amount);
          _.set(_clone, "data.base_details.cents", b?.cents);
          _.set(_clone, "data.base_details.currencycode", b?.currencycode);
          _.set(_clone, "data.base_details.currencysymbol", b?.currencysymbol);
        }
        return _clone;
      },
      null,
      300
    );
  });
</script>

{#if $internal}
  <div
    use:clickOutside={() => {
      if (show_currency_list) {
        show_currency_list = false;
      }
    }}
    class="flex flex-col w-full text-surface-900"
  >
    <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
      {label}
    </label>
    <div
      class="flex relative mt-2 rounded-md border-0 ring-1 {!isValid
        ? 'ring-danger-500'
        : 'ring-surface-300 focus:ring-primary-400'} focus-within:ring-2"
    >
      <div class="pointer-events-none flex items-center pl-3">
        <span class="text-label text-surface-600">
          {getSymbolFromCurrency($internal?.currencycode)}
        </span>
      </div>
      <input
        on:keydown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        use:inputRegexMask={currencyRegex}
        id="input_{state_key}"
        placeholder={label}
        class="block w-full rounded-md py-2 px-3 focus:outline-none text-surface-900 placeholder:text-surface-400"
        name={state_key}
        inputmode="decimal"
        bind:value={$internal.raw}
        on:focus={(e) => e.target.select()}
      />
      <!-- Here be selector stuff -->
      {#if currencyList && !currencyFixed}
        <button
          type="button"
          on:click={toggleCurrencySelectorPopout}
          class="w-20 pl-3 space-x-2 flex items-center bg-white hover:bg-surface-50 focus:outline-none focus:bg-surface-100 rounded-r-md"
        >
          <span class="text-field text-surface-700">{$internal?.currencycode}</span>
          <i
            class="text-surface-700 fa fa-solid fa-xs fa-caret-{show_currency_list ? 'up' : 'down'}"
          />
        </button>
      {/if}
      {#if show_currency_list && currencyList}
        <div class="z-10 absolute inset-y-[42px] right-0">
          <ul
            class="items block max-h-[250px] overflow-y-auto w-[250px] md:w-[450px] bg-white shadow-lg ring-1 ring-surface-300"
          >
            {#each currencyList as item}
              <!-- {#if currencyWhitelist.contains(item.value) && !currencyBlacklist.contains(item.value)} -->
              <li
                class="{item.value == $internal?.currencycode
                  ? 'selecteditem'
                  : ''} group hover:bg-surface-100 focus-within:bg-surface-100 text-field cursor-default"
              >
                <button
                  on:click|preventDefault={() => setSelectedCurrency(item)}
                  on:focusout={(e) => handleFocusOut(e)}
                  class="px-4 py-1 w-full flex items-center space-x-3 selectitem focus:outline-none"
                >
                  <span class="text-surface-900 text-field">{item.value}</span>
                  <span class="text-surface-700 text-field">{item.symbol}</span>
                  <span class="text-surface-500 text-field">{item.name}</span>
                  {#if item.value == $internal?.currencycode}
                    <i class="text-primary-400 ml-auto fa-regular fa-check" />
                  {/if}
                </button>
              </li>
              <!-- {/if} -->
            {/each}
          </ul>
        </div>
      {/if}
      <!-- Here end selector stuff -->
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

