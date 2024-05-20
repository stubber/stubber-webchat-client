<script>
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import * as utils from "$/lib/forms/utils/index.js";

  export let field;

  const internal = writable();
  const { clickOutside } = utils;

  let is_focused = false;
  let filter_text = "";
  let input;

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
  $: filteritems = items.filter((i) => {
    let _filter_text = filter_text?.toLowerCase();
    if (!_filter_text) return true;
    let _label = i?._label?.toLowerCase();
    return _label?.includes(_filter_text);
  });

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let initial_item = items?.find((i) => deepEqual($field.data.base, i._value));
    let initial_data = {
      ...f?.data,
      base: initial_item?._value ?? null,
    };
    if (!f?.spec?.without_value_details) initial_data.base_label = initial_item?._label;
    let initial_state_internal = {
      ...f?.state?.internal,
      focused_index: -1,
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
        if (item) {
          filter_text = item?._label;
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

  let teleportedNode = null;
  onDestroy(() => {
    if (teleportedNode) {
      teleportedNode.remove();
      teleportedNode = null;
    }
  });

  // used to show the dropdown panel in the body instead of inside the component
  // fixes an issue where the dropdown panel would be cut off by the parent container
  function teleport(node) {
    // Get the original position and width
    let rect = node.getBoundingClientRect();
    let originalWidth = node.offsetWidth;
    let originalHeight = node.offsetHeight;

    // Teleport to the body
    let teleportContainer = document.body;
    teleportContainer.appendChild(node);

    teleportedNode = node;

    // Apply the original width and position to the teleported element
    node.style.width = originalWidth + "px";
    node.style.height = originalHeight + "px";
    node.style.position = "absolute";
    node.style.top = rect.top + window.scrollY + "px";
    node.style.left = rect.left + "px";

    // set z-index to 1000
    node.style.zIndex = 1000;
  }

  function setSelected(item) {
    filter_text = item._label;
    let comparison = _.cloneDeep($internal);
    comparison.focused_index = -1;
    comparison.selected_item_key = item._key;

    if (!deepEqual(comparison, $internal)) {
      $internal = _.cloneDeep(comparison);
    }

    is_focused = false;
    input.blur();
  }
</script>

{#if $internal}
  <div
    use:clickOutside={() => {
      if (is_focused) {
        is_focused = false;
        filter_text = $field?.data?.base_label ?? "";
      }
    }}
    class="relative flex flex-col w-full text-surface-900"
  >
    <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
      {label}
    </label>
    <div class="relative flex rounded-md">
      <input
        on:keydown={(e) => {
          switch (e.key) {
            case "Enter":
              if ($internal.focused_index >= 0 && $internal.focused_index < items.length) {
                setSelected(filteritems[$internal.focused_index]);
              }
              e.preventDefault();
              break;
            case "ArrowDown":
              $internal.focused_index = ($internal.focused_index + 1) % items.length;
              e.preventDefault();
              break;
            case "ArrowUp":
              $internal.focused_index = ($internal.focused_index - 1 + items.length) % items.length;
              e.preventDefault();
              break;
          }
        }}
        on:focus={() => {
          if (!is_focused) {
            is_focused = true;
            filter_text = "";
          }
        }}
        bind:this={input}
        type="select"
        id="input_{state_key}"
        placeholder={label}
        class="block w-full rounded-md border-0 py-1.5 pl-3 pr-9 text-field text-surface-900 ring-1 ring-inset {!isValid
          ? 'ring-danger-500'
          : 'ring-surface-300 focus:ring-primary-400'} focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"
        name={state_key}
        bind:value={filter_text}
        autocomplete="off"
      />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <i class="text-surface-300 fa-regular fa-arrows-up-down fa-fw" />
      </div>
    </div>
    {#if is_focused}
      <div use:teleport class="z-10 w-full inset-y-[70px]">
        <ul
          class="items block max-h-[200px] overflow-y-auto w-full bg-white shadow-lg rounded-md ring-1 ring-surface-300"
        >
          {#each filteritems as item, index (item._key)}
            <li
              class="group {$internal.focused_index === index
                ? 'bg-primary-400'
                : ''} hover:bg-primary-400 focus-within:bg-primary-400 text-field cursor-default"
            >
              <button
                type="button"
                on:click|preventDefault={() => setSelected(item)}
                class="selectitem text-surface-900 group-hover:text-white focus:text-white focus:outline-none px-4 py-1.5 w-full flex items-center"
              >
                {item._label}
                {#if item._key === $internal?.selected_item_key}
                  <i class="text-primary-400 ml-auto fa-regular fa-check" />
                {/if}
              </button>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
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
