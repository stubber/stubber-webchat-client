<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "open",
  }}
/>

<script>
  console.log("stubber webchat v2.0");

  import { onDestroy, onMount } from "svelte";
  import GeneralInput from "$/lib/browser/components/forms/generalInput.svelte";

  import DOMPurify from "dompurify";
  import { marked } from "marked";
  import io from "socket.io-client";

  import AtRegular from "$/lib/icons/at-regular.svelte";
  import CheckDoubleRegular from "$/lib/icons/check-double-regular.svelte";
  import CircleXMarkRegular from "$/lib/icons/circle-xmark-regular.svelte";
  import PaperPlaneTopRegular from "$/lib/icons/paper-plane-top-regular.svelte";
  import UserSolid from "$/lib/icons/user-solid.svelte";
  import ArrowLeftSolid from "$/lib/icons/arrow-left-solid.svelte";
  import MessageSmsRegular from "$/lib/icons/message-sms-regular.svelte";
  import Whatsapp from "$/lib/icons/whatsapp.svelte";

  export let orguuid;
  export let chat_name;
  export let chat_display_name;
  export let connect_on_open;
  export let open_on_mount;
  export let pass_through_data;

  let socket;
  let WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;
  let WEBCHAT_API_SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

  let message = ``;
  let messages = [];

  let webchat_enable = false;
  let webchat_opened = false;

  let switching_opened = false;
  let switch_whatsapp = false;
  let switch_sms = false;
  let switch_email = false;

  let platform_name = "whatsapp";
  let contact_point_type = "mobile";

  onMount(() => {
    console.log("__Mounted");
    if (open_on_mount === "true") {
      openWebchat();
      return;
    }
    if (connect_on_open && webchat_enable) {
      connectSocket();
    }
  });

  let connectSocket = () => {
    socket = io(WEBCHAT_API_URL, {
      path: WEBCHAT_API_SOCKET_PATH,
    });

    socket.on("connect", async () => {
      console.log("___Connected to server");

      if (messages.length == 0) {
        await socket.emit("initialize", {
          webchat_configuration: {
            orguuid,
            chat_name: chat_name,
            initialize: true,
            pass_through_data,
          },
        });
      }

      if (message.length > 0) {
        sendMessage();
      }
    });

    socket.on("disconnect", () => {
      console.log("___Disconnected from server");
    });

    socket.on("webchat_message", (data) => {
      let previous_direction = null;

      if (messages.length > 0) {
        previous_direction = messages[messages.length - 1].direction;
      }

      let messageObject = {
        direction: "in",
        previous_direction,
        sent: false,
        received: false,
        dateTime: new Date(),
        messageuuid: crypto.randomUUID(),
        message: data.webchat_message,
      };

      messages.push(messageObject);
      messages = messages;

      autoScroll();
    });

    socket.on("webchat_client_configuration", (data) => {
      let settings = Object.keys(data);

      console.log(data);

      settings.forEach((key) => {
        if (data[key].type == "switching") {
          switch_whatsapp = data[key]?.value?.whatsapp;
          switch_sms = data[key]?.value?.sms;
          switch_email = data[key]?.value?.email;

          if (
            switching_opened &&
            !switch_whatsapp &&
            !switch_sms &&
            !switch_email
          ) {
            switching_opened = false;
          }
        }
      });
    });

    socket.on("error", (data) => {
      console.log("__Stubber Webchat : " + data?.error);
    });
  };

  let handleEnterPress = (event) => {
    if (event.key === "Enter" && message != "") {
      sendMessage();
    }
  };

  let sendMessage = async () => {
    if (!socket) {
      connectSocket();
      return;
    }

    let previous_direction = "in";

    if (messages.length > 0) {
      previous_direction = messages[messages.length - 1].direction;
    }

    let messageObject = {
      direction: "out",
      previous_direction,
      sent: false,
      received: false,
      dateTime: new Date(),
      messageuuid: crypto.randomUUID(),
      message,
    };
    messages.push(messageObject);
    messages = messages;
    message = "";

    autoScroll();

    if (socket.connected) {
      console.log("sent message");
      await socket.emit("message", {
        webchat_configuration: {
          orguuid,
          chat_name,
          pass_through_data,
        },
        webchat_message: {
          type: "text",
          value: messageObject.message,
          messageuuid: messageObject.messageuuid,
        },
      });
      messageObject.received = true;
      messages = messages;
    }
  };

  let sendClientConfig = async (contactPoint) => {
    if (!socket) {
      connectSocket();
    }

    console.log("sent config");

    if (socket.connected) {
      await socket.emit("client_configuration", {
        webchat_configuration: {
          orguuid,
          chat_name,
          pass_through_data,
        },
        webchat_client_configuration: {
          platform_switch: {
            platform_name: platform_name,
            value: contactPoint,
          },
        },
      });
      switching_opened = false;
    }
  };

  let timeFormat = (dateTime) => {
    let hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");

    const am_pm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return hours + ":" + minutes + " " + am_pm;
  };

  let autoScroll = () => {
    // this is dirty i feel like there is a cleaner way to do this
    // however the latest message wont be received if the scroll is moved after a message is sent
    // i have to auto scroll when an element is created
    setTimeout(() => {
      let host = document.querySelector("stubber-webchat");
      let message_box = host.shadowRoot.getElementById(
        "stubber_webchat_message_box"
      );
      message_box.scrollTop = message_box.scrollHeight;
    }, 100);
  };

  let openWebchat = () => {
    console.log("running");
    webchat_enable = true;

    if (connect_on_open === "true" && !webchat_opened) {
      connectSocket();
    };
    // if (connect_on_open === "true") {
    //   if (!webchat_opened){
    //   };
    //   connectSocket();
    // };

    webchat_opened = true;
  };

  let openSwitching = () => {
    switching_opened = true;
  };

  onDestroy(() => {
    if (ws) {
      ws.close();
    }
  });

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
</script>

<div part="host" class="stubber_webchat_outer_box">
  <div
    class="z-50 stubber_webchat_theme fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end"
  >
    {#if !webchat_enable}
      <button
        class="py-2 px-2 rounded-md transition duration-300 flex stubber_webchat_chat_button"
        on:click={openWebchat}
      >
        <p class="m-auto mx-2">Chat</p>
        <span class="h-6 w-5 mr-2 my-auto fill-white">
          <UserSolid />
        </span>
      </button>
    {/if}
  </div>

  {#if webchat_enable}
    <div
      class="z-50 stubber_webchat_theme fixed right-0 bottom-0 flex w-full min-w-[250px] max-w-[500px] min-h-[200px] max-h-[1000px] h-5/6 pt-4"
    >
      <div
        class="flex flex-col flex-grow justify-end mx-4 transition duration-300 rounded-t-xl stubber_webchat_message_box"
      >
        <div
          class="pl-4 p-3 border-b rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"
        >
          <p class="text-2xl font-semibold stubber_webchat_text">
            {!chat_display_name ? "" : chat_display_name}
          </p>
          <button
            class="rounded-md w-5 mx-1"
            on:click={() => {
              webchat_enable = false;
            }}
          >
            <span class="w-5 fill-white rotate-45 my-auto">
              <CircleXMarkRegular />
            </span>
          </button>
        </div>
        {#if !switching_opened}
          <div
            class="p-4 overflow-y-auto flex-grow hide-scrollbar"
            id="stubber_webchat_message_box"
          >
            {#each messages as messageObject}
              {#if messageObject.direction == "in"}
                <div class="mb-2 mr-10 flex flex-col">
                  {#if messageObject.previous_direction == "out" || !messageObject.previous_direction}
                    <p class="m-auto mx-2 text-sm">Agent</p>
                  {/if}
                  <div class="bg-gray-200 rounded-lg py-2 px-4 flex flex-col">
                    {#if messageObject.message.type == "markdown"}
                      {@html DOMPurify.sanitize(
                        marked(messageObject.message.value.trim())
                      )}
                    {/if}
                    {#if messageObject.message.type == "text"}
                      <p class="">{messageObject.message.value}</p>
                    {/if}
                    <p class="text-sm ml-auto">
                      {timeFormat(messageObject.dateTime)}
                    </p>
                  </div>
                </div>
              {/if}
              {#if messageObject.direction == "out"}
                <div class="mb-2 ml-10 text-right flex flex-col">
                  <p class="m-auto mx-2 text-sm">You</p>
                  <div class="bg-gray-200 rounded-lg py-2 px-4 flex flex-col">
                    <p class="">{messageObject.message}</p>
                    <div class="flex w-full">
                      <p class="text-sm ml-auto mr-2">
                        {timeFormat(messageObject.dateTime)}
                      </p>
                      <span
                        class="w-3 my-auto bg-red"
                        class:stubber_webchat_message_tick_received={messageObject.received}
                        class:stubber_webchat_message_tick_pending={!messageObject.received}
                      >
                        <CheckDoubleRegular />
                      </span>
                    </div>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
          <div
            class="p-2 flex flex-col bg-gray-300 rounded-t-xl stubber_webchat_input_box"
          >
            <div class="h-10 w-full bg-white flex rounded-lg text-black">
              <input
                type="text"
                class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"
                bind:value={message}
                on:keydown={handleEnterPress}
                placeholder={"Type message..."}
                autocomplete="off"
              />
              <button
                class="w-7 transition duration-300 pr-2"
                on:click={sendMessage}
                disabled={message === ""}
              >
                <span class="fill-gray-400">
                  <PaperPlaneTopRegular />
                </span>
              </button>
            </div>
            {#if switch_whatsapp || switch_email || switch_sms}
              <div class="w-full flex">
                <button
                  class="w-25 transition duration-300 my-2 mx-auto stubber_webchat_text"
                  on:click={openSwitching}
                >
                  Switch Chat Channels
                </button>
              </div>
            {/if}
          </div>
        {/if}
        {#if switching_opened}
          <div
            class="p-2 flex flex-col bg-white h-full stubber_webchat_switch_box"
          >
            <div class="flex w-full pl-2">
              <button
                class="w-6 h-24 my-auto transition duration-300 rounded-md mx-1"
                on:click={() => {
                  switching_opened = false;
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
              {#if switch_whatsapp}
                <button
                  class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                  class:stubber_webchat_chat_button_border_fill_selected={platform_name ==
                    "whatsapp"}
                  on:click={() => {
                    platform_name = "whatsapp";
                    contact_point_type = "mobile";
                  }}
                >
                  <span class="w-10 mx-auto my-auto">
                    <Whatsapp />
                  </span>
                  <p class="mx-auto mb-1">Whatsapp</p>
                </button>
              {/if}
              {#if switch_sms}
                <button
                  class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                  class:stubber_webchat_chat_button_border_fill_selected={platform_name ==
                    "sms"}
                  on:click={() => {
                    platform_name = "sms";
                    contact_point_type = "mobile";
                  }}
                >
                  <span class="w-10 mx-auto my-auto">
                    <MessageSmsRegular />
                  </span>
                  <p class="mx-auto mb-1">SMS</p>
                </button>
              {/if}
              {#if switch_email}
                <button
                  class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                  class:stubber_webchat_chat_button_border_fill_selected={platform_name ==
                    "email"}
                  on:click={() => {
                    platform_name = "email";
                    contact_point_type = "email";
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
                <GeneralInput {contact_point_type} submit={sendClientConfig} />
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  @import "../app.css";
</style>
