<script>
  import UserSolid from "$/lib/icons/user-solid.svelte";
  import {
    webchat_enable,
    openWebchat,
    open_webchat_button_config,
  } from "$/lib/stores/config_store.js";
  import { socket_connect } from "$/lib/shared/service_upload.js";

  let button_mode = "none";
  open_webchat_button_config.subscribe((data) => {
    if (Object.keys(data).length == 0) {
      return;
    }

    if (data?.button_types_config.svg_url.enabled) {
      button_mode = "svg";
      return;
    }

    button_mode = "default";
  });
</script>

<div
  class="stubber_webchat_theme fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end"
>
  {#if !$webchat_enable && button_mode == "default"}
    <button
      class="py-2 px-2 rounded-md transition duration-300 flex stubber_webchat_chat_button"
      on:click={() => {
        openWebchat();
        socket_connect();
      }}
    >
      <p class="m-auto mx-2">Chat</p>
      <span class="h-6 w-5 mr-2 my-auto fill-white">
        <UserSolid />
      </span>
    </button>
  {/if}
  {#if !$webchat_enable && button_mode == "svg"}
    <button
      class="py-6 px-6 rounded-md transition duration-300 flex"
      on:click={() => {
        openWebchat();
        socket_connect();
      }}
    >
      {#if button_mode == "svg"}
      <img
          src={$open_webchat_button_config.button_types_config.svg_url.url}
          alt="SVG Icon"
          height="50"
          width="50"
        />
      {/if}
    </button>
  {/if}
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_chat_button {
    background-color: var(--stubber-webchat-primary-color);
    background: var(--stubber-webchat-primary-color);
    color: var(--stubber-webchat-background-color);
  }

  .stubber_webchat_chat_button:hover {
    opacity: 0.5;
  }

  .stubber_webchat_chat_button:disabled {
    background-color: var(--stubber-webchat-neutral-color);
    color: var(--stubber-webchat-background-color);
  }

  .stubber_webchat_theme {
    --stubber-webchat-background-color: white;
    --stubber-webchat-neutral-color: #909090;
    z-index: 2147483647;
  }
</style>
