<script>
    import { sendMessage } from "$/lib/shared/socketService.js";
    import {
        switch_whatsapp,
        switch_email,
        switch_sms,
        openSwitching
    } from "$/lib/stores/configStore.js";
    import PaperPlaneTopRegular from "$/lib/icons/paper-plane-top-regular.svelte";
    import MicrophoneRegular from "$/lib/icons/microphone-regular.svelte";
    import PaperclipVerticalRegular from "$/lib/icons/paperclip-vertical-regular.svelte";
    import XMarkRegular from "$/lib/icons/xmark-regular.svelte";
    import PlayRegular from "$/lib/icons/play-regular.svelte";
    import PauseRegular from "$/lib/icons/pause-regular.svelte";

    import {
        payloads,
        payload_buffer_message,
        payload_buffer_voice,
        payload_buffer_attachments,
        payload_buffer_upload
    } from "$/lib/shared/service_upload.js";

    let recording = false;
    let recording_paused = false;
    let recording_time_minutes = false;
    let recording_time_seconds = false;
    let recording_time_display = "00:00";

    let voice_media_stream = null;
    let voice_media_recorder = null;

    let handleEnterPress = (event) => {
        if (
            event.key === "Enter" &&
            ($payload_buffer_message != "" ||
                recording == true ||
                $payload_buffer_attachments.length != 0)
        ) {
            if (recording) {
                recording_stop();
            }

            payload_buffer_upload();
        }
    };

    let payload_upload = () => {
        if (recording) {
            recording_stop();
        }

        payload_buffer_upload();
    };

    let click_upload = () => {
        var input = document.createElement("input");
        input.type = "file";

        
        input.onchange = (e) => {
            var blob = e.target.files[0];

            const attachment = {
                attachment_uuid: crypto.randomUUID(),
                blob
            }

            payload_buffer_attachments.update((payload_buffer_attachments) => [
                ...payload_buffer_attachments,
                attachment,
            ]);
        };

        input.click();
    };

    let click_remove_file = (file) => {
        payload_buffer_attachments.update((payload_buffer_attachments) => {
            return payload_buffer_attachments.filter(
                (attachment) =>
                    attachment.attachment_uuid != file.attachment_uuid,
            );
        });
    };

    let recording_start = async () => {
        recording = true;

        voice_media_stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        voice_media_recorder = new MediaRecorder(voice_media_stream);
        voice_media_recorder.ondataavailable = (e) => {
            payload_buffer_voice.set(e.data);
            // new Blob([e.data], {'type' : 'audio/ogg; codecs=opus' });
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
                    class="w-[80px] h-[80px] stubber_webchat_input_box rounded-xl m-2 inline-block"
                >
                    <div class="w-4 h-4 ml-auto mb-auto mt-1 mr-1">
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
            {/each}
        </div>
    {/if}
    <div
        class="p-2 flex flex-col bg-gray-300 rounded-t-xl stubber_webchat_input_box"
    >
        <div class="h-10 w-full bg-white flex rounded-lg text-black">
            <button
                on:click={click_upload}
                class="w-10 h-10 transition duration-300 mx-2"
            >
                <div class="w-4 h-5 fill-gray-400 m-auto">
                    <PaperclipVerticalRegular />
                </div>
            </button>
            {#if !recording}
                <input
                    type="text"
                    class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"
                    bind:value={$payload_buffer_message}
                    on:keydown={handleEnterPress}
                    placeholder={"Type message..."}
                    autocomplete="off"
                    maxlength="1024"
                    autofocus
                />
            {/if}
            {#if recording}
                <div
                    class="w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2 flex"
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
            <button
                on:click={recording ? recording_stop : recording_start}
                class="w-10 h-10 transition duration-300"
            >
                <div class="w-4 h-6 fill-gray-400 m-auto">
                    <MicrophoneRegular />
                </div>
            </button>
            <button
                class="w-10 h-10 transition duration-300 mx-2"
                on:click={payload_upload}
                disabled={$payload_buffer_message === "" &&
                    recording == false &&
                    $payload_buffer_attachments.length != 0}
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
