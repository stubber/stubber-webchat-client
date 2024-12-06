<script>
  import {
    switch_whatsapp,
    switch_email,
    switch_sms,
    openSwitching,
    webchat_incoming_animation,
    voicenote_enable,
    files_enable,
    powered_by_enabled,
  } from "$/lib/stores/config_store.js";

  import PaperPlaneTopRegular from "$/lib/icons/paper-plane-top-regular.svelte";
  import MicrophoneRegular from "$/lib/icons/microphone-regular.svelte";
  import PaperclipVerticalRegular from "$/lib/icons/paperclip-vertical-regular.svelte";
  import CircleXSolid from "$/lib/icons/circle-x-solid.svelte";
  import Stubber from "$/lib/icons/stubber.svelte";
  import CircleXmarkSharpDuotoneSolid from "$/lib/icons/circle-xmark-sharp-duotone-solid.svelte";
  import PlayRegular from "$/lib/icons/play-regular.svelte";
  import PauseRegular from "$/lib/icons/pause-regular.svelte";
  import FileRegular from "$/lib/icons/file-regular.svelte";
  import FileAudioRegular from "$/lib/icons/file-audio-regular.svelte";

  import WhatsappCustom from "$/lib/icons/whatsapp-custom.svelte";
  import SmsCustom from "../../icons/sms-custom.svelte";
  import EmailCustom from "../../icons/email-custom.svelte";
  import SwitchTo from "$/lib/icons/switch-to.svelte";

  import {
    payload_buffer_message,
    payload_buffer_voice,
    payload_buffer_attachments,
    payload_buffer_append,
  } from "$/lib/shared/service_upload.js";

  let recording = false;
  let recording_paused = false;
  let recording_time_minutes = false;
  let recording_time_seconds = false;
  let recording_time_display = "00:00";

  let voice_media_stream = null;
  let voice_media_recorder = null;

  let attachments_loaded = {};

  let handleEnterPress = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      ($payload_buffer_message.trim() != "" ||
        recording == true ||
        $payload_buffer_attachments.length != 0)
    ) {
      if (recording) {
        recording_stop();
        return;
      }
      if (event.key === "Enter") {
        if (event.preventDefault) {
          event?.preventDefault();
        }
      }
      payload_buffer_append();
      webchat_incoming_animation.set(true);
      if (event?.target?.style?.height) {
        event.target.style.height = "40px";
      }
    }
  };

  let payload_upload = () => {
    if (recording) {
      recording_stop();
      return;
    }
    payload_buffer_append();
    webchat_incoming_animation.set(true);
  };

  let click_upload = () => {
    var input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      let attachment_uuid = crypto.randomUUID();
      let blob = e.target.files[0];

      if (blob.size > 5 * 1024 * 1024) {
        return;
      }

      payload_buffer_attachments.update((payload_buffer_attachments) => [
        ...payload_buffer_attachments,
        {
          attachment_uuid,
          blob,
          sent: false,
          display: true,
        },
      ]);

      let reader = new window.FileReader();

      reader.addEventListener("loadend", () => {
        attachments_loaded[attachment_uuid] = reader.result;
      });

      reader.readAsDataURL(blob);
    };

    input.click();
  };

  let click_remove_file = (file) => {
    payload_buffer_attachments.update((payload_buffer_attachments) => {
      return payload_buffer_attachments.filter(
        (attachment) => attachment.attachment_uuid != file.attachment_uuid,
      );
    });
  };

  let recording_start = async () => {
    recording = true;
    recording_paused = false;

    voice_media_stream = await navigator.mediaDevices.getUserMedia({
      // audio: true,
      audio: {
        channelCount: 1,
        sampleRate: 16000,
        sampleSize: 16,
        volume: 1,
      },
    });

    voice_media_recorder = new MediaRecorder(voice_media_stream);
    voice_media_recorder.ondataavailable = (e) => {
      let attachment_uuid = crypto.randomUUID();
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const date = now.getDate().toString().padStart(2, "0");
      const year = now.getFullYear();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      if (e.data.type.includes("webm")) {
        e.data.name = `voicenote_${hours}:${minutes}_${date}_${month}_${year}.webm`;
      }

      if (e.data.type.includes("mp4")) {
        e.data.name = `voicenote_${hours}:${minutes}_${date}_${month}_${year}.mp4`;
      }

      payload_buffer_voice.set({
        attachment_uuid,
        blob: e.data,
        sent: false,
        display: false,
      });

      payload_buffer_append();
      webchat_incoming_animation.set(true);
    };

    voice_media_recorder.start();
    recording_time_minutes = 0;
    recording_time_seconds = 0;
    recording_time_display = "00:00";
    recording_timer();
  };

  let recording_stop = async () => {
    setTimeout(() => {
      recording = false;
      voice_media_recorder.stop();
      voice_media_stream.getTracks().forEach((track) => track.stop());
    }, 250);
  };

  let recording_pause = async () => {
    setTimeout(() => {
      recording_paused = true;
      voice_media_recorder.pause();
    }, 250);
  };

  let recording_resume = async () => {
    recording_paused = false;
    voice_media_recorder.resume();
  };

  let recording_timer = async () => {
    if (recording) {
      setTimeout(() => {
        if (recording && !recording_paused) {
          if (recording_time_seconds == 59) {
            if (recording_time_minutes == 59) {
              recording_time_minutes = 0;
            } else {
              recording_time_minutes = recording_time_minutes + 1;
            }

            recording_time_seconds = 0;
          } else {
            recording_time_seconds = recording_time_seconds + 1;
          }

          if (recording_time_minutes < 10) {
            recording_time_display = `0${recording_time_minutes}`;
          } else {
            recording_time_display = `${recording_time_minutes}`;
          }

          recording_time_display += `:`;

          if (recording_time_seconds < 10) {
            recording_time_display += `0${recording_time_seconds}`;
          } else {
            recording_time_display += `${recording_time_seconds}`;
          }
        }
        recording_timer();
      }, 1000);
    }
  };
</script>

<div>
  {#if $payload_buffer_attachments.length > 0}
    <div class="overflow-x-scroll h-[100px] hide-scrollbar pt-2">
      {#each $payload_buffer_attachments as fileObject}
        <div
          class="w-[80px] h-[80px] bg-gray-300 rounded-xl m-2 inline-block relative"
        >
          <div class="w-[80px] h-[80px] rounded-xl absolute flex">
            <div class="w-5 h-5 ml-auto mb-auto mt-1 mr-1 z-50">
              <button
                on:click={() => {
                  click_remove_file(fileObject);
                }}
                class="w-5 h-5 custom-offset z-50"
              >
                <div class="w-5 h-5 fill-gray-600 m-auto">
                  <CircleXmarkSharpDuotoneSolid />
                </div>
              </button>
            </div>
          </div>
          <div class="w-[80px] h-[80px] bg-gray-300 rounded-xl absolute flex">
            {#if fileObject.blob.type.startsWith("image")}
              <img
                src={attachments_loaded[fileObject.attachment_uuid]}
                alt=""
                class="w-[80px] h-[80px] object-cover rounded-xl"
              />
            {:else if fileObject.blob.type.startsWith("video")}
              <video
                controls={false}
                autoplay
                loop
                src={attachments_loaded[fileObject.attachment_uuid]}
                class="w-[80px] h-[80px] object-cover rounded-xl"
              >
                <track kind="captions" />
              </video>
            {:else if fileObject.blob.type.startsWith("video")}
              <video
                controls={false}
                autoplay
                loop
                src={attachments_loaded[fileObject.attachment_uuid]}
                class="w-[80px] h-[80px] object-cover rounded-xl"
              >
                <track kind="captions" />
              </video>
            {:else if fileObject.blob.type.startsWith("audio")}
              <div class="w-[20px] h-[20px] m-auto">
                <FileAudioRegular />
              </div>
            {:else}
              <div class="w-[20px] h-[20px] m-auto">
                <FileRegular />
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
  <div
    class="p-2 flex flex-col bg-gray-300 rounded-t-xl stubber_webchat_input_box"
  >
    <div class="w-full bg-white flex rounded-lg text-black">
      {#if $files_enable}
        <button
          on:click={click_upload}
          class="w-10 h-10 transition duration-300 mx-2 mt-auto"
        >
          <div class="w-4 h-5 fill-gray-400 m-auto">
            <PaperclipVerticalRegular />
          </div>
        </button>
      {/if}
      {#if !recording}
        <textarea
          id="stubber_text_message_input"
          bind:value={$payload_buffer_message}
          on:keydown={handleEnterPress}
          on:input={(event) => {
            if ($payload_buffer_message.length == 1) {
              return;
            }
            const textarea = event.target;
            if (textarea.scrollHeight > 136) {
              return;
            }
            textarea.style.height = textarea.scrollHeight + "px";
          }}
          class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2 text-blue resize-none hide-scrollbar py-2"
          style="height: 40px;"
          placeholder={"Type message..."}
          autofocus
        ></textarea>
      {/if}
      {#if recording}
        <!-- svelte-ignore a11y-interactive-supports-focus -->
        <div
          class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2 flex"
          on:keydown={handleEnterPress}
          role="button"
        >
          {#if recording_paused}
            <button on:click={recording_resume} class="w-10 h-10">
              <div class="w-4 h-5 fill-gray-400 m-auto">
                <PlayRegular />
              </div>
            </button>
          {/if}
          {#if !recording_paused}
            <button on:click={recording_pause} class="w-10 h-10">
              <div class="w-4 h-6 fill-gray-400 m-auto">
                <PauseRegular />
              </div>
            </button>
          {/if}
          <div class="p-auto my-auto ml-auto text-end mr-3">
            {recording_time_display}
          </div>
          <div class="p-auto my-auto mr-auto">
            {#if recording_paused}
              paused
            {/if}
            {#if !recording_paused}
              recording...
            {/if}
          </div>
        </div>
      {/if}
      {#if $voicenote_enable}
        {#if !recording}
          <button
            on:click={recording ? recording_stop : recording_start}
            class="w-10 h-10 transition duration-300 mt-auto"
          >
            <div class="w-4 h-6 fill-gray-400 m-auto">
              <MicrophoneRegular />
            </div>
          </button>
        {/if}
      {/if}
      <button
        class="w-10 h-10 transition duration-300 mx-2 mt-auto"
        on:click={() => {
          const customElement = document.querySelector("stubber-webchat");
          const shadowRoot = customElement.shadowRoot;
          const stubber_text_message_input = shadowRoot.getElementById(
            "stubber_text_message_input",
          );

          handleEnterPress({
            key: "Enter",
            target: stubber_text_message_input,
          });
        }}
      >
        <div class="w-4 h-5 fill-gray-400 mx-auto my-auto">
          <PaperPlaneTopRegular />
        </div>
      </button>
    </div>
    {#if $switch_whatsapp || $switch_email || $switch_sms}
      <div class="flex mt-2 mr-1">
        <div class="flex-col w-auto">
          <!-- <button
            class="transition duration-300 stubber_webchat_text"
            on:click={openSwitching}
          > -->
          <!-- </button> -->
          <div class="w-full flex py-2">
            <div class="flex px-1 my-auto">
              <SwitchTo />
            </div>
            <div class="flex px-1 my-auto">
              <p class="stubber_webchat_text text-sm text-nowrap">Switch to</p>
            </div>
            {#if $switch_whatsapp}
              <button
                class="flex px-3 my-auto"
                on:click={() => {
                  openSwitching("whatsapp", "mobile");
                }}
              >
                <WhatsappCustom />
              </button>
            {/if}
            {#if $switch_sms}
              <button
                class="flex px-3 my-auto"
                on:click={() => {
                  openSwitching("sms", "mobile");
                }}
              >
                <SmsCustom />
              </button>
            {/if}
            {#if $switch_email}
              <button
                class="flex px-3 my-auto"
                on:click={() => {
                  openSwitching("email", "email");
                }}
              >
                <EmailCustom />
              </button>
            {/if}
          </div>
        </div>
        {#if $powered_by_enabled}
          <a
            class="flex items-center mt-auto ml-auto w-32"
            href="https://stubber.com"
            target="_blank"
          >
            <span class="ml-2 stubber_webchat_text text-xs text-nowrap"
              >Powered By</span
            >
            <div class="ml-1 my-auto">
              <Stubber />
            </div>
          </a>
        {/if}
      </div>
    {:else if $powered_by_enabled}
      <div class="flex mt-2 mr-1">
        <a
          class="flex items-center mx-auto"
          href="https://stubber.com"
          target="_blank"
        >
          <span class="ml-2 stubber_webchat_text text-xs">Powered By</span>
          <div class="ml-1 my-auto">
            <Stubber />
          </div>
        </a>
      </div>
    {/if}
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_input_box {
    background-color: var(--stubber-webchat-primary-color);
    background: var(--background, var(--stubber-webchat-primary-color));
    color: var(--stubber-webchat-background-color);
  }

  .stubber_webchat_text {
    color: var(--text-color, white);
  }

  /* Tailwind CSS with @apply */
  .hide-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  /* Tailwind CSS with @apply */
  .hide-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .file-display {
    display: inline-block;
  }

  .custom-offset {
    position: absolute;
    top: -10px;
    right: -10px;
  }
</style>
