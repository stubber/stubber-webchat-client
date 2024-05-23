<script>
  import { onDestroy, onMount } from "svelte";
  import { writable } from 'svelte/store';
  import DOMPurify from "dompurify";
  import CheckDoubleRegular from "$/lib/icons/check-double-regular.svelte";
  import PeriodSolid from "$/lib/icons/period-solid.svelte";
  import { marked } from "marked";
  import { payloads, payload_buffer_worker } from "$/lib/shared/service_upload.js";
  import {
    webchat_incoming_animation,
    webchat_agent_name,
  } from "$/lib/stores/configStore.js";
  import FileRegular from "$/lib/icons/file-regular.svelte";
  import FileAudioRegular from "$/lib/icons/file-audio-regular.svelte";
  import Form from "$/lib/forms/Form.svelte";

  let form_writables = {};
  let messages = [];
  let attachments_loaded = {};

  let timeFormat = (dateTime) => {
    let hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");

    const am_pm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return hours + ":" + minutes + " " + am_pm;
  };

  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
    if (
      !node.hasAttribute("target") &&
      (node.hasAttribute("xlink:href") || node.hasAttribute("href"))
    ) {
      node.setAttribute("xlink:show", "new");
    }
  });

  let autoScroll = () => {
    // this is dirty i feel like there is a cleaner way to do this
    // however the latest message wont be received if the scroll is moved after a message is sent
    // i have to auto scroll when an element is created
    setTimeout(() => {
      let host = document.querySelector("stubber-webchat");
      let message_box = host.shadowRoot.getElementById(
        "stubber_webchat_message_box",
      );
      message_box.scrollTop = message_box.scrollHeight;
    }, 100);
  };

  let typingAnimationIndex = 1;

  let animateTyping = () => {
    typingAnimationIndex = typingAnimationIndex + 1;

    if (typingAnimationIndex > 3) {
      typingAnimationIndex = 0;
    }

    if ($webchat_incoming_animation) {
      setTimeout(() => {
        animateTyping();
      }, 250);
    }
  };

  let payload_subscription;
  let webchat_incoming_animation_subscription;

  let forms = {};

  onMount(() => {
    payload_subscription = payloads.subscribe((PAYLOADS) => {
      messages = [];
      let previous_agent = null;
      let previous_direction = "IN";

      for (let payload of PAYLOADS) {
        let messageObject = {
          payload_uuid: payload.payload_uuid,
          direction: payload.payload_direction,
          message: payload?.webchat_message
            ? payload?.webchat_message
            : payload.message,
          dateTime: payload.payload_date,
          delivered: false,
          attachments: payload.attachments,
        };  

        // if (payload.payload_direction == "OUT"){
        //   console.log(`Payload subscription`, payload)
        // }

        if (!payload?.webchat_agent) {
          messageObject.agent = {
            name: "Agent",
          };
        }

        if (payload?.webchat_agent) {
          messageObject.agent = payload?.webchat_agent;
        }

        if (previous_agent != payload?.webchat_agent?.name) {
          messageObject.agent.display = true;
        }

        if (previous_direction != payload.direction) {
          messageObject.agent.display = true;
        }

        if (messageObject?.attachments) {
          for (let attachment of messageObject?.attachments) {
            if (attachments_loaded[attachment.attachment_uuid] == undefined) {
              let reader = new window.FileReader();

              reader.addEventListener(
                "loadend",
                () =>
                  (attachments_loaded[attachment.attachment_uuid] =
                    reader.result),
              );
              reader.readAsDataURL(attachment.blob);
            }
          }
        }

        if (messageObject.message.type == "form"){
          if (!form_writables[messageObject.payload_uuid]){
            form_writables[messageObject.payload_uuid] = {
              writable:writable(),
              spec: messageObject.message.data.spec,
              form_name: messageObject.message.data.form_name
            } 
          }
        }

        messages.push(messageObject);
        previous_agent = messageObject.agent.name;
        previous_direction = payload.direction;
      }
      messages = messages;
      autoScroll();
    });

    webchat_incoming_animation_subscription = payloads.subscribe(
      (webchat_incoming_animation) => {
        if (webchat_incoming_animation) {
          animateTyping();
        }
      },
    );
  });

  let isSaving = {};
  let submitDots = {};
  let complete = {};

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
    if (payload_subscription) {
      payload_subscription();
    }
    if (webchat_incoming_animation_subscription) {
      webchat_incoming_animation_subscription();
    }
  });

</script>

<div
  class="p-4 overflow-y-auto flex-grow hide-scrollbar"
  id="stubber_webchat_message_box"
>
  {#each messages as messageObject}
    {#if messageObject.direction == "IN"}
      <div class="mb-2 mr-10 flex flex-col">
        {#if messageObject?.agent?.display}
          <p class="m-auto mx-2 text-sm">{messageObject?.agent.name}</p>
        {/if}
        <div
          class="bg-gray-100 rounded-lg py-1 px-3 flex flex-col stubber_message_bubble"
        >
          {#if messageObject.message.type == "markdown"}
            {@html DOMPurify.sanitize(
              marked(messageObject.message.data.trim()),
            )}
          {/if}
          {#if messageObject.message.type == "text"}
            <p class="">{messageObject.message.data}</p>
          {/if}
          {#if messageObject.message.type == "html"}
            <div class="font-mono">
              {@html messageObject.message.data}
            </div>
          {/if}
          {#if messageObject.message.type == "form"}
            <Form bind:form={form_writables[messageObject.payload_uuid].writable} initial_form={messageObject?.message?.data}/>
            <button
              class="w-[90px] h-10 mt-2 rounded-md transition duration-300 ml-auto stubber_webchat_general_input bg-gray-300"
                on:click={() => {
                  isSaving[messageObject.payload_uuid] = true;
                  animateSending();
                  form_writables[messageObject.payload_uuid].writable.subscribe(form_data => {
                    payload_buffer_worker({
                      message: {
                        type: "form",
                        data: {
                          form_data: form_data.data,
                          form_name: form_writables[messageObject.payload_uuid].form_name
                        },
                        spec: form_writables[messageObject.payload_uuid].spec
                      },
                      attachments: [],
                      payload_uuid: crypto.randomUUID()
                    }).then(() => {
                      isSaving[messageObject.payload_uuid] = false;
                      complete[messageObject.payload_uuid] = true;
                    }).catch(e => {
                      isSaving[messageObject.payload_uuid] = false;
                      complete[messageObject.payload_uuid] = false;
                    });
                  })();
                }}
              >
              {#if isSaving[messageObject.payload_uuid]}
                  {submitDots}
              {/if}
              {#if !isSaving[messageObject.payload_uuid] && !complete[messageObject.payload_uuid]}
                  Submit
              {/if}
              {#if complete[messageObject.payload_uuid] && !isSaving[messageObject.payload_uuid]}
                  Sent
              {/if}
            </button>
          {/if}
          <p class="text-sm ml-auto">
            {timeFormat(messageObject.dateTime)}
          </p>
        </div>
      </div>
    {/if}
    {#if messageObject.direction == "OUT"}
      <div class="mb-2 ml-10 text-right flex flex-col">
        <p class="m-auto mx-2 text-sm">You</p>
        <div
          class="bg-gray-100 rounded-lg py-1 px-1 flex flex-col stubber_message_bubble"
        >
          {#each messageObject.attachments as attachment}
            {#if attachment.display}
              <div class="w-full flex mb-1">
                <div
                  class="min-w-[52px] min-h-[52px] fill-gray-900 bg-gray-300 p-auto rounded-lg flex"
                >
                  {#if attachment.blob.type.startsWith("image")}
                    <img
                      src={attachments_loaded[attachment.attachment_uuid]}
                      alt=""
                      class="w-[52px] h-[52px] object-cover rounded-lg"
                    />
                  {:else if attachment.blob.type.startsWith("video")}
                    <video
                      controls={false}
                      autoplay
                      loop
                      src={attachments_loaded[attachment.attachment_uuid]}
                      class="w-[52px] h-[52px] object-cover rounded-lg"
                    >
                      <track kind="captions" />
                    </video>
                  {:else if attachment.blob.type.startsWith("audio")}
                    <div class="w-[20px] h-[20px] m-auto">
                        <FileAudioRegular/>
                    </div>
                  {:else}
                    <div class="w-[20px] h-[20px] m-auto">
                        <FileRegular/>
                    </div>
                  {/if}
                </div>
                <div class="flex-col my-2">
                  <div class="text-sm line-clamp-1 pl-2">
                    <span>
                      {attachment.blob.name}
                    </span>
                  </div>
                  <div class="text-xs text-gray-400 pl-2">
                    {attachment.blob.type}
                  </div>
                </div>
              </div>
            {/if}
          {/each}
          {#if messageObject.message.type == "text"}
            <div class="px-2">{messageObject.message.data}</div>
          {/if}
          {#if messageObject.message.type == "voice"}
            <video
              controls
              src={attachments_loaded[messageObject.message.data]}
              class="h-10"
              controlsList="nodownload"
            />
          {/if}
          <div class="flex w-full px-2">
            <p class="text-sm ml-auto mr-2">
              {timeFormat(messageObject.dateTime)}
            </p>
            <span
              class="w-3 my-auto bg-red"
              class:stubber_webchat_message_tick_received={messageObject.delivered}
              class:stubber_webchat_message_tick_pending={!messageObject.delivered}
            >
              <CheckDoubleRegular />
            </span>
          </div>
        </div>
      </div>
    {/if}
  {/each}
  {#if $webchat_incoming_animation}
    <div class="mb-2 mr-10 flex flex-col">
      <p class="m-auto mx-2 text-sm">{$webchat_agent_name}</p>
      <div class="bg-gray-200 rounded-lg py-2 px-4 flex h-10">
        {#if typingAnimationIndex >= 0}
          <span class="h-2 w-2">
            <PeriodSolid />
          </span>
        {/if}
        {#if typingAnimationIndex >= 1}
          <span class="h-2 w-2">
            <PeriodSolid />
          </span>
        {/if}
        {#if typingAnimationIndex >= 2}
          <span class="h-2 w-2">
            <PeriodSolid />
          </span>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Tailwind CSS with @apply */
  .hide-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  /* Tailwind CSS with @apply */
  .hide-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .stubber_message_bubble {
    word-break: break-word;
    text-align: left;
  }

  .stubber_webchat_general_input {
    background-color: var(--primary-color);
    color: white;
  }

  .stubber_webchat_general_input_error {
    background-color: var(--neutral-color);
  }
</style>
