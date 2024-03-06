<script>
  export let label;
  export let placeholder;
  export let name;
  export let value;
  export let regex;
  export let validationMessage;

  $: regexObj = new RegExp(regex);
  //validate
  $: isError = validate(regexObj, value);
  const validate = (regexObj, value) => {
    if (!value) {
      return false;
    }
    return !regexObj.test(value);
  };
</script>

<fieldset class="flex flex-col space-y-2 text-surface-900">
  {#if label}
    <label for="input_${name}" class="block text-label">
      {label}
    </label>
  {/if}
  <div class="relative mt-2 text-field rounded-md">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
      <i class="text-surface-300 fa fa-plus fa-regular fa-fw" />
    </div>
    <input
      id="input_${name}"
      placeholder={placeholder || label}
      class="block w-full rounded-md border-0 py-1.5 pl-9 text-surface-900 ring-1 ring-inset {isError
        ? 'ring-danger-500'
        : 'ring-surface-300 focus:ring-primary-400'} focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
      {name}
      bind:value
    />
  </div>
  {#if isError && validationMessage}
    <p class="text-label text-danger-500">{validationMessage}</p>
  {/if}
</fieldset>
