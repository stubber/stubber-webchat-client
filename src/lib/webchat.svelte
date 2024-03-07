<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "none",
  }}
/>

<script>
  import { onDestroy, onMount } from "svelte";
  import DOMPurify from "dompurify";
  import { marked } from "marked";

  import AtRegular from "./icons/at-regular.svelte";
  import CheckDoubleRegular from "./icons/check-double-regular.svelte";
  import CircleXMarkRegular from "./icons/circle-xmark-regular.svelte";
  import MessageSMSRegular from "./icons/message-sms-regular.svelte";
  import PaperPlaneTopRegular from "./icons/paper-plane-top-regular.svelte";
  import UserSolid from "./icons/user-solid.svelte";
  import Whastsapp from "./icons/whatsapp.svelte";

  import io from "socket.io-client";

  export let orguuid;
  export let chatname;
  export let chat_display_name;
  export let connect_on_load;
  export let passthrough_data;

  let webchat_enable = true;
  let webchat_opened = false;
  let switching_enable = false;

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;

  console.log("stubber webchat v1.2");

  let message = ``;
  let messages = [];
  let previous_sender = "you";

  let socket;
  let allow_switching = true;
  let switching_details = false;
  let mode_switch = "";
  let input_placeholder = "Type message...";

  let WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;

  onMount(() => {
    console.log("__Mounted");
    if (connect_on_load && webchat_enable) {
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
      let messageObject = {
        direction: "in",
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

    let messageObject = {
      direction: "out",
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

  let timeFormat = (dateTime) => {
    const hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    return hours + ":" + minutes;
  };

  let startSwitch = (mode) => {
    if (mode_switch == mode) {
      mode = "";
    }

    mode_switch = mode;

    if (mode_switch == "") {
      input_placeholder = "Type message...";
      message = "";
      switching_details = false;
    }
    if (mode_switch == "Whatsapp") {
      input_placeholder = "Enter your number";
      message = "";
      switching_details = true;
    }
    if (mode_switch == "SMS") {
      input_placeholder = "Enter your number";
      message = "";
      switching_details = true;
    }
    if (mode_switch == "Email") {
      input_placeholder = "Enter your email";
      message = "";
      switching_details = true;
    }
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

    if (connect_on_load === "true" && !webchat_opened) connectSocket();

    webchat_opened = true;
  };

  let openSwitching = () => {
    webchat_enable = true;
    switching_enable = true;

    if (connect_on_load === "true" && !webchat_opened) connectSocket();
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

<div class="fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end">
  {#if !webchat_enable}
    <button
      class="py-2 px-2 rounded-md transition duration-300 flex bg-gray-400 hover:bg-gray-500 text-white"
      on:click={openWebchat}
    >
      <p class="m-auto mx-2">Chat</p>
      <span class="h-6 w-5 mr-2 my-auto fill-white">
        <UserSolid viewBox="0 0 24 24" />
      </span>
    </button>
  {/if}
</div>

{#if webchat_enable}
  <div
    class="fixed bottom-0 right-0 w-96 h-3/4 flex-col justify-end bg-white mr-4 transition duration-300 rounded-t-xl"
  >
    <div
      class="pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center bg-gray-400"
    >
      <p class="text-lg font-semibold text-white">
        {!chat_display_name ? "" : chat_display_name}
      </p>
      <button
        class="rounded-md w-5 mx-1"
        on:click={() => {
          webchat_enable = false;
        }}
      >
        <span class="w-5 fill-white">
          <CircleXMarkRegular viewBox="0 0 24 24" />
        </span>
      </button>
    </div>
    <div class="p-4 overflow-y-auto stubber_webchat_message_box">
      {#each messages as messageObject}
        {#if messageObject.direction == "in"}
          <div class="mb-2 mr-2">
            <p class="m-auto mx-2 text-sm">Agent</p>
            {#if messageObject.message.type == "markdown"}
              <div class="bg-gray-200 rounded-lg py-2 px-4 inline-block">
                {@html DOMPurify.sanitize(
                  marked(messageObject.message.value.trim())
                )}
                <p class="ml-auto mx-2 text-sm">{timeFormat(messageObject.dateTime)}</p>
              </div>
            {/if}
            {#if messageObject.message.type == "text"}
              <div class="bg-gray-200 rounded-lg py-2 px-4 inline-block">
                <p class="">{messageObject.message.value}</p>
                <p class="ml-auto mx-2 text-sm">{timeFormat(messageObject.dateTime)}</p>
              </div>
            {/if}
          </div>
        {/if}
        {#if messageObject.direction == "out"}
          <div class="mb-2 ml-2 text-right">
            <p class="ml-auto mx-2">You</p>
            <div
              class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block"
            >
            <p class="">{messageObject.message.value}</p>
            <p class="ml-auto mx-2 text-sm">{timeFormat(messageObject.dateTime)}</p>
          </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/if}
<!-- <div class="fixed bottom-0 right-0 mb-4 mr-4 w-96 flex justify-end">
  {#if allow_switching && webchat_enable}

        <button
          class="stubber_webchat_switch_button py-2 px-4 rounded-md transition duration-300 flex items-center"
          on:click={openSwitching}
          class:stubber_webchat_switch_button_selected={webchat_enable && switching_enable}
        >
          Switch platforms
        </button>
    {/if}
  <button
    class="stubber_webchat_enable_button ml-2 py-2 px-4 rounded-md transition duration-300 items-center"
    on:click={openWebchat}
    class:stubber_webchat_enable_button_selected={webchat_enable && !switching_details && !switching_enable}
  >
    Chat
  </button>
</div>
{#if webchat_enable}
  <div
    class="stubber_webchat_container fixed bottom-16 right-4 w-96 rounded-lg"
  >
    <div class="bg-white shadow-md rounded-lg max-w-lg w-full">
      <div
        class="stubber_webchat_top_container p-4 border-b text-white rounded-t-lg flex justify-between items-center"
      >
        <p class="text-lg font-semibold">
          {!chat_display_name ? "" : chat_display_name}
        </p>
        <button
          id="close-chat"
          class="stubber_webchat_minimize_button focus:outline-none"
          on:click={() => {
            webchat_enable = false;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stubber_webchat_minimize_button_svg w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div class="p-4 h-96 overflow-y-auto stubber_webchat_message_box">
        {#if !switching_enable}
          {#each messages as messageObject}
            {#if messageObject.direction == "in"}
              <div class="mb-2">
                {#if messageObject.message.type == "markdown"}
                  <div class="bg-gray-200 rounded-lg py-2 px-4 inline-block">
                    {@html DOMPurify.sanitize(
                      marked(messageObject.message.value.trim())
                    )}
                  </div>
                {/if}
                {#if messageObject.message.type == "text"}
                  <p class="bg-gray-200 rounded-lg py-2 px-4 inline-block">
                    {messageObject.message.value}
                  </p>
                {/if}
              </div>
            {/if}
            {#if messageObject.direction == "out"}
              <div class="mb-2 text-right">
                <p
                  class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block"
                >
                  {messageObject.message}
                </p>
              </div>
            {/if}
          {/each}
        {/if}
        {#if switching_enable}
          <FormTelInput name="contact" label="Cellphone Number" />
          <FormTextInput
          name="contact"
            label="Email Address"
            regex={emailRegex}
            validationMessage="Invalid Email"
          />
        {/if}
      </div>
      <div class="p-4 border-t flex h-20">
        {#if !switching_enable}
        <input
          type="text"
          class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          bind:value={message}
          on:keydown={handleEnterPress}
          placeholder={input_placeholder}
          autocomplete="off"
        />
        <button
          class="stubber_webchat_message_send_button px-4 py-2 rounded-r-md transition duration-300"
          on:click={sendMessage}
          disabled={message === ""}
        >
          Send
        </button>
        {/if}
      </div>
    </div>
  </div>
{/if} -->
