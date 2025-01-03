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

    // sending ititial payload to server
    SOCKET_CONNECTION.emit("payload", {
      config: {},
      message: {
        text: "Hello, I'm a stubber bot",
        voicenote: new Blob(),
        attachements: new Blob()
      },
      control_event: {

      }
    }, (data) => {
      console.log("___Stubber Webchat payload sent", data);
      const payload = data.payload;

      if (!data.success) {
        console.error("___Stubber Webchat server error", data);
      }

      if (payload.sessionuuid) {
        SESSIONUUID = payload.sessionuuid;
        SOCKET_CONNECTION.auth.sessionuuid = payload.sessionuuid;
        console.log("applied session", payload.sessionuuid);
      }

      if (payload.config) {
        // apply conifg

        // appling css
        let webchat_css_config = payload.config.webchat_client_config.display_settings.css;
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

        webchat_config.update((config) => {
          config.chat_display_name = payload.config.webchat_client_config.webchat_title;
          config.open_on_mount = payload.config.webchat_client_config.display_settings.open_on_load;
          config.webchat_agent_name = payload.config.webchat_client_config.chat_agent.name;
          config.fullscreen_toggle = payload.config.webchat_client_config.display_settings.fullscreen_toggle;
          
          if (payload.config.webchat_client_config.display_settings.open_on_load) {
            setTimeout(() => {
              webchat_state.update((state) => {
                state.webchat_enable = true;
                state.webchat_opened = true;
                return state;
              });
            }, payload.config.webchat_client_config.display_settings.open_on_load_timeout_milliseconds);
          }
          
          console.log("___Stubber Webchat config", config);
          return config;
        })
        webchat_state.update((state) => {
          state.webchat_enabled = true;

          state.fullscreen = payload.config.webchat_client_config.display_settings.fullscreen;
          console.log("___Stubber Webchat state", state);
          return state;
        });
      }

      if (payload.message) {
        // apply message
      }

      if (payload.control_event) {
        // apply control_event
      }
    })
  });

  SOCKET_CONNECTION.on("error", async (error) => {
    console.error("___Stubber Webchat error", error);
  });

  SOCKET_CONNECTION.on("payload", async (data) => {

  });
}