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

  import io from "socket.io-client";

  export let orguuid;
  export let chatname;
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
  let WEBCHAT_API_SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

  // onMount(() => {
  //   console.log("__Mounted");
  //   if (connect_on_load === "true") connectSocket();
  // });

  let connectSocket = () => {
    socket = io(WEBCHAT_API_URL, {
      path: WEBCHAT_API_SOCKET_PATH
    });

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

    if (connect_on_load === "true" && !webchatOpened)
      connectSocket()

    webchatOpened = true;
  }

  onDestroy(() => {
    if (ws) {
      ws.close();
    }
  });
</script>

<svelte:head>
  <style>
    @import "../app.css";
  </style>
</svelte:head>

{#if !webchatEnable}
  <button
    class="stubber_webchat_enable_button"
    on:click={openWebchat}
  >
    Chat
  </button>
{/if}
{#if webchatEnable}
  <div class="stubber_webchat_container">
    <div class="stubber_webchat_top_container">
      <div class="stubber_webchat_top_container_row">
        <button
          class="stubber_webchat_minimize_button"
          on:click={() => {webchatEnable = false}}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="24" width="20" height="2" fill="white" />
          </svg>
        </button>
      </div>
    </div>

    <div class="stubber_webchat_middle_container" class:stubber_webchat_middle_container_switching={switching}>
      <div
        class="stubber_webchat_message_box"
        id="stubber_webchat_message_box"
      >
        {#each messages as messageObject}
          {#if messageObject.direction == "in"}
            <div class="stubber_webchat_message_in">
              <div class="stubber_webchat_message_text_box">
                {#if messageObject.message.type == "markdown"}
                  {@html DOMPurify.sanitize(
                    marked(messageObject.message.value.trim())
                  )}
                {/if}
                {#if messageObject.message.type == "text"}{messageObject.message
                    .value}{/if}
              </div>
              <div class="stubber_webchat_message_info_box">
                <small class="stubber_webchat_message_info_time_in"
                  >{timeFormat(messageObject.dateTime)}</small
                >
              </div>
            </div>
          {/if}
          {#if messageObject.direction == "out"}
            <div class="stubber_webchat_message_out">
              <div class="stubber_webchat_message_text_box">
                {messageObject.message}
              </div>
              <div class="stubber_webchat_message_info_box">
                <small class="stubber_webchat_message_info_time_out"
                  >{timeFormat(messageObject.dateTime)}</small
                >
                {#if messageObject.received == false}
                  <svg
                    class="stubber_webchat_message_info_sent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                {/if}
                {#if messageObject.received == true}
                  <svg
                    class="stubber_webchat_message_info_sent_delivered"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                {/if}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
    <!-- END OF MID SESSION -->

    <div class="stubber_webchat_bottom_container">
      <div class="stubber_webchat_message_input_box">
        <input
          type="text"
          class="stubber_webchat_message_input"
          bind:value={message}
          on:keydown={handleEnterPress}
          placeholder={input_placeholder}
          autocomplete="off"
        />
        <button
          class="stubber_webchat_message_send_button"
          on:click={sendMessage}
          disabled={message === ""}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="stubber_webchat_message_send_button_svg"
            >9 45
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {#if switching}
        <!-- stubber_webchat_switch_box -->
        <div class="stubber_webchat_switch_box">
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
        </div>
      {/if}
    </div>
  </div>
{/if}
