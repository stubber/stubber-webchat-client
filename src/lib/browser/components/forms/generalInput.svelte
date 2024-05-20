<script>
  import Form from "$/lib/browser/components/Form.svelte";
  import {
    contact_point_type,
    switching_opened,
    webchat_incoming_animation,
  } from "$/lib/stores/configStore.js";
  import { onDestroy } from "svelte";

  import { platform_name } from "$/lib/stores/configStore.js";
  import {
    payload_buffer_upload_fields,
  } from "$/lib/shared/service_upload.js";

  import Form_field from "$/lib/forms/Form.svelte";
  import { writable } from "svelte/store";

  export let isSaving = false;
  export let complete = false;

  //components
  let isError;
  let formattedNumber;
  let formattedEmail;
  let submitDots = ".";

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;

  let contact_point_type_subscription = contact_point_type.subscribe(
    (contact_point_type) => {
      complete = false;
    },
  );

  async function handleSubmit() {
    isSaving = true;
    complete = false;
    animateSending();

    webchat_incoming_animation.set(true);

    if ($contact_point_type == "email") {
      payload_buffer_upload_fields({
        platform_switch: {
          platform: $platform_name,
          value: formattedEmail,
          type: $contact_point_type,
        },
      });
    }

    if ($contact_point_type == "mobile") {
      payload_buffer_upload_fields({
        platform_switch: {
          platform: $platform_name,
          value: formattedNumber,
          type: $contact_point_type,
        },
      });
    }

    payload_buffer_upload_fields();

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

    if (submitDots.length > 5) {
      submitDots = ".";
    }

    if (isSaving) {
      setTimeout(() => {
        animateSending();
      }, 150);
    }
  };

  onDestroy(() => {
    if (contact_point_type_subscription) {
      contact_point_type_subscription();
    }
  });

  let spec_telephone = {
    spec: {
      fields:{
        "Cellphone Number":{
          fieldtype: 'telephone'
        }
      }
    }
  };

  let form_telephone = writable();

  let spec_email = {
    spec: {
      fields:{
        "Email":{
          fieldtype: 'email'
        }
      }
    }
  };

  let form_email = writable();

  form_telephone.subscribe(form_internal => {
    if (form_internal == undefined){
      return
    }
    
    if (form_internal.data['Cellphone Number_details']?.is_valid_number){
      isError = false;
      formattedNumber = form_internal.data['Cellphone Number'];
    } else {
      isError = true
    }
  })

  form_email.subscribe(form_internal => {
    if (form_internal == undefined){
      return
    }

    if (form_internal.data['Email_details']?.is_valid_email){
      isError = false;
      formattedEmail = form_internal.data['Email'];
    } else {
      isError = true;
    }
  })

</script>

<Form on:submit={handleSubmit}>
  <div class="w-full md:w-110 space-y-5">
    {#if $contact_point_type == "email"}
      <!-- <FormTextInput
        name="contact"
        label="Email Address"
        regex={emailRegex}
        validationMessage="Invalid Email"
        bind:isError
        bind:value={formattedEmail}
      /> -->
      <Form_field bind:form={form_email} initial_form={spec_email}/>
    {:else if $contact_point_type == "mobile"}
      <!-- <FormTelInput
        name="contact"
        label="Cellphone Number"
        bind:isError
        bind:formattedNumber
      /> -->
      <Form_field bind:form={form_telephone} initial_form={spec_telephone}/>
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
