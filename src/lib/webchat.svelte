<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "none",
  }}
/>

<script>
  import { onDestroy, onMount } from "svelte";
  import FormTelInput from "./browser/components/forminputs/FormTelInput.svelte";
  import DOMPurify from "dompurify";
  import { marked } from "marked";

  import io from "socket.io-client";

  export let orguuid;
  export let chatname;
  export let chat_display_name;
  export let connect_on_load;
  export let passthrough_data;

  let webchatEnable = false;
  let webchatOpened = false;

  console.log("stubber webchat v1.1.2");

  let message = ``;
  let messages = [];

  let socket;
  let switching = false;
  let switching_details = false;
  let mode_switch = "";
  let input_placeholder = "Type message...";

  let WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;

  onMount(() => {
    console.log("__Mounted");
    // if (connect_on_load === "true") connectSocket();
  });

  let connectSocket = () => {
    socket = io(WEBCHAT_API_URL);
    console.log(WEBCHAT_API_URL);

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
        if (data[key].type == "switching") {
          switching = data[key].value;
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
    webchatEnable = true;

    if (connect_on_load === "true" && !webchatOpened) connectSocket();

    webchatOpened = true;
  };

  onDestroy(() => {
    if (ws) {
      ws.close();
    }
  });

  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if ('target' in node) { node.setAttribute('target', '_blank'); }
    if (!node.hasAttribute('target') && (node.hasAttribute('xlink:href') || node.hasAttribute('href'))) {
       node.setAttribute('xlink:show', 'new');
    }
  });
</script>

<svelte:head>
  <style>
    @import "../app.css";
  </style>
</svelte:head>

<!-- {#if !webchatEnable} -->
  <div class="fixed bottom-0 right-0 mb-4 mr-4 w-96 flex justify-end">
    {#if webchatEnable && switching}
      <button
        class="stubber_webchat_switch_button py-2 px-4 rounded-md transition duration-300 flex items-center"
        on:click={openWebchat}
      >
        Switch platforms
      </button>
    {/if} 
    <button
      class="stubber_webchat_enable_button ml-2 py-2 px-4 rounded-md transition duration-300 flex items-center"
      on:click={openWebchat}
    >
      Chat
    </button>
  </div>
<!-- {/if} -->
{#if webchatEnable}
  <div
    class="stubber_webchat_container fixed bottom-16 right-4 w-96 rounded-lg"
  >
    <div class="bg-white shadow-md rounded-lg max-w-lg w-full">
      <div
        class="stubber_webchat_top_container_row p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center"
      >
        <p class="text-lg font-semibold">{!chat_display_name ? "" : chat_display_name}</p>
        <button
          id="close-chat"
          class="stubber_webchat_minimize_button text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          on:click={() => {
            webchatEnable = false;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
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

      <div
        class="p-4 h-80 overflow-y-auto stubber_webchat_message_box"
      >
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
      </div>
      <!-- END OF MID SESSION -->

      <div class="p-4 border-t flex">
        <input
          type="text"
          class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          bind:value={message}
          on:keydown={handleEnterPress}
          placeholder={input_placeholder}
          autocomplete="off"
        />
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          on:click={sendMessage}
          disabled={message === ""}
        >
          Send
        </button>
      </div>
      {#if switching}
        <!-- stubber_webchat_switch_box -->
        <!-- <div class="stubber_webchat_switch_box">
          <div class="stubber_webchat_switch_label_box">
            <p class="stubber_webchat_switch_text">Continue chat on :</p>
          </div>
          <div class="stubber_webchat_switch_button_box">
            <button
              class="stubber_webchat_switch_button"
              class:stubber_webchat_switch_button_selected={mode_switch ==
                "Whatsapp"}
              on:click={() => startSwitch("Whatsapp")}
            >
              Whatsapp
            </button>
            <button
              class="stubber_webchat_switch_button"
              class:stubber_webchat_switch_button_selected={mode_switch ==
                "SMS"}
              on:click={() => startSwitch("SMS")}
            >
              SMS
            </button>
            <button
              class="stubber_webchat_switch_button"
              class:stubber_webchat_switch_button_selected={mode_switch ==
                "Email"}
              on:click={() => startSwitch("Email")}
            >
              Email
            </button>
          </div>
          <FormTelInput name="contact" label="Cellphone Number" />
        </div> -->
      {/if}
    </div>
  </div>
{/if}
