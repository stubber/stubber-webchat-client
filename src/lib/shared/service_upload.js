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

        SOCKET_CONNECTION.emit("handshake", {
            sessionuuid: API_SESSION_UUID,
            orguuid: API_CONFIG_ORG_UUID,
            chat_name: API_CONFIG_CHAT_NAME,
            pass_through_data: API_CONFIG_PASS_THROUGH_DATA
        }, (response) => {
            if (response?.sessionuuid) {
                API_SESSION_UUID = response.sessionuuid
            }
        });
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
export const payload_buffer_fields = writable({});

export const payload_buffer_upload = () => {
    const payload = {
        payload_uuid: crypto.randomUUID(),
        payload_direction: "OUT"
    };

    let buffer_voice;
    let buffer_message;
    let buffer_attachments;
    let buffer_fields;

    payload_buffer_voice.subscribe(payload_buffer_voice => {
        buffer_voice = payload_buffer_voice;
    })();

    payload_buffer_message.subscribe(payload_buffer_message => {
        buffer_message = payload_buffer_message;
    })();

    payload_buffer_attachments.subscribe(payload_buffer_attachments => {
        buffer_attachments = payload_buffer_attachments;
    })();

    payload_buffer_fields.subscribe(payload_buffer_fields => {
        buffer_fields = payload_buffer_fields;
    })();

    payload_buffer_voice.set([]);
    payload_buffer_message.set(``);
    payload_buffer_attachments.set([]);
    payload_buffer_fields.set({});

    payload.message = {
        type: 'text',
        data: buffer_message
    };

    if (buffer_voice.length > 0) {
        const voice_attachment_uuid = crypto.randomUUID();
        const voice_attachment_blob = new Blob([buffer_voice], { 'type': 'audio/ogg; codecs=opus' });

        upload_attachment({
            payload_uuid: payload.payload_uuid,
            blob: voice_attachment_blob
        })

        payload.message = {
            type: 'voice',
            data: voice_attachment_uuid
        };
    };

    if (buffer_attachments.length > 0) {
        for (let attachment of buffer_attachments) {
            upload_attachment({
                payload_uuid: payload.payload_uuid,
                blob: attachment
            });
        };
    };

    if (Object.keys(buffer_fields) > 0) {
        payload.fields = buffer_fields
    };

    SOCKET_CONNECTION.emit("payload", {
        payload
    }, () => {
        console.log(`Received Payload ${payload.payload_uuid}`)
    })

    payloads.update(payloads => [...payloads, payload]);
}

export const payload_buffer_upload_fields = (fields) => {
    const payload = {
        payload_uuid: crypto.randomUUID(),
        payload_direction: "OUT",
        fields
    };

    SOCKET_CONNECTION.emit("payload", {
        payload
    }, () => {
        console.log(`Received Payload ${payload.payload_uuid}`)
    })
}

const upload_attachment = (attachment) => {
    const req = new XMLHttpRequest();

    req.open("POST", `${API_URL}/v2/attachments?sessionuuid=${API_SESSION_UUID}`);
    req.send(attachment.blob.blob);
}