<script>
  import Form from "$/lib/browser/components/Form.svelte";
  import FormTelInput from "$/lib/browser/components/forminputs/FormTelInput.svelte";
  import FormTextInput from "$/lib/browser/components/forminputs/FormTextInput.svelte";
  import { sendClientConfig } from "$/lib/shared/socketService.js";
  import { contact_point_type, switching_opened } from "$/lib/stores/configStore.js";
  import { onDestroy } from "svelte";
  
  export let isSaving = false;
  export let complete = false;

  //components
  let isError;
  let formattedNumber;
  let formattedEmail;
  let submitDots = ".";

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;

  let contact_point_type_subscription = contact_point_type.subscribe(contact_point_type => {
    complete = false;
  });

  async function handleSubmit() {
    isSaving = true;
    complete = false;
    animateSending();

    if ($contact_point_type == "email") {
      await sendClientConfig({
        contact: formattedEmail,
        type: $contact_point_type,
      });
    };

    if ($contact_point_type == "mobile") {
      await sendClientConfig({
        contact: formattedNumber,
        type: $contact_point_type,
      });
    };

    setTimeout(() => {
      isSaving = false;
      complete = true;

      setTimeout(() => {
        switching_opened.set(false);
      }, 900);
    }, 900);
  }

  let animateSending = () => {
    submitDots += ".";

    if (submitDots.length > 5){
      submitDots = ".";
    }

    if (isSaving){
      setTimeout(() => {
        animateSending();
      }, 150);
    }
  }

  onDestroy(() => {
    if (contact_point_type_subscription) {
      contact_point_type_subscription();
    }
  });
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
          disabled={isError || isSaving}
          class:stubber_webchat_general_input={!isError}
          class:stubber_webchat_general_input_error={isError}
        >
          {#if isSaving}
            {submitDots}
          {/if}
          {#if !isSaving && !complete}
            Submit
          {/if}
          {#if complete}
            Sent
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
