import io from "socket.io-client";
import {
  webchat_config,
  webchat_state
} from "$/lib/stores/config_store.js";

const API_URL = import.meta.env.VITE_WEBCHAT_API_URL;
const SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

let SOCKET_CONNECTION = {};
let SESSIONUUID;

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
      SOCKET_CONNECTION.auth.sessionuuid = data.sessionuuid;
      console.log("applied session", data.sessionuuid);
    }
    if (data.config) {
      handle_config(data.config);
    }
  })

  SOCKET_CONNECTION.on("error", async (error) => {
    console.error("___Stubber Webchat error", error);
  });

  SOCKET_CONNECTION.on("payload", async (data) => {
    console.log("___Stubber Webchat payload received", data);
  });
}

function handle_messages(message) {
  console.log("___Stubber Webchat recieved", data);

  webchat_state.update((state) => {
    state.messages.push(message);
    console.log("___Stubber Webchat state", state);
    return state;
  });
}

export const send_message = (message) => {
  console.log("___Stubber Webchat sending message", message);

  SOCKET_CONNECTION.emit("payload", message, (data) => {
    console.log("___Stubber Webchat message sent", data);
    webchat_state.update((state) => {
      state.messages.push(message);
      console.log("___Stubber Webchat state", state);
      return state;
    });
  });
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
