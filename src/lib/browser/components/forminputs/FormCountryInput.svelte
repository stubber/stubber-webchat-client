<script>
  import { onMount } from "svelte";
  import { clickOutside } from "$lib/browser/helpers/functions.js";
  import { countries } from "countries-list";

  export let label;
  export let placeholder;
  export let name;
  export let validationMessage = "";
  export let disabled = false;
  export let isError = false;
  export let value = "";

  let isFocused = false;
  let filterText = "";
  let selectedIndex = -1;

  const codes = Object.entries(countries).map((c) => c[0]);

  const items = codes
    .map((c) => {
      return {
        _key: c,
        _label: countries[c].name,
      };
    })
    .sort((a, b) => (a._label > b._label ? 1 : b._label > a._label ? -1 : 0))
    .map((c) => {
      return {
        _key: c._key,
        _label: `${countries[c._key].emoji} ${c._label}`,
      };
    });

  onMount(() => {
    if (value)
      setSelected({
        _key: value,
        _label: `${countries[value].emoji} ${countries[value].name}`,
      });
  });

  $: if (value) {
    filterText = `${countries[value].emoji} ${countries[value].name}`;
  }

  const setSelected = (selectedItem) => {
    value = selectedItem._key;
    isFocused = false;
  };

  function handleDeselect() {
    value = null;
    filterText = "";
  }

  function handleFocusOut(e) {
    let targetIsOption = e.relatedTarget?.classList?.contains("selectitem");
    if (!targetIsOption) {
      isFocused = false;
    }
  }
</script>

<div
  use:clickOutside={() => {
    if (isFocused) {
      isFocused = false;
    }
  }}
  class="relative flex flex-col w-full space-y-2 text-surface-900"
>
  {#if label}
    <label for="input_${name}" class="block text-label">
      {label}
    </label>
  {/if}
  <div class="relative flex flex-col w-full">
    <div class="relative flex mt-2 rounded-md">
      <input
        {disabled}
        on:keydown={(e) => {
          switch (e.key) {
            case "Enter":
              if (selectedIndex >= 0 && selectedIndex < items.length) {
                setSelected(items[selectedIndex]);
              }
              e.preventDefault();
              break;
            case "ArrowDown":
              selectedIndex = (selectedIndex + 1) % items.length;
              e.preventDefault();
              break;
            case "ArrowUp":
              selectedIndex = (selectedIndex - 1 + items.length) % items.length;
              e.preventDefault();
              break;
          }
        }}
        on:input={() => (value = "")}
        on:focus={() => {
          isFocused = true;
        }}
        on:focusout={(e) => handleFocusOut(e)}
        type="select"
        id="input_mask${name}"
        placeholder={placeholder || label}
        class="block w-full rounded-md border-0 py-2 pl-3 pr-9 text-field text-surface-900 {isError
          ? 'ring-danger-500'
          : 'ring-surface-300 focus:ring-primary-400'} ring-1 ring-inset focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"
        bind:value={filterText}
        autocomplete="off"
      />
      <input hidden {name} bind:value />
      {#if !value}
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <i class="text-surface-300 fa-regular fa-arrows-up-down fa-fw" />
        </div>
      {/if}
      {#if value}
        <button
          on:click={handleDeselect}
          class="absolute inset-y-0 right-0 flex items-center pr-2 text-surface-300 hover:text-danger-500"
        >
          <i class="fa-regular fa-x fa-fw" />
        </button>
      {/if}
    </div>
    {#if isFocused}
      <div class="z-10 w-full absolute inset-y-[55px]">
        {#if items?.length > 0}
          <ul
            class="block max-h-[200px] overflow-y-auto w-full bg-white shadow-lg rounded-md ring-1 ring-surface-300"
          >
            {#each items as item, index}
              {#if item._label.toLowerCase().includes(filterText.toLowerCase())}
                <li
                  class="group {selectedIndex === index
                    ? 'bg-primary-400'
                    : ''} hover:bg-primary-400 focus-within:bg-primary-400 text-field cursor-default"
                >
                  <button
                    on:click|preventDefault={() => setSelected(item)}
                    on:focusout={(e) => handleFocusOut(e)}
                    class="selectitem text-surface-900 group-hover:text-white focus:text-white focus:outline-none px-2.5 py-1.5 w-full flex items-center"
                  >
                    {item._label}
                    {#if item._key == value}
                      <i
                        class="group-hover:text-white text-primary-400 ml-auto fa-regular fa-check"
                      />
                    {/if}
                  </button>
                </li>
              {/if}
            {/each}
          </ul>
        {:else}
          <div
            class="h-[100px] flex items-center justify-center w-full bg-white shadow-lg rounded-md ring-1 ring-surface-300"
          >
            <span class="text-paragraph text-surface-400">Start typing to search...</span>
          </div>
        {/if}
      </div>
    {/if}
  </div>
  {#if validationMessage}
    <p class="text-label text-danger-500">{validationMessage}</p>
  {/if}
</div>
