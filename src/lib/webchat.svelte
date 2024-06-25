<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "open",
  }}
/>

<script>
  console.log(`___Stubber Webchat v2.3 ${import.meta.env.MODE}`);

  import { onDestroy, onMount } from "svelte";

  import {
    socket_initialize,
    socket_connect
  } from "$/lib/shared/service_upload.js";
  import {
    switching_opened,
    webchat_enable,
    openWebchat,
    fullscreen
  } from "$/lib/stores/configStore.js";

  import SwitchBox from "./browser/components/SwitchBox.svelte";
  import MessageBox from "./browser/components/MessageBox.svelte";
  import MessageInputBox from "./browser/components/MessageInputBox.svelte";
  import WebchatTopBox from "./browser/components/WebchatTopBox.svelte";
  import WebchatEnableButton from "./browser/components/WebchatEnableButton.svelte";

  export let orguuid;
  export let chat_name;
  export let chat_display_name;
  export let connect_on_open;
  export let open_on_mount;
  export let pass_through_data;
  export let fullscreen_mode;

  socket_initialize({
    orguuid,
    chat_name: chat_name,
    pass_through_data,
  });

  onMount(() => {
    fullscreen.set(fullscreen_mode === "true")
    if (open_on_mount === "true" || fullscreen_mode === "true") { 
      openWebchat();
      socket_connect();
    }
  });

  onDestroy(() => {
    if (ws) {
      ws.close();
    }
  });
</script>

<div part="host" class="stubber_webchat_outer_box">
  <WebchatEnableButton connect_on_open={connect_on_open} />
  {#if $webchat_enable}
    <div
      class:stubber_webchat_box_fullscreen={$fullscreen}
      class="z-50 stubber_webchat_theme stubber_webchat_box fixed right-0 bottom-0 flex w-full min-w-[250px] min-h-[200px]"
    >
      <div
        class:mx-4={!$fullscreen}
        class:stubber_webchat_message_box_fullscreen={fullscreen}
        class="flex flex-col flex-grow justify-end transition duration-300 rounded-t-xl stubber_webchat_message_box"
      >
        {#if !$fullscreen}
          <WebchatTopBox {chat_display_name} />
        {/if}
        {#if !$switching_opened}
          <MessageBox />
          <MessageInputBox />
        {/if}
        {#if $switching_opened}
          <SwitchBox />
        {/if}
      </div>
    </div>
  {/if}
</div>
<!-- h-5/6 -->
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_outer_box {
    z-index: 500;
    font-size: 16px !important;
  }

  .stubber_webchat_theme {
    --background-color: white;
    --neutral-color: #909090;
  }

  .stubber_webchat_message_box {
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: var(--background-color);
    border: 1px solid var(--border-color, var(--primary-color));
  }

  .stubber_webchat_message_box_fullscreen {
    border:0px
  }

  .stubber_webchat_box {
    height: 80vh;
    padding-top: 16px;
    max-width: 500px;
    max-height: 1000px;
  }

  .stubber_webchat_box_fullscreen {
    height: 100%;
    padding-top: 0px;
    max-width: none;
    max-height: none;
  }

</style>
