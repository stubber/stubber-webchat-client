import { writable } from "svelte/store";
import { webchat_incoming_animation } from "$/lib/stores/config_store.js";
import {
  switch_whatsapp,
  switch_email,
  switch_sms,
  platform_name,
  voicenote_enable,
  files_enable,
} from "$/lib/stores/config_store.js";
import { default_country_code } from "../stores/config_store";
import io from "socket.io-client";

const API_URL = import.meta.env.VITE_WEBCHAT_API_URL;

let API_SESSION_UUID = ``;
let API_CONFIG_ORG_UUID = ``;
let API_CONFIG_CHAT_NAME = ``;
let API_CONFIG_PASS_THROUGH_DATA = ``;
let API_CONFIG_PROFILE_UUID = ``;
let API_CONFIG_BRANCH = ``;

let SOCKET_CONNECT = true;

let FIRST_MESSAGE = true;

let SOCKET_CONNECTION = {};
const SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

export const socket_initialize = (CONFIG) => {
  API_CONFIG_ORG_UUID = CONFIG.orguuid;
  API_CONFIG_CHAT_NAME = CONFIG.chat_name;
  API_CONFIG_PASS_THROUGH_DATA = CONFIG.pass_through_data;
  API_CONFIG_PROFILE_UUID = CONFIG?.profile_uuid;
  API_CONFIG_BRANCH = CONFIG?.branch;
};

export const socket_connect = () => {
  if (!SOCKET_CONNECT) {
    return;
  }

  SOCKET_CONNECT = false;

  SOCKET_CONNECTION = io(API_URL, {
    path: SOCKET_PATH,
  });

  SOCKET_CONNECTION.on("connect", async () => {
    console.log("___Stubber Webchat connected to server");

    SOCKET_CONNECTION.emit(
      "handshake",
      {
        sessionuuid: API_SESSION_UUID,
        configuuid: `53c273e7-d89b-41a8-98f4-a440f02d663d`,
        profile_uuid: API_CONFIG_PROFILE_UUID,
        orguuid: API_CONFIG_ORG_UUID,
        chat_name: API_CONFIG_CHAT_NAME,
        pass_through_data: API_CONFIG_PASS_THROUGH_DATA,
        branch: API_CONFIG_BRANCH
      },
      (response) => {
        if (response?.sessionuuid) {
          API_SESSION_UUID = response.sessionuuid;
        }

        payloads.subscribe((PAYLOADS) => {
          for (let payload of PAYLOADS) {
            if (!payload?.message?.sent && payload.payload_direction == "OUT") {
              payload_buffer_worker(payload);
            }
          }
        })();
      }
    );
  });

  SOCKET_CONNECTION.on("webchat_payload", async (data, callback) => {
    // console.log('webchat_payload', data);
    let webchat_agent = data?.webchat_agent;
    let webchat_message = data?.webchat_message;
    let webchat_client_configuration = data?.webchat_client_configuration;
    let webchat_control_event = data?.webchat_control_event;

    if (data.webchat_message) {
      payloads.update((payloads) => [
        ...payloads,
        {
          payload_direction: "IN",
          payload_uuid: crypto.randomUUID(),
          payload_date: new Date(),
          webchat_agent,
          webchat_message: {
            type: webchat_message.type,
            data: webchat_message.value,
          },
        },
      ]);

      webchat_incoming_animation.set(false);
    }

    if (webchat_client_configuration) {
      let settings = Object.keys(webchat_client_configuration);

      settings.forEach((key) => {
        if (webchat_client_configuration[key].type == "switching") {
          switch_whatsapp.set(
            webchat_client_configuration[key]?.value?.whatsapp
          );
          switch_sms.set(webchat_client_configuration[key]?.value?.sms);
          switch_email.set(webchat_client_configuration[key]?.value?.email);
        }

        if (webchat_client_configuration[key].type == "default_country_code") {
          default_country_code.set(webchat_client_configuration[key].value);
        }

        if (webchat_client_configuration[key].type == "voicenote") {
          voicenote_enable.set(webchat_client_configuration[key].value.enable);
        }

        if (webchat_client_configuration[key].type == "files") {
          files_enable.set(webchat_client_configuration[key].value.enable);
        }
      });
    }

    if (webchat_control_event && window?.handle_server_control_event) {
      window.handle_server_control_event(webchat_control_event);
    }

    callback();
  });

  SOCKET_CONNECTION.on("error", async (data) => {
    console.log(data);
  })
};

export const settings_switching = writable({});
export const settings_country_code = writable(``);

export const payloads = writable([]);

export const payload_buffer_voice = writable({});
export const payload_buffer_message = writable(``);
export const payload_buffer_attachments = writable([]);
export const payload_buffer_fields = writable({});

export const payload_buffer_append = () => {
  const payload = {
    payload_uuid: crypto.randomUUID(),
    payload_direction: "OUT",
    payload_date: new Date(),
    attachments: [],
  };

  let buffer_voice;
  let buffer_message;
  let buffer_attachments;
  let buffer_fields;

  payload_buffer_voice.subscribe((payload_buffer_voice) => {
    buffer_voice = payload_buffer_voice;
  })();

  payload_buffer_message.subscribe((payload_buffer_message) => {
    buffer_message = payload_buffer_message;
  })();

  payload_buffer_attachments.subscribe((payload_buffer_attachments) => {
    buffer_attachments = payload_buffer_attachments;
  })();

  payload_buffer_fields.subscribe((payload_buffer_fields) => {
    buffer_fields = payload_buffer_fields;
  })();

  payload_buffer_voice.set({});
  payload_buffer_message.set(``);
  payload_buffer_attachments.set([]);
  payload_buffer_fields.set({});

  if (buffer_voice?.attachment_uuid) {
    payload.attachments.push(buffer_voice);
    payload.message = {
      type: "voice",
      data: buffer_voice.attachment_uuid,
      sent: false,
    };
  } else {
    payload.message = {
      type: "text",
      data: buffer_message.trim(),
      sent: false,
    };
  }

  if (buffer_attachments.length > 0) {
    for (let attachment of buffer_attachments) {
      payload.attachments.push(attachment);
    }
  }

  payloads.update((payloads) => [...payloads, payload]);

  payload_buffer_worker(payload);
};

export const payload_buffer_worker = async (payload) => {
  return new Promise(async (resolve, reject) => {
    // console.log(`${payload.payload_uuid} WORKINGS...`, payload);

    let form = new FormData();
    let convert_voice_note = false;

    if (payload.message.type == "voice" && payload.attachments[0]){
      if (payload.attachments[0].blob.type.includes("mp4")) {
        convert_voice_note = true;
      }
    }
    
    for (let attachment of payload?.attachments) {
      form.append(attachment.blob.name, attachment.blob, attachment.blob.name);
    }

    let file_response_json = [];
    
    if (payload.attachments.length > 0){
      const file_response = await fetch(
        `${API_URL}/v2/attachments?${new URLSearchParams({
            sessionuuid: API_SESSION_UUID,
            voicenote: convert_voice_note
          })}`,
        {
          method: "POST",
          body: form,
        }
      );
  
      if (!file_response.ok){
        console.error("Failed to upload files")
      };
  
      file_response_json = await file_response.json();
    }
    
    if (window?.handle_page_control) {
      payload = window.handle_page_control(payload);
    }

    SOCKET_CONNECTION.emit(
      "payload",
      {
        payload: {
          message: payload.message,
          attachments: file_response_json,
          payload_uuid: payload.payload_uuid,
          webchat_control_event: payload?.control_event,
          FIRST_MESSAGE: FIRST_MESSAGE
        },
      },
      () => {
        payload.message.sent = true;
        payload_buffer_update_payload(payload);
        console.log(`${payload.payload_uuid} COMPLETE...`, payload);
        resolve();
      }
    );
    
    FIRST_MESSAGE = false;
  });
};

const payload_buffer_update_payload = (payload_new) => {
  payloads.update((PAYLOADS) => {
    var index = 0;

    while (index < PAYLOADS.length) {
      if (PAYLOADS[index].payload_uuid == payload_new.payload_uuid) {
        PAYLOADS[index] = payload_new;
        return PAYLOADS;
      }
      index++;
    }

    return PAYLOADS;
  });
};

export const payload_buffer_upload_fields = (fields) => {
  const payload = {
    payload_uuid: crypto.randomUUID(),
    payload_direction: "OUT",
    fields,
  };

  SOCKET_CONNECTION.emit(
    "payload",
    {
      payload,
    },
    () => {
      console.log(`Sent Payload ${payload.payload_uuid}`);
    }
  );
};

export const payload_buffer_upload_page_control_event = (webchat_control_event) => {
  const payload = {
    payload_uuid: crypto.randomUUID(),
    payload_direction: "OUT",
    webchat_control_event,
  };

  SOCKET_CONNECTION.emit(
    "payload",
    {
      payload,
    },
    () => {
      console.log(`Sent Payload ${payload.payload_uuid}`, payload);
    }
  );
};
