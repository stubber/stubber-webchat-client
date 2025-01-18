<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "open",
  }}
/>

<script>
  console.log(`___Stubber Webchat v3.2.2 ${import.meta.env.MODE}`);

  import { onDestroy, onMount } from "svelte";

  import {
    switching_opened,
    openWebchat,
    fullscreen,
    voicenote_enable,
    files_enable,
    fullscreen_toggle,
    links_open_in_new_tab,
    default_country_code,
    powered_by_enabled,
    open_webchat_button_config,
    webchat_state
  } from "$/lib/stores/config_store.js";
  import { webchat_socket_init } from "$/lib/shared/new_service.js";

  import SwitchBox from "./browser/components/SwitchBox.svelte";
  import MessageBox from "./browser/components/MessageBox.svelte";
  import MessageInputBox from "./browser/components/MessageInputBox.svelte";
  import WebchatTopBox from "./browser/components/WebchatTopBox.svelte";
  import WebchatEnableButton from "./browser/components/WebchatEnableButton.svelte";

  export let profile_uuid;
  export let branch;
  export let pass_through_data;
  export let on_server_control_event;
  export let page_control_hook;

  webchat_socket_init(profile_uuid, branch, pass_through_data);

  onMount(async function () {
    
  });

  onDestroy(() => {
    if (ws) {
      ws.close();
    }

    // const host = this;
    // host.removeEventListener('stubber_webchat_page_control_event');
  });
</script>

<div part="host" class="stubber_webchat_outer_box">
  <WebchatEnableButton />
  {#if $webchat_state.webchat_enable}
    <div
      class:stubber_webchat_box_fullscreen={$webchat_state.fullscreen}
      class="stubber_webchat_theme stubber_webchat_box fixed right-0 bottom-0 flex w-full min-w-[250px] min-h-[200px]"
    >
      <div
        class:mx-4={!$webchat_state.fullscreen}
        class:stubber_webchat_message_box_fullscreen={$webchat_state.fullscreen}
        class="flex flex-col flex-grow justify-end transition duration-300 rounded-t-xl stubber_webchat_message_box"
      >
        <!-- {#if !$webchat_state.fullscreen} -->
        <WebchatTopBox />
        <!-- {/if} -->
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
    z-index: 2147483647;
    font-size: 16px !important;
    color-scheme: light;
    font-weight: 400;
  }

  .stubber_webchat_theme {
    --stubber-webchat-background-color: white;
    --stubber-webchat-neutral-color: #909090;
  }

  .stubber_webchat_message_box {
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: var(--stubber-webchat-background-color);
    border: 1px solid var(--stubber-webchat-border-color, var(--stubber-webchat-primary-color));
  }

  .stubber_webchat_message_box_fullscreen {
    border: 0px;
  }

  .stubber_webchat_box {
    height: 80vh;
    padding-top: 16px;
    max-width: 500px;
    max-height: 1000px;
    z-index: 2147483647;
  }

  .stubber_webchat_box_fullscreen {
    height: 100%;
    padding-top: 0px;
    max-width: none;
    max-height: none;
    z-index: 2147483647;
  }
</style>
