<script>
    import { sendMessage } from "$/lib/shared/socketService.js";
    import { switch_whatsapp, switch_email, switch_sms, openSwitching } from "$/lib/stores/configStore.js";
    import PaperPlaneTopRegular from "$/lib/icons/paper-plane-top-regular.svelte";

    let message = ``;

    let handleEnterPress = (event) => {
        if (event.key === "Enter" && message != "") {
            sendMessage(message);
            message = ``;
        }
    };

    let normalSend = () => {
        sendMessage(message);
        message = ``;
    };
</script>

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
            on:click={normalSend}
            disabled={message === ""}
        >
            <span class="fill-gray-400">
                <PaperPlaneTopRegular />
            </span>
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
</style>
