<script>
  import Tooltip from "../Tooltip.svelte";

  export let label;
  export let placeholder = "";
  export let name;
  export let value;
  export let regex = "";
  export let validationMessage = "";
  export let readonly = false;
  export let disabled = false;
  export let tooltipText = "";
  export let isError = false;

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

<div class="flex flex-col w-full space-y-2 text-surface-900">
  {#if label}
    <div class="flex items-center space-x-2">
      <label for="input_${name}" class="block text-label">
        {label}
      </label>
      {#if tooltipText}
        <Tooltip>
          <span slot="subject">
            <i class="fa fa-circle-question text-surface-500" />
          </span>
          <span slot="tooltip">
            {tooltipText}
          </span>
        </Tooltip>
      {/if}
    </div>
  {/if}
  <div class="relative rounded-md">
    <input
      {disabled}
      {readonly}
      type="text"
      id="input_${name}"
      placeholder={placeholder || label}
      class="block w-full text-field rounded-md py-2 pl-3 text-surface-900 focus:outline-none placeholder:text-surface-400"
      class:stubber_webchat_general_input={!isError}
      class:stubber_webchat_general_input_error={isError}
      {name}
      bind:value
    />
  </div>
  {#if isError && validationMessage}
    <!-- <p class="text-label text-danger-500">{validationMessage}</p> -->
  {/if}
</div>

<style>
  @import "../../../../app.css"
</style>
