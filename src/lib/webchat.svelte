<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "none",
  }}
/>

<script>
  console.log("stubber webchat v1.2");

  import { onDestroy, onMount } from "svelte";
  import GeneralInput from "./browser/components/forms/generalInput.svelte";

  import DOMPurify from "dompurify";
  import { marked } from "marked";
  import io from "socket.io-client";

  import AtRegular from "./icons/at-regular.svelte";
  import CheckDoubleRegular from "./icons/check-double-regular.svelte";
  import CircleXMarkRegular from "./icons/circle-xmark-regular.svelte";
  import PaperPlaneTopRegular from "./icons/paper-plane-top-regular.svelte";
  import UserSolid from "./icons/user-solid.svelte";
  import ArrowLeftSolid from "./icons/arrow-left-solid.svelte";
  import MessageSmsRegular from "./icons/message-sms-regular.svelte";
  import Whatsapp from "./icons/whatsapp.svelte";


  export let orguuid;
  export let chatname;
  export let chat_display_name;
  export let connect_on_open;
  export let open_on_load;
  export let passthrough_data;

  let webchat_enable = true;
  let webchat_opened = false;
  let switching_enable = false;

  let message = ``;
  let messages = [];

  let socket;
  let allow_switching = true;
  let switching_details = true;
  let mode_switch = "";
  let contactPointType = "";
  let input_placeholder = "Type message...";

  let WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;

  onMount(() => {
    console.log("__Mounted");
    if (open_on_load === "true") {
      openWebchat();
      return
    }
    if (connect_on_open && webchat_enable) {
      connectSocket();
    }
  });

  let connectSocket = () => {
    socket = io(WEBCHAT_API_URL);

    socket.on("connect", async () => {
      console.log("___Connected to server");

      if (messages.length == 0) {
        await socket.emit("initialize", {
          webchat_configuration: {
            orguuid,
            chatname,
            initialize: true,
            passthrough_data,
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

      settings.forEach((key) => {
        if (data[key].type == "allow_switching") {
          allow_switching = data[key].value;
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
      await socket.emit("message", {
        webchat_configuration: {
          orguuid,
          chatname,
          passthrough_data,
        },
        webchat_message: {
          type: "text",
          value: messageObject.message,
          messageuuid: messageObject.messageuuid,
        },
      });
      if (switching_details) {
        await socket.emit("client_configuration", {
          webchat_configuration: {
            orguuid,
            chatname,
            passthrough_data,
          },
          webchat_client_configuration: {
            platform_switch: {
              platform_name: mode_switch,
              value: messageObject.message,
            },
          },
        });
      }
      messageObject.received = true;
      messages = messages;
    }
  };

  let sendClientConfig = async (contactPoint) => {
    if (!socket) {
      connectSocket();
    }

    console.log("sent config")

    if (socket.connected) {
      await socket.emit("client_configuration", {
        webchat_configuration: {
          orguuid,
          chatname,
          passthrough_data,
        },
        webchat_client_configuration: {
          platform_switch: {
            platform_name: mode_switch,
            value: contactPoint
            },
        },
      });
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
      let message_box = document.getElementById("stubber_webchat_message_box");
      message_box.scrollTop = message_box.scrollHeight;
    }, 100);
  };

  let openWebchat = () => {
    webchat_enable = true;
    switching_enable = false;

    if (connect_on_open === "true" && !webchat_opened) connectSocket();

    webchat_opened = true;
  };

  let openSwitching = () => {
    switching_details = true;
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

<svelte:head>
  <style>
    @import "../app.css";
  </style>
</svelte:head>

<div class="stubber_webchat_theme fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end">
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
    class="stubber_webchat_theme fixed right-0 bottom-0 flex w-full min-w-[250px] max-w-[500px] min-h-[200px] max-h-[1000px] h-full pt-4"
  >
  <div 
    class="flex flex-col flex-grow justify-end mx-4 transition duration-300 rounded-t-xl stubber_webchat_message_box"
  >
    <div
      class="pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"
    >
      <p class="text-lg font-semibold">
        {!chat_display_name ? "" : chat_display_name}
      </p>
      <button
        class="rounded-md w-5 mx-1"
        on:click={() => {
          webchat_enable = false;
        }}
      >
        <span class="w-5 fill-white rotate-45">
          <CircleXMarkRegular />
        </span>
      </button>
    </div>
    {#if !switching_details}
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
                  <span class="stubber_webchat_message_tick w-3 my-auto bg-red">
                    <CheckDoubleRegular />
                  </span>
                </div>
              </div>
            </div>
          {/if}
        {/each}
      </div>
      <div class="p-2 flex flex-col bg-gray-300 rounded-t-xl stubber_webchat_input_box">
        <div class="h-10 w-full bg-white flex rounded-lg text-black">
          <input
            type="text"
            class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"
            bind:value={message}
            on:keydown={handleEnterPress}
            placeholder={input_placeholder}
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
        {#if allow_switching}
          <div class="w-full flex">
            <button
              class="w-25 transition duration-300 my-2 mx-auto"
              on:click={openSwitching}
            >
              Switch Chat Channels
            </button>
          </div>
        {/if}
      </div>
    {/if}
    {#if switching_details}
      <div class="p-2 flex flex-col bg-white h-full stubber_webchat_switch_box">
        <div class="flex w-full pl-2">
          <button
            class="w-6 h-25 my-auto transition duration-300 rounded-md mx-1"
            on:click={() => {
              switching_details = false;
            }}
          >
            <span class="stubber_webchat_breadcrumb_fill">
              <ArrowLeftSolid />
            </span>
          </button>
          <p class="h-25 mx-2 my-auto stubber_webchat_breadcrumb_fill">Back to chat</p>
        </div>
        <div class="flex flex-row mt-5">
          <button
            class="w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
            class:stubber_webchat_chat_button_border_fill_selected={mode_switch == "whatsapp"}
            on:click={() => {
              mode_switch = "whatsapp";
              contactPointType = "mobile";
            }}
          >
            <span class="w-10 mx-auto my-auto">
              <Whatsapp />
            </span>
            <p class="mx-auto mb-1">Whatsapp</p>
          </button>
          <button
            class="w-15 mx-auto rounded-xl  flex flex-col stubber_webchat_chat_button_border_fill"
            class:stubber_webchat_chat_button_border_fill_selected={mode_switch == "sms"}
            on:click={() => {
              mode_switch = "sms";
              contactPointType = "mobile";
            }}
          >
            <span class="w-10 mx-auto my-auto">
              <MessageSmsRegular />
            </span>
            <p class="mx-auto mb-1">SMS</p>
          </button>
          <button
            class="w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
            class:stubber_webchat_chat_button_border_fill_selected={mode_switch == "email"}
            on:click={() => {
              mode_switch = "email";
              contactPointType = "email";
            }}
          >
            <span class=" w-10 mx-auto my-auto">
              <AtRegular />
            </span>
            <p class=" mx-auto mb-1">Email</p>
          </button>
        </div>
          <div class="flex flex-col">
            <div class="flex flex-col mt-5 mx-2">
              <GeneralInput contactPointType={contactPointType} submit={sendClientConfig}/>
            </div>
          </div>
      </div>
    {/if}
  </div>
  </div>
{/if}
