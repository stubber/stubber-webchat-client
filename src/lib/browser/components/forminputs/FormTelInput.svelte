<script>
  import { onMount } from "svelte";
  import { isValidPhoneNumber, parsePhoneNumber  } from 'libphonenumber-js'

  export let label;
  export let name;
  export let value = "";
  export let readonly = false;
  export let isError;

  onMount(() => {
  });

  $: isError = !validate(value);

  const validate = (value) => {
    if (value == ""){
      return false;
    }

    let parsedPhoneNumber;

    try { 
      parsedPhoneNumber = parsePhoneNumber(value);
    } catch (e) {
      return false;
    }
    
    if (!isValidPhoneNumber(value)) {
      return false;
    }

    return true;
  };

</script>

<div class="flex flex-col w-full space-y-2 text-surface-900">
  {#if label}
    <label for="input_${name}" class="block text-label">
      {label}
    </label>
  {/if}
  <div class="relative rounded-md">
    <input
      {readonly}
      type="tel"
      id="input_${name}"
      placeholder={'+27 260 280 290'}
      class="block w-full text-field rounded-md py-2 pl-3 text-surface-900  focus:outline-none placeholder:text-surface-400"
      class:stubber_webchat_general_input={!isError}
      class:stubber_webchat_general_input_error={isError}
      {name}
      bind:value
    />
  </div>
</div>

<style>
  @import "../../../../app.css"
</style>
