<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "open",
  }}
/>

<script>
  console.log(`___Stubber Webchat v2.12.2 ${import.meta.env.MODE}`);

  import { onDestroy, onMount } from "svelte";

  import {
    socket_initialize,
    socket_connect,
  } from "$/lib/shared/service_upload.js";
  import {
    switching_opened,
    webchat_enable,
    openWebchat,
    fullscreen,
    voicenote_enable,
    files_enable,
    fullscreen_toggle,
    links_open_in_new_tab,
    default_country_code,
  } from "$/lib/stores/config_store.js";

  import SwitchBox from "./browser/components/SwitchBox.svelte";
  import MessageBox from "./browser/components/MessageBox.svelte";
  import MessageInputBox from "./browser/components/MessageInputBox.svelte";
  import WebchatTopBox from "./browser/components/WebchatTopBox.svelte";
  import WebchatEnableButton from "./browser/components/WebchatEnableButton.svelte";

  export let orguuid;
  export let chat_name;
  export let chat_display_name;
  export let open_on_mount;
  export let pass_through_data;
  export let fullscreen_mode;
  export let enable_voice_notes;
  export let enable_file_uploads;
  export let profile_uuid;
  export let branch;

  if (!profile_uuid) {
    socket_initialize({
      orguuid,
      chat_name: chat_name,
      pass_through_data,
      profile_uuid: ``,
    });
  }

  onMount(async () => {
    let API_URL = import.meta.env.VITE_WEBCHAT_API_URL;
    let webchat_client_config;

    if (profile_uuid) {
      try {
        let CONFIG_PATH = import.meta.env.VITE_WEBCHAT_API_CONFIG_PATH;
        let config_request = await fetch(
          `${API_URL}${CONFIG_PATH}/${profile_uuid}`
        );
        if (branch != "draft") {
          branch = "live";
        }

        let config_request_json = await config_request.json();

        orguuid = config_request_json.orguuid;
        chat_name =
          config_request_json.branch[branch].webchat_routing_config
            .webchat_instance_name;

        webchat_client_config =
          config_request_json.branch[branch].webchat_client_config;

        chat_display_name = webchat_client_config.webchat_title;
        open_on_mount = webchat_client_config.display_settings.open_on_load;
        fullscreen_mode = webchat_client_config.display_settings.fullscreen;
        enable_voice_notes = webchat_client_config.voice_notes.enabled;
        enable_file_uploads = webchat_client_config.file_uploads.enabled;

        fullscreen.set(fullscreen_mode);
        fullscreen_toggle.set(
          webchat_client_config.display_settings.fullscreen_toggle
        );
        voicenote_enable.set(enable_voice_notes);
        files_enable.set(enable_file_uploads);
        links_open_in_new_tab.set(webchat_client_config.links.open_in_new_tab);

        let webchat_css_config = webchat_client_config.display_settings.css;

        if (webchat_css_config) {
          let root_css = document.querySelector(":root");
          root_css.style.setProperty(
            "--primary-color",
            webchat_css_config["--primary-color"]
          );
          root_css.style.setProperty(
            "--border-color",
            webchat_css_config["--border-color"]
          );
          root_css.style.setProperty(
            "--text-color",
            webchat_css_config["--text-color"]
          );
        }

        socket_initialize({
          orguuid,
          chat_name: chat_name,
          pass_through_data,
          profile_uuid,
          branch,
        });
      } catch (err) {
        console.err("failed to load profile");
      }
    } else {
      fullscreen_mode = fullscreen_mode === "true";
      enable_voice_notes = enable_voice_notes === "true";
      enable_file_uploads = enable_file_uploads === "true";
      open_on_mount = open_on_mount === "true";
    }

    try {
      let meta_request = await fetch(`${API_URL}/v2/meta`);
      let meta_request_json = await meta_request.json();
      default_country_code.set(meta_request_json.geo_ip.country);
    } catch (err) {
      console.error(err, "failed to load meta data");
    }

    fullscreen.set(fullscreen_mode);
    voicenote_enable.set(enable_voice_notes);
    files_enable.set(enable_file_uploads);

    if (open_on_mount || $fullscreen) {
      if (webchat_client_config) {
        setTimeout(() => {
          openWebchat();
          socket_connect();
        }, webchat_client_config.display_settings.open_on_load_timeout_milliseconds);
      } else {
        openWebchat();
        socket_connect();
      }
    }
  });

  onDestroy(() => {
    if (ws) {
      ws.close();
    }
  });
</script>

<div part="host" class="stubber_webchat_outer_box">
  <WebchatEnableButton />
  {#if $webchat_enable}
    <div
      class:stubber_webchat_box_fullscreen={$fullscreen}
      class="stubber_webchat_theme stubber_webchat_box fixed right-0 bottom-0 flex w-full min-w-[250px] min-h-[200px]"
    >
      <div
        class:mx-4={!$fullscreen}
        class:stubber_webchat_message_box_fullscreen={$fullscreen}
        class="flex flex-col flex-grow justify-end transition duration-300 rounded-t-xl stubber_webchat_message_box"
      >
        <!-- {#if !$fullscreen} -->
        <WebchatTopBox {chat_display_name} />
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
