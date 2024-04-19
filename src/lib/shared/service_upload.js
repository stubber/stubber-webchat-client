import { writable } from 'svelte/store';
import { webchat_incoming_animation } from "$/lib/stores/configStore.js";
import { switch_whatsapp, switch_email, switch_sms, platform_name } from "$/lib/stores/configStore.js";
import { default_country_code } from "../stores/configStore";
import io from "socket.io-client";

const API_URL = import.meta.env.VITE_WEBCHAT_API_URL;

let API_SESSION_UUID = ``;
let API_CONFIG_ORG_UUID = ``;
let API_CONFIG_CHAT_NAME = ``;
let API_CONFIG_PASS_THROUGH_DATA = ``;

let SOCKET_CONNECTION = {};
const SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

export const socket_initialize = (CONFIG) => {
    API_CONFIG_ORG_UUID = CONFIG.orguuid;
    API_CONFIG_CHAT_NAME = CONFIG.chat_name;
    API_CONFIG_PASS_THROUGH_DATA = CONFIG.pass_through_data;
}

export const socket_connect = () => {
    SOCKET_CONNECTION = io(API_URL, {
        path: SOCKET_PATH,
    });

    SOCKET_CONNECTION.on("connect", async () => {
        console.log("___Stubber Webchat connected to server");

        if (API_SESSION_UUID == ``) {
            SOCKET_CONNECTION.emit("initialize", {
                webchat_configuration: {
                    sessionuuid: API_SESSION_UUID,
                    orguuid: API_CONFIG_ORG_UUID,
                    chat_name: API_CONFIG_CHAT_NAME,
                    pass_through_data: API_CONFIG_PASS_THROUGH_DATA
                }
            }, (response) => {
                console.log(response);
                if (response?.sessionuuid) {
                    API_SESSION_UUID = response.sessionuuid
                }
            });
        }

        if (API_SESSION_UUID != ``) {
            await SOCKET_CONNECTION.emit("webchat_session", {
                webchat_configuration: {
                    sessionuuid: API_SESSION_UUID
                }
            }, (response) => {
                console.log(response);
            });
        }
    });

    SOCKET_CONNECTION.on("webchat_payload", async (data) => {
        let webchat_agent = data?.webchat_agent
        let webchat_message = data?.webchat_message
        let webchat_client_configuration = data?.webchat_client_configuration

        if (data.webchat_message) {
            payloads.update(payloads => [...payloads, {
                payload_direction: 'IN',
                webchat_agent,
                webchat_message: {
                    type: webchat_message.type,
                    data: webchat_message.value
                }
            }])

            webchat_incoming_animation.set(false);
        }

        if (webchat_client_configuration) {
            let settings = Object.keys(webchat_client_configuration);

            settings.forEach((key) => {
                if (webchat_client_configuration[key].type == "switching") {
                    switch_whatsapp.set(webchat_client_configuration[key]?.value?.whatsapp);
                    switch_sms.set(webchat_client_configuration[key]?.value?.sms);
                    switch_email.set(webchat_client_configuration[key]?.value?.email);
                }

                if (webchat_client_configuration[key].type == "default_country_code") {
                    default_country_code.set(webchat_client_configuration[key].value)
                }
            });
        }
    })
}

export const settings_switching = writable({})
export const settings_country_code = writable(``)

export const payloads = writable([]);

export const payload_buffer_voice = writable([]);
export const payload_buffer_message = writable(``);
export const payload_buffer_attachments = writable([]);
export const payload_buffer_client_configs = writable([]);

export const payload_buffer_upload = () => {
    const payload = {
        payload_uuid: crypto.randomUUID(),
        payload_direction: "OUT"
    };

    console.log(`Uploading Payload ${payload.payload_uuid}`);

    let buffer_voice;
    let buffer_message;
    let buffer_attachments;
    let buffer_client_configs;

    payload_buffer_voice.subscribe(payload_buffer_voice => {
        buffer_voice = payload_buffer_voice;
    })();

    payload_buffer_message.subscribe(payload_buffer_message => {
        buffer_message = payload_buffer_message;
    })();

    payload_buffer_attachments.subscribe(payload_buffer_attachments => {
        buffer_attachments = payload_buffer_attachments;
    })();

    payload_buffer_client_configs.subscribe(payload_buffer_client_configs => {
        buffer_client_configs = payload_buffer_client_configs;
    })();

    payload_buffer_voice.set([]);
    payload_buffer_message.set(``);
    payload_buffer_attachments.set([]);
    payload_buffer_client_configs.set([]);

    payload.webchat_message = {
        type: 'text',
        data: buffer_message
    };

    if (buffer_voice.length > 0) {
        const voice_attachment_uuid = crypto.randomUUID();
        const voice_attachment_blob = new Blob([buffer_voice], { 'type': 'audio/ogg; codecs=opus' });

        upload_attachment({
            attachment_uuid: voice_attachment_uuid,
            blob: voice_attachment_blob
        })

        payload.webchat_voice = {
            type: 'voice',
            data: voice_attachment_uuid
        };
    };

    if (buffer_attachments.length > 0) {
        for (let attachment of buffer_attachments) {
            upload_attachment(attachment);
        };
    };

    if (payload_buffer_client_configs.length > 0) {

    };

    SOCKET_CONNECTION.emit("message", {
        webchat_configuration: {
            sessionuuid: API_SESSION_UUID,
            orguuid: API_CONFIG_ORG_UUID,
            chat_name: API_CONFIG_CHAT_NAME,
            pass_through_data: API_CONFIG_PASS_THROUGH_DATA
        },
        webchat_message: payload.webchat_message
    })

    payloads.update(payloads => [...payloads, payload]);
}

const upload_attachment = (attachment) => {
    const req = new XMLHttpRequest();

    req.open("POST", `${API_URL}/v2/attachments?sessionuuid=${API_SESSION_UUID}`);
    req.send(attachment.blob);
}

export const upload_client_config = async (contact_point) => {
    let PLATFORM_NAME = "";

    let platform_name_subscription = platform_name.subscribe(async platform_name => {
        PLATFORM_NAME = platform_name
    });

    platform_name_subscription();

    await SOCKET_CONNECTION.emit("client_configuration", {
        webchat_configuration: {
            sessionuuid: API_SESSION_UUID,
            orguuid: API_CONFIG_ORG_UUID,
            chat_name: API_CONFIG_CHAT_NAME,
            pass_through_data: API_CONFIG_PASS_THROUGH_DATA
        },
        webchat_client_configuration: {
            platform_switch: {
                platform_name: PLATFORM_NAME,
                type: contact_point.type,
                value: contact_point.contact
            }
        }
    });
}