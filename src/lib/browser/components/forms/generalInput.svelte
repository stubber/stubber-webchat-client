<script>
  import Form from "$/lib/browser/components/Form.svelte";
  import FormTelInput from "$/lib/browser/components/forminputs/FormTelInput.svelte";
  import FormTextInput from "$/lib/browser/components/forminputs/FormTextInput.svelte";
  import { sendClientConfig } from "$/lib/shared/socketService.js";
  import { contact_point_type } from "$/lib/stores/configStore.js";

  // export let submit;
  export let isSaving;
  // export let contact_point_type;

  //components
  let isError;
  let formattedNumber;
  let formattedEmail;

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;

  async function handleSubmit() {
    if ($contact_point_type == "email") {
      await sendClientConfig({
        contact: formattedEmail,
        type: $contact_point_type,
      });
    }

    if ($contact_point_type == "mobile") {
      await sendClientConfig({
        contact: formattedNumber,
        type: $contact_point_type,
      });
    }
  }
</script>

<Form on:submit={handleSubmit}>
  <div class="w-full md:w-110 space-y-5">
    {#if $contact_point_type == "email"}
      <FormTextInput
        name="contact"
        label="Email Address"
        regex={emailRegex}
        validationMessage="Invalid Email"
        bind:isError
        bind:value={formattedEmail}
      />
    {:else if $contact_point_type == "mobile"}
      <FormTelInput
        name="contact"
        label="Cellphone Number"
        bind:isError
        bind:formattedNumber={formattedNumber}
      />
    {/if}
    {#if $contact_point_type}
      <div class="flex flex-row space-x-2 items-center">
        <button
          type="submit"
          class="w-32 h-10 transition duration-300 my-2 mx-auto bg-gray-300 rounded-xl stubber_webchat_chat_button border"
          disabled={isError}
          class:stubber_webchat_general_input={!isError}
          class:stubber_webchat_general_input_error={isError}
        >
          {#if isSaving}
            Sending...
          {/if}
          {#if !isSaving}
            Submit
          {/if}
        </button>
      </div>
    {/if}
  </div>
</Form>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  .stubber_webchat_general_input {
    background-color: var(--primary-color);
    color: white;
  }

  .stubber_webchat_general_input_error {
    background-color: var(--neutral-color);
  }
</style>
