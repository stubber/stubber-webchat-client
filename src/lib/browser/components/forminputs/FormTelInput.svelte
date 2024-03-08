<script>
  export let label;
  export let name;
  export let value;
  export let validationMessage = "Invalid Number";
  export let readonly = false;

  let input;
  let isError;
  let iti;

  let intVal;

  const checkIsValid = () => {
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        isError = false;
        intVal = iti.getNumber();
      } else {
        isError = true;
      }
    }
  };

  function renderTelInput() {
    iti = window.intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: (callback) => {
        fetch("https://ipapi.co/json")
          .then((res) => res.json())
          .then((data) => callback(data.country_code))
          .catch(() => callback("us"));
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"
  />
  <script
    on:load={renderTelInput}
    src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js"
  ></script>
</svelte:head>

<div class="flex flex-col w-full space-y-2 text-surface-900">
  {#if label}
    <label for="input_${name}" class="block text-label">
      {label}
    </label>
  {/if}
  <div class="flex flex-col w-full space-y-2 relative mt-2 rounded-md">
    <input
      on:input={checkIsValid}
      bind:this={input}
      {readonly}
      type="tel"
      id="input_${name}"
      class="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset {isError
        ? 'ring-danger-500'
        : 'ring-surface-300 focus:ring-primary-400'} focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"
      bind:value
    />
    <input type="hidden" {name} bind:value={intVal} />
  </div>
  {#if isError && validationMessage}
    <!-- <p class="text-label text-danger-500">{validationMessage}</p> -->
  {/if}
</div>
