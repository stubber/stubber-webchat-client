<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "open",
  }}
/>

<script>
  console.log("stubber webchat v1.2.11");

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
  export let chatName;
  export let chatDisplayName;
  export let connectOnOpen;
  export let openOnMount;
  export let passthroughData;

  let socket;
  let WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;
  let WEBCHAT_API_SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

  let message = ``;
  let messages = [];

  let webchatEnable = false;
  let webchatOpened = false;

  let switchingOpened = false;
  let switchWhatsapp = false;
  let switchSMS = false;
  let switchEmail = false;

  let switchPlatform = "whatsapp";
  let contactPointType = "mobile";

  onMount(() => {
    console.log("__Mounted");
    if (openOnMount === "true") {
      openWebchat();
      return;
    }
    if (connectOnOpen && webchatEnable) {
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
            chatname: chatName,
            initialize: true,
            passthroughData,
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
          switchWhatsapp = data[key]?.value?.whatsapp;
          switchSMS = data[key]?.value?.sms;
          switchEmail = data[key]?.value?.email;

          if (
            switchingOpened &&
            !switchWhatsapp &&
            !switchSMS &&
            !switchEmail
          ) {
            switchingOpened = false;
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
          chatName,
          passthroughData,
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
          chatName,
          passthroughData,
        },
        webchat_client_configuration: {
          platform_switch: {
            platform_name: switchPlatform,
            value: contactPoint,
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
      let host = document.querySelector("stubber-webchat");
      let message_box = host.shadowRoot.getElementById(
        "stubber_webchat_message_box"
      );
      message_box.scrollTop = message_box.scrollHeight;
    }, 100);
  };

  let openWebchat = () => {
    webchatEnable = true;

    if (connectOnOpen === "true" && !webchatOpened) connectSocket();

    webchatOpened = true;
  };

  let openSwitching = () => {
    switchingOpened = true;
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
    {#if !webchatEnable}
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

  {#if webchatEnable}
    <div
      class="z-50 stubber_webchat_theme fixed right-0 bottom-0 flex w-full min-w-[250px] max-w-[500px] min-h-[200px] max-h-[1000px] h-5/6 pt-4"
    >
      <div
        class="flex flex-col flex-grow justify-end mx-4 transition duration-300 rounded-t-xl stubber_webchat_message_box"
      >
        <div
          class="pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"
        >
          <p class="text-lg font-semibold">
            {!chatDisplayName ? "" : chatDisplayName}
          </p>
          <button
            class="rounded-md w-5 mx-1"
            on:click={() => {
              webchatEnable = false;
            }}
          >
            <span class="w-5 fill-white rotate-45">
              <CircleXMarkRegular />
            </span>
          </button>
        </div>
        {#if !switchingOpened}
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
            {#if switchWhatsapp || switchEmail || switchSMS}
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
        {#if switchingOpened}
          <div
            class="p-2 flex flex-col bg-white h-full stubber_webchat_switch_box"
          >
            <div class="flex w-full pl-2">
              <button
                class="w-6 h-25 my-auto transition duration-300 rounded-md mx-1"
                on:click={() => {
                  switchingOpened = false;
                }}
              >
                <span class="stubber_webchat_breadcrumb_fill">
                  <ArrowLeftSolid />
                </span>
              </button>
              <p class="h-25 mx-2 my-auto stubber_webchat_breadcrumb_fill">
                Back to chat
              </p>
            </div>
            <div class="flex flex-row mt-5">
              {#if switchWhatsapp}
                <button
                  class="w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                  class:stubber_webchat_chat_button_border_fill_selected={switchPlatform ==
                    "whatsapp"}
                  on:click={() => {
                    switchPlatform = "whatsapp";
                    contactPointType = "mobile";
                  }}
                >
                  <span class="w-10 mx-auto my-auto">
                    <Whatsapp />
                  </span>
                  <p class="mx-auto mb-1">Whatsapp</p>
                </button>
              {/if}
              {#if switchSMS}
                <button
                  class="w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                  class:stubber_webchat_chat_button_border_fill_selected={switchPlatform ==
                    "sms"}
                  on:click={() => {
                    switchPlatform = "sms";
                    contactPointType = "mobile";
                  }}
                >
                  <span class="w-10 mx-auto my-auto">
                    <MessageSmsRegular />
                  </span>
                  <p class="mx-auto mb-1">SMS</p>
                </button>
              {/if}
              {#if switchEmail}
                <button
                  class="w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                  class:stubber_webchat_chat_button_border_fill_selected={switchPlatform ==
                    "email"}
                  on:click={() => {
                    switchPlatform = "email";
                    contactPointType = "email";
                  }}
                >
                  <span class=" w-10 mx-auto my-auto">
                    <AtRegular />
                  </span>
                  <p class=" mx-auto mb-1">Email</p>
                </button>
              {/if}
            </div>
            <div class="flex flex-col">
              <div class="flex flex-col mt-5 mx-2">
                <GeneralInput {contactPointType} submit={sendClientConfig} />
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
