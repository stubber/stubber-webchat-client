<script>
    import { onDestroy, onMount } from "svelte";

    import WhatsappSwitch from "../switch/whatsappSwitch.svelte";
    import SmsSwitch from "../switch/smsSwitch.svelte";
    import EmailSwitch from "../switch/emailSwitch.svelte";

    import io from "socket.io-client";

    export let orguuid;
    export let chatPath;
    export let connectOnLoad;

    let message = ``;
    let messages = [];

    let socket;
    let allow_switch = false;
    let details_switch = false;
    let mode_switch = "";

    onMount(() => {
        if (connectOnLoad === "true") connectSocket();
    });

    let connectSocket = () => {
        socket = io("http://api.stubber.zone:6026");

        socket.on("connect", async () => {
            console.log("___Connected to server");

            if (messages.length == 0) {
                await socket.emit("initialize", {
                    orguuid,
                    chatPath,
                });
            }
        });

        socket.on("disconnect", () => {
            console.log("___Disconnected from server");
        });

        socket.on("recieve", (data) => {
            messages[data.index - 1].recieved = true;
            messages = messages;
        });

        socket.on("message", (data) => {
            messages.push({
                direction: "in",
                sent: false,
                recieved: false,
                dateTime: new Date(),
                message: data.message,
            });
            messages = messages;
        });

        socket.on("params", (data) => {
            allow_switch = data?.switch;
        });
    };

    let handleEnterPress = (event) => {
        if (event.key === "Enter" && message != "") {
            sendMessage();
        }
    };

    let sendMessage = async () => {
        messages.push({
            direction: "out",
            sent: false,
            recieved: false,
            dateTime: new Date(),
            message,
        });
        messages = messages;
        message = "";

        await socket.emit("message", {
            index: messages.length,
            orguuid,
            chatPath,
            message,
        });
    };

    let timeFormat = (dateTime) => {
        const hours = dateTime.getHours().toString().padStart(2, "0");
        const minutes = dateTime.getMinutes().toString().padStart(2, "0");
        return hours + ":" + minutes;
    };

    let startSwitch = (mode) => {
        mode_switch = mode;
        details_switch = true;
    };

    onDestroy(() => {
        if (ws) {
            ws.close();
        }
    });
</script>

<div class="stubber_webchat_box" id="stubber_webchat_box">
    <div class="stubber_message_box" id="stubber_message_box">
        {#each messages as messageObject}
            {#if messageObject.direction == "in"}
                <div
                    class="stubber_webchat_message_in"
                    id="stubber_webchat_message_in"
                >
                    <div
                        class="stubber_webchat_message_text_box"
                        id="stubber_webchat_message_text_box"
                    >
                        {messageObject.message}
                    </div>
                    <div
                        class="stubber_webchat_message_info_box"
                        id="stubber_webchat_message_info_box"
                    >
                        <small
                            class="stubber_webchat_message_info_time_in"
                            id="stubber_webchat_message_info_time_in"
                            >{timeFormat(messageObject.dateTime)}</small
                        >
                    </div>
                </div>
            {/if}
            {#if messageObject.direction == "out"}
                <div
                    class="stubber_webchat_message_out"
                    id="stubber_webchat_message_out"
                >
                    <div
                        class="stubber_webchat_message_text_box"
                        id="stubber_webchat_message_text_box"
                    >
                        {messageObject.message}
                    </div>
                    <div
                        class="stubber_webchat_message_info_box"
                        id="stubber_webchat_message_info_box"
                    >
                        <small
                            class="stubber_webchat_message_info_time_out"
                            id="stubber_webchat_message_info_time_out"
                            >{timeFormat(messageObject.dateTime)}</small
                        >
                        {#if messageObject.recieved == false}
                            <svg
                                class="stubber_webchat_message_info_sent"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                id="stubber_webchat_message_info_sent"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        {/if}
                        {#if messageObject.recieved == true}
                            <svg
                                class="stubber_webchat_message_info_sent_delivered"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                id="stubber_webchat_message_info_sent_delivered"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        {/if}
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    {#if !details_switch}
        <div class="stubber_message_input_box" id="stubber_message_input_box">
            <input
                type="text"
                class="stubber_message_input"
                id="stubber_message_input"
                bind:value={message}
                on:keydown={handleEnterPress}
                placeholder={details_switch ? "" : "Type something..."}
                disabled={details_switch}
            />
            <button
                class="stubber_message_send_button"
                id="stubber_message_send_button"
                on:click={sendMessage}
                disabled={message === "" || details_switch}
            >
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="stubber_message_send_button_svg"
                    id="stubber_message_send_button_svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M12 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    {/if}
    {#if allow_switch}
        <div class="stubber_chat_switch_box" id="stubber_chat_switch_box">
            {#if !details_switch}
                <p class="stubber_chat_switch_text">Continue Chat On</p>
                <button
                    class="stubber_chat_switch_button primary_colors"
                    on:click={() => startSwitch("Whatsapp")}
                >
                    WH
                </button>
                <button
                    class="stubber_chat_switch_button"
                    on:click={() => startSwitch("SMS")}
                >
                    SM
                </button>
                <button
                    class="stubber_chat_switch_button"
                    on:click={() => startSwitch("Email")}
                >
                    EM
                </button>
            {/if}

            {#if mode_switch == "Whatsapp"}
                <WhatsappSwitch {socket} {orguuid} {chatPath} />
            {/if}

            {#if mode_switch == "SMS"}
                <SmsSwitch {socket} {orguuid} {chatPath} />
            {/if}

            {#if mode_switch == "Email"}
                <EmailSwitch {socket} {orguuid} {chatPath} />
            {/if}
        </div>
    {/if}
</div>
