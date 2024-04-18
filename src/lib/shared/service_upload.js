import { writable } from 'svelte/store';
import { socket_connection } from "./socketService";

const WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;

export const payloads = writable([]);

export const payload_buffer_voice = writable([]);
export const payload_buffer_message = writable(``);
export const payload_buffer_attachments = writable([]);
export const payload_buffer_client_configs = writable([]);

export const payload_buffer_upload = () => {
    const payload = {
        payload_uuid: crypto.randomUUID()
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

    payload.webchat_message = {
        type: 'text',
        data: buffer_message
    };

    if (buffer_voice.length > 0){
        const voice_attachment_uuid = crypto.randomUUID();
        const voice_attachment_blob = new Blob([buffer_voice], {'type' : 'audio/ogg; codecs=opus' });

        upload_attachment({
            attachment_uuid: voice_attachment_uuid,
            blob: voice_attachment_blob
        })

        payload.webchat_voice = {
            type: 'voice',
            data: voice_attachment_uuid
        };
    };

    if (buffer_attachments.length > 0){
        for (let attachment of buffer_attachments){
            upload_attachment(attachment);
        };
    };

    if (payload_buffer_client_configs.length > 0){

    };

    console.log(payload);
}

const upload_attachment = (attachment) => {
    const req = new XMLHttpRequest();

    req.open("POST", `${WEBCHAT_API_URL}/v2/attachments`);
    // req.open("POST", `http://localhost:3000`);
    req.send(attachment.blob);
}