<script>
  import AtRegular from "$/lib/icons/at-regular.svelte";
  import ArrowLeftSolid from "$/lib/icons/arrow-left-solid.svelte";
  import MessageSmsRegular from "$/lib/icons/message-sms-regular.svelte";
  import Whatsapp from "$/lib/icons/whatsapp.svelte";

  import {
    switching_opened,
    switch_whatsapp,
    switch_sms,
    switch_email,
    platform_name,
    contact_point_type,
    webchat_incoming_animation,
  } from "$/lib/stores/config_store.js";

  import Form from "$/lib/browser/components/Form.svelte";
  import { onDestroy } from "svelte";

  import { payload_buffer_upload_fields } from "$/lib/shared/service_upload.js";

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
    }
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
      fields: {
        "Cellphone Number": {
          fieldtype: "telephone",
        },
      },
    },
  };

  let form_telephone = writable();

  let spec_email = {
    spec: {
      fields: {
        Email: {
          fieldtype: "email",
        },
      },
    },
  };

  let form_email = writable();

  form_telephone.subscribe((form_internal) => {
    if (form_internal == undefined) {
      return;
    }

    if (form_internal.data["Cellphone Number_details"]?.is_valid_number) {
      isError = false;
      formattedNumber = form_internal.data["Cellphone Number"];
    } else {
      isError = true;
    }
  });

  form_email.subscribe((form_internal) => {
    if (form_internal == undefined) {
      return;
    }

    if (form_internal.data["Email_details"]?.is_valid_email) {
      isError = false;
      formattedEmail = form_internal.data["Email"];
    } else {
      isError = true;
    }
  });
</script>

<div class="p-2 flex flex-col bg-white h-full stubber_webchat_switch_box">
  <div class="flex w-full pl-2">
    <button
      class="w-6 h-24 my-auto transition duration-300 rounded-md mx-1"
      on:click={() => {
        $switching_opened = false;
      }}
    >
      <span class="stubber_webchat_breadcrumb_fill">
        <ArrowLeftSolid />
      </span>
    </button>
    <p class="h-24 mx-2 my-auto stubber_webchat_breadcrumb_fill">
      Back to chat
    </p>
  </div>
  <div class="flex flex-row mt-5">
    {#if $switch_whatsapp}
      <button
        class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
        class:stubber_webchat_chat_button_border_fill_selected={$platform_name ==
          "whatsapp"}
        on:click={() => {
          platform_name.set("whatsapp");
          contact_point_type.set("mobile");
        }}
      >
        <span class="w-10 mx-auto my-auto">
          <Whatsapp />
        </span>
        <p class="mx-auto mb-1">Whatsapp</p>
      </button>
    {/if}
    {#if $switch_sms}
      <button
        class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
        class:stubber_webchat_chat_button_border_fill_selected={$platform_name ==
          "sms"}
        on:click={() => {
          platform_name.set("sms");
          contact_point_type.set("mobile");
        }}
      >
        <span class="w-10 mx-auto my-auto">
          <MessageSmsRegular />
        </span>
        <p class="mx-auto mb-1">SMS</p>
      </button>
    {/if}
    {#if $switch_email}
      <button
        class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
        class:stubber_webchat_chat_button_border_fill_selected={$platform_name ==
          "email"}
        on:click={() => {
          platform_name.set("email");
          contact_point_type.set("email");
        }}
      >
        <span class="w-10 mx-auto my-auto">
          <AtRegular />
        </span>
        <p class=" mx-auto mb-1">Email</p>
      </button>
    {/if}
  </div>
  <div class="flex flex-col">
    <div class="flex flex-col mt-5 mx-2">
      <Form on:submit={handleSubmit}>
        <div class="w-full md:w-110 space-y-5">
          {#if $contact_point_type == "email"}
            <Form_field bind:form={form_email} initial_form={spec_email} />
          {:else if $contact_point_type == "mobile"}
            <Form_field
              bind:form={form_telephone}
              initial_form={spec_telephone}
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
    </div>
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_breadcrumb_fill {
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .stubber_webchat_chat_button_border_fill {
    background-color: var(--background-color);
    border: var(--neutral-color);
    fill: var(--neutral-color);
  }

  .stubber_webchat_chat_button_border_fill_selected {
    border-color: var(--primary-color);
    fill: var(--primary-color);
  }

  .stubber_webchat_switch_box {
    border: none;
  }

  .stubber_webchat_general_input {
    background-color: var(--primary-color);
    color: white;
  }

  .stubber_webchat_general_input_error {
    background-color: var(--neutral-color);
  }
</style>
