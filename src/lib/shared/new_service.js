import io from "socket.io-client";
import {
  webchat_config,
  webchat_state
} from "$/lib/stores/config_store.js";

const API_URL = import.meta.env.VITE_WEBCHAT_API_URL;
const SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

let SOCKET_CONNECTION = {};
let SESSIONUUID;
let FIRST_MESSAGE = true;

export const webchat_socket_init = (profileuuid, branch) => {
  SOCKET_CONNECTION = io(API_URL, {
    path: SOCKET_PATH,
    auth: {
      profileuuid: profileuuid,
      branch: branch
    }
  });

  SOCKET_CONNECTION.on("connect", async () => {
    console.log("___Stubber Webchat connected to server");
  });

  SOCKET_CONNECTION.on("ready", (data) => {
    console.log("___Stubber Webchat ready", data);
    if (!SESSIONUUID) {
      //save current session for disconnect
      SOCKET_CONNECTION.auth.sessionuuid = data.sessionuuid;
      handle_config(data.config);
      console.log("New session", data.sessionuuid);

      // display first message
      webchat_state.update((state) => {
        state.payloads.push({
          type: "IN",
          payload: {
            webchat_message: data.config
          },
          payloaduuid: crypto.randomUUID(),
          payload_date: new Date()
        });
        console.log("___Stubber Webchat state", state);
        return state;
      });
    }
  })

  SOCKET_CONNECTION.on("error", async (error) => {
    console.error("___Stubber Webchat error", error);
  });

  SOCKET_CONNECTION.on("payload", async (payload, callback) => {
    handle_payload(payload, callback);
    console.log("___Stubber Webchat payload received", payload);
  });
}

function handle_payload(payload, callback) {
  console.log("___Stubber Webchat recieved", payload);

  webchat_state.update((state) => {
    state.payloads.push({
      type: "IN",
      payload,
      payloaduuid: crypto.randomUUID(),
      payload_date: new Date()
    });
    console.log("___Stubber Webchat state", state);
    return state;
  });

  callback()
}

export const send_payload = (payload) => {
  console.log("___Stubber Webchat sending message", payload);

  webchat_state.update((state) => {
    state.payloads.push(
      {
        type: "OUT",
        payload,
        payloaduuid: crypto.randomUUID(),
        payload_date: new Date()
      }
    );
    console.log("___Stubber Webchat state", state);
    return state;
  });

  if (payload.message) {
    payload.FIRST_MESSAGE = FIRST_MESSAGE;
  }

  SOCKET_CONNECTION.emit("payload", payload, (data) => {
    console.log("___Stubber Webchat message sent", data);
  });
  FIRST_MESSAGE = false;
}

function handle_config(config) {
  // appling css
  let webchat_css_config = config.webchat_client_config.display_settings.css;
  if (webchat_css_config) {
    let root_css = document.querySelector(":root");

    root_css.style.setProperty(
      "--stubber-webchat-primary-color",
      webchat_css_config["--primary-color"]
    );
    root_css.style.setProperty(
      "--stubber-webchat-border-color",
      webchat_css_config["--border-color"]
    );
    root_css.style.setProperty(
      "--text-color",
      webchat_css_config["--text-color"]
    );
  }

  webchat_config.update((current_config) => {
    current_config.chat_display_name = config.webchat_client_config.webchat_title;
    current_config.open_on_mount = config.webchat_client_config.display_settings.open_on_load;
    current_config.webchat_agent_name = config.webchat_client_config.chat_agent.name;
    current_config.fullscreen_toggle = config.webchat_client_config.display_settings.fullscreen_toggle;

    if (config.webchat_client_config.display_settings.open_on_load) {
      setTimeout(() => {
        webchat_state.update((state) => {
          state.webchat_enable = true;
          state.webchat_opened = true;
          return state;
        });
      }, config.webchat_client_config.display_settings.open_on_load_timeout_milliseconds);
    }

    console.log("___Stubber Webchat config", config);
    return current_config;
  });

  webchat_state.update((state) => {
    state.webchat_enabled = true;

    state.fullscreen = config.webchat_client_config.display_settings.fullscreen;
    console.log("___Stubber Webchat state", state);
    return state;
  });
}
