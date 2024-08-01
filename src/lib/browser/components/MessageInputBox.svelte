<script>
  import {
    switch_whatsapp,
    switch_email,
    switch_sms,
    openSwitching,
    webchat_incoming_animation,
    voicenote_enable,
    files_enable,
  } from "$/lib/stores/config_store.js";

  import PaperPlaneTopRegular from "$/lib/icons/paper-plane-top-regular.svelte";
  import MicrophoneRegular from "$/lib/icons/microphone-regular.svelte";
  import PaperclipVerticalRegular from "$/lib/icons/paperclip-vertical-regular.svelte";
  import XMarkRegular from "$/lib/icons/xmark-regular.svelte";
  import PlayRegular from "$/lib/icons/play-regular.svelte";
  import PauseRegular from "$/lib/icons/pause-regular.svelte";
  import FileRegular from "$/lib/icons/file-regular.svelte";
  import FileAudioRegular from "$/lib/icons/file-audio-regular.svelte";

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
      ($payload_buffer_message != "" ||
        recording == true ||
        $payload_buffer_attachments.length != 0)
    ) {
      if (recording) {
        recording_stop();
        return;
      }

      payload_buffer_append();
      webchat_incoming_animation.set(true);
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
        (attachment) => attachment.attachment_uuid != file.attachment_uuid
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

      e.data.name = `voicenote_${hours}:${minutes}_${date}_${month}_${year}.webm`;

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
    recording = false;
    voice_media_recorder.stop();
    voice_media_stream.getTracks().forEach((track) => track.stop());
  };

  let recording_pause = async () => {
    recording_paused = true;
    voice_media_recorder.pause();
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
    <div class="overflow-x-scroll h-[100px] hide-scrollbar">
      {#each $payload_buffer_attachments as fileObject}
        <div
          class="w-[80px] h-[80px] bg-gray-300 rounded-xl m-2 inline-block relative"
        >
          <div class="w-[80px] h-[80px] rounded-xl absolute flex">
            <div class="w-4 h-4 ml-auto mb-auto mt-1 mr-1 z-50">
              <button
                on:click={() => {
                  click_remove_file(fileObject);
                }}
                class="w-3 h-3"
              >
                <div class="w-3 h-3 fill-white m-auto">
                  <XMarkRegular />
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
    <div class="h-10 w-full bg-white flex rounded-lg text-black">
      {#if $files_enable}
        <button
          on:click={click_upload}
          class="w-10 h-10 transition duration-300 mx-2"
        >
          <div class="w-4 h-5 fill-gray-400 m-auto">
            <PaperclipVerticalRegular />
          </div>
        </button>
      {/if}
      {#if !recording}
        <input
          type="text"
          class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2 text-blue"
          bind:value={$payload_buffer_message}
          on:keydown={handleEnterPress}
          placeholder={"Type message..."}
          autocomplete="off"
          maxlength="1024"
          autofocus
        />
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
            class="w-10 h-10 transition duration-300"
          >
            <div class="w-4 h-6 fill-gray-400 m-auto">
              <MicrophoneRegular />
            </div>
          </button>
        {/if}
      {/if}
      <button
        class="w-10 h-10 transition duration-300 mx-2"
        on:click={() => {
          handleEnterPress({ key: "Enter" });
        }}
      >
        <div class="w-4 h-5 fill-gray-400 mx-auto my-auto">
          <PaperPlaneTopRegular />
        </div>
      </button>
    </div>
    {#if $switch_whatsapp || $switch_email || $switch_sms}
      <div class="w-full flex">
        <button
          class="w-25 transition duration-300 my-2 mx-auto stubber_webchat_text"
          on:click={openSwitching}
        >
          Switch Chat Channels
        </button>
      </div>
    {/if}
    <a
      class="text-fs w-full text-center mt-1 stubber_webchat_text"
      href="https://www.stubber.com/"
      target="_blank"
    >
      Powered by Stubber
    </a>
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_input_box {
    background-color: var(--primary-color);
    background: var(--background, var(--primary-color));
    color: var(--background-color);
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
</style>
