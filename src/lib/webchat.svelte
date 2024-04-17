<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "open",
  }}
/>

<script>
  console.log("___Stubber Webchat v2.0.41");

  import { onDestroy, onMount } from "svelte";

  import {
    setSocketConfig,
    connectSocket,
  } from "$/lib/shared/socketService.js";
  import {
    switching_opened,
    webchat_enable,
    openWebchat
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

  setSocketConfig({
    orguuid,
    chat_name: chat_name,
    pass_through_data,
  });

  onMount(() => {
    if (open_on_mount === "true") {
      openWebchat();
      connectSocket();
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
      class="stubber_webchat_box z-50 stubber_webchat_theme fixed right-0 bottom-0 flex w-full min-w-[250px] max-w-[500px] min-h-[200px] max-h-[1000px] pt-4"
    >
      <div
        class="flex flex-col flex-grow justify-end mx-4 transition duration-300 rounded-t-xl stubber_webchat_message_box"
      >
        <WebchatTopBox {chat_display_name} />
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

  .stubber_webchat_box {
    height: 85vh;
  }
</style>
