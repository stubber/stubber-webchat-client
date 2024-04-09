<script>
  import { onDestroy, onMount } from "svelte";
  import { AsYouType, getCountries } from 'libphonenumber-js'
  import { default_country_code } from "$/lib/stores/configStore.js";
 
  export let label;
  export let name;
  export let value = "";
  export let formattedNumber = "";
  export let readonly = false;
  export let isError;

  let countrySelected = 'US';
  let countrySelectionIsOpen = false;
  let countryCodes = getCountries();

  let default_country_code_subscription;
  
  onMount(() => {
    default_country_code_subscription = default_country_code.subscribe(async default_country_code => {
      if (countryCodes.includes(default_country_code)){
        countrySelected = default_country_code
      }
    });
  });

  onDestroy(() => {
    default_country_code_subscription()
  })

  $: isError = !validate(value);
  
  const validate = (value) => {
    if (value == ""){
      return false;
    }
    
    const formatter = new AsYouType(countrySelected);

    formatter.input(value);

    if (formatter.getNumber()){
      if (formatter.getNumber()?.country != countrySelected && formatter.getNumber()?.country != undefined){
        countrySelected = formatter.getNumber()?.country;
      }
    }
    if (formatter.isValid()){
      formattedNumber = formatter.getNumber().number;
    }

    return formatter.isValid();
  };

  const handleSearchPress = (event) => {
    const isLetter = /^[a-zA-Z]$/.test(event.key);

    if (isLetter) {
      countryCodes = getCountries().filter((countryCode) => {
        if (countryCode[0].toLowerCase() === event.key.toLowerCase()){
          return true
        }

        return false
      })
    }

    if (event.key == "Escape" || event.key == "Backspace"){
      countryCodes = getCountries();
    }
  };

</script>

<div class="flex flex-col w-full space-y-2 text-surface-900">
  {#if label}
    <label for="input_${name}" class="block text-label">
      {label}
    </label>
  {/if}
  <div class="relative rounded-md flex">
    <div class="relative inline-block text-left mr-2 my-auto">
      <div>
        <button on:keydown={handleSearchPress} on:click={() => { countryCodes = getCountries()} } type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true" on:click={() => {countrySelectionIsOpen = !countrySelectionIsOpen}}>
          {countrySelected ? countrySelected : 'Select Tag'}
          <svg class="-mr-1 ml-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
     
      {#if countrySelectionIsOpen}
        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-64 overflow-y-auto w-full">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {#each countryCodes as countryCode}
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" on:click|preventDefault={() => {countrySelected = countryCode; countrySelectionIsOpen = false; isError = !validate(value);}}>
                {countryCode}
              </a>
            {/each}
          </div>
        </div>
      {/if}
     </div>
    <input
      {readonly}
      type="tel"
      id="input_${name}"
      class="block w-full text-field rounded-md py-2 pr-1 pl-3 text-surface-900 focus:outline-none placeholder:text-surface-400"
      class:stubber_webchat_general_input={!isError}
      class:stubber_webchat_general_input_error={isError}
      {name}
      bind:value
    />
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_general_input {
    border:2px solid var(--primary-color);
  }

  .stubber_webchat_general_input_error {
    border:2px solid var(--neutral-color)
  }
</style>

