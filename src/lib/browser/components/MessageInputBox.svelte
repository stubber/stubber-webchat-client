<script>
    import { sendMessage } from "$/lib/shared/socketService.js";
    import {
        switch_whatsapp,
        switch_email,
        switch_sms,
        openSwitching,
    } from "$/lib/stores/configStore.js";
    import PaperPlaneTopRegular from "$/lib/icons/paper-plane-top-regular.svelte";
    import MicrophoneRegular from "$/lib/icons/microphone-regular.svelte";
    import PaperclipVerticalRegular from "$/lib/icons/paperclip-vertical-regular.svelte";
    import XMarkRegular from "$/lib/icons/xmark-regular.svelte";
    import PlayRegular from "$/lib/icons/play-regular.svelte";
    import PauseRegular from "$/lib/icons/pause-regular.svelte";

    let message = ``;
    let recording = false;
    let recording_paused = false;
    let recording_time = {
        minutes: 0,
        seconds: 0,
    };
    let files = [];

    let media = [];
    let mediaRecorder = null;

    let handleEnterPress = (event) => {
        if (event.key === "Enter" && message != "") {
            if (recording) {
                recording_stop()
            }

            if (!recording) {
                sendMessage(message);
                message = ``;
            }
        }
    };

    let normalSend = () => {
        sendMessage(message);
        message = ``;
    };

    let click_upload = () => {
        var input = document.createElement("input");
        input.type = "file";

        input.onchange = (e) => {
            var file = e.target.files[0];

            files.push(file);

            files = files;
        };
        input.click();
    };

    let click_remove_file = (file) => {
        files.pop(file);
        files = files;
    };

    let recording_start = async () => {
        recording = true;

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => media.push(e.data);

        // mediaRecorder.onstop = function(){
        //     const blob = new Blob(media, {'type' : 'audio/ogg; codecs=opus' });
        // }

        mediaRecorder.start();
    };

    let recording_stop = async () => {
        recording = false;
        mediaRecorder.stop();

        console.log(media.length);
    };

    let recording_pause = async () => {
        recording_paused = true;
        mediaRecorder.pause();
    };

    let recording_resume = async () => {
        recording_paused = false;
        mediaRecorder.resume();
    };
</script>

<div>
    {#if files.length > 0}
        <div class="overflow-x-scroll h-[100px] hide-scrollbar">
            {#each files as fileObject}
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
                    bind:value={message}
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
                        00:00
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
                on:click={recording ? recording_stop : normalSend}
                disabled={message === "" && recording == false}
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
