<script>
    import GeneralInput from "$/lib/browser/components/forms/generalInput.svelte";

    import AtRegular from "$/lib/icons/at-regular.svelte";
    import ArrowLeftSolid from "$/lib/icons/arrow-left-solid.svelte";
    import MessageSmsRegular from "$/lib/icons/message-sms-regular.svelte";
    import Whatsapp from "$/lib/icons/whatsapp.svelte";
    
    import { switching_opened, switch_whatsapp, switch_sms, switch_email, platform_name, contact_point_type} from "$/lib/stores/configStore.js";
    import { sendClientConfig } from "$/lib/shared/socketService.js";

</script>

<div class="p-2 flex flex-col bg-white h-full stubber_webchat_switch_box">
    <div class="flex w-full pl-2">
        <button
            class="w-6 h-24 my-auto transition duration-300 rounded-md mx-1"
            on:click={() => {
                $switching_opened = false;
            }}
        >
            <span class="stubber_webchat_breadcrumb_fill">
                <ArrowLeftSolid />
            </span>
        </button>
        <p class="h-24 mx-2 my-auto stubber_webchat_breadcrumb_fill">
            Back to chat
        </p>
    </div>
    <div class="flex flex-row mt-5">
        {#if $switch_whatsapp}
            <button
                class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                class:stubber_webchat_chat_button_border_fill_selected={$platform_name ==
                    "whatsapp"}
                on:click={() => {
                    platform_name.set("whatsapp");
                    contact_point_type.set("mobile");
                }}
            >
                <span class="w-10 mx-auto my-auto">
                    <Whatsapp />
                </span>
                <p class="mx-auto mb-1">Whatsapp</p>
            </button>
        {/if}
        {#if $switch_sms}
            <button
                class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                class:stubber_webchat_chat_button_border_fill_selected={$platform_name ==
                    "sms"}
                on:click={() => {
                    platform_name.set("sms");
                    contact_point_type.set("mobile");
                }}
            >
                <span class="w-10 mx-auto my-auto">
                    <MessageSmsRegular />
                </span>
                <p class="mx-auto mb-1">SMS</p>
            </button>
        {/if}
        {#if $switch_email}
            <button
                class="w-14 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"
                class:stubber_webchat_chat_button_border_fill_selected={$platform_name ==
                    "email"}
                on:click={() => {
                    platform_name.set("email");
                    contact_point_type.set("email");
                }}
            >
                <span class="w-10 mx-auto my-auto">
                    <AtRegular />
                </span>
                <p class=" mx-auto mb-1">Email</p>
            </button>
        {/if}
    </div>
    <div class="flex flex-col">
        <div class="flex flex-col mt-5 mx-2">
            <GeneralInput />
        </div>
    </div>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .stubber_webchat_breadcrumb_fill {
        color: var(--primary-color);
        fill: var(--primary-color);
    }

    .stubber_webchat_chat_button_border_fill {
        background-color: var(--background-color);
        border: var(--neutral-color);
        fill: var(--neutral-color);
    }

    .stubber_webchat_chat_button_border_fill_selected {
        border-color: var(--primary-color);
        fill: var(--primary-color);
    }

    .stubber_webchat_switch_box {
        border: none;
    }
</style>
