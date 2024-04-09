import io from "socket.io-client";
import { addMessage, messages } from "../stores/messageStore";
import { switch_whatsapp, switch_email, switch_sms } from "$/lib/stores/configStore.js";
import { platform_name, webchat_incoming_animation, default_country_code } from "../stores/configStore";

let socket;
let WEBCHAT_CONFIGURATION = {};
let WEBCHAT_API_URL = import.meta.env.VITE_WEBCHAT_API_URL;
let WEBCHAT_API_SOCKET_PATH = import.meta.env.VITE_WEBCHAT_API_SOCKET_PATH;

export const setSocketConfig = (webchat_configuration) => {
  WEBCHAT_CONFIGURATION = webchat_configuration;
  WEBCHAT_CONFIGURATION.sessionuuid = '';
}

export const connectSocket = () => {
  if (!socket) {
    socket = io(WEBCHAT_API_URL, {
      path: WEBCHAT_API_SOCKET_PATH,
    });

    socket.on("connect", async () => {
      console.log("___Stubber Webchat connected to server");

      if (WEBCHAT_CONFIGURATION.sessionuuid != '') {
        await socket.emit("webchat_session", {
          webchat_configuration: WEBCHAT_CONFIGURATION
        });
      }

      const message_subscription = messages.subscribe(async currentMessages => {
        if (currentMessages.length == 0) {
          await socket.emit("initialize", {
            webchat_configuration: WEBCHAT_CONFIGURATION
          });
        }
      });

      message_subscription();
    });

    socket.on("webchat_payload", (data, callback) => {
      let webchat_message = data?.webchat_message
      let webchat_client_configuration = data?.webchat_client_configuration

      if (webchat_message) {
        let previous_direction = null;

        const message_subscription = messages.subscribe(async currentMessages => {
          if (currentMessages.length > 0) {
            previous_direction = currentMessages[currentMessages.length - 1].direction;
          }
        });

        message_subscription();

        let messageObject = {
          direction: "in",
          previous_direction,
          sent: false,
          received: false,
          dateTime: new Date(),
          messageuuid: crypto.randomUUID(),
          message: webchat_message,
        };

        webchat_incoming_animation.set(false);
        addMessage(messageObject);
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
      callback();
    })

    socket.on("disconnect", () => {
      console.log("___Stubber Webchat disconnected from server");
    });

    socket.on("error", (data) => {
      console.log("__Stubber Webchat error : " + data?.error);
    });

    socket.on("webchat_session", (data) => {
      if (WEBCHAT_CONFIGURATION.sessionuuid == '') {
        WEBCHAT_CONFIGURATION.sessionuuid = data.sessionuuid
      }
    });
  }

  return socket;
};

export const sendMessage = async (message) => {
  if (!socket) {
    connectSocket();
  }

  let previous_direction = "in";

  if (messages.length > 0) {
    previous_direction = messages[messages.length - 1].direction;
  }

  let messageObject = {
    direction: "out",
    previous_direction,
    sent: false,
    received: false,
    dateTime: new Date(),
    messageuuid: crypto.randomUUID(),
    message,
  };

  addMessage(messageObject);
  webchat_incoming_animation.set(true);

  if (!socket) {
    messages_pending = true;
    connectSocket();
    return;
  }


  if (socket.connected) {
    await socket.emit("message", {
      webchat_configuration: WEBCHAT_CONFIGURATION,
      webchat_message: {
        type: "text",
        value: messageObject.message,
        messageuuid: messageObject.messageuuid,
      },
    });
    messageObject.received = true;
  }
};

export const sendClientConfig = async (contact_point) => {
  if (!socket) {
    connectSocket();
  }

  if (socket.connected) {
    let PLATFORM_NAME = "";

    let platform_name_subscription = platform_name.subscribe(async platform_name => {
      PLATFORM_NAME = platform_name
    });

    platform_name_subscription();

    await socket.emit("client_configuration", {
      webchat_configuration: WEBCHAT_CONFIGURATION,
      webchat_client_configuration: {
        platform_switch: {
          platform_name: PLATFORM_NAME,
          type: contact_point.type,
          value: contact_point.contact
        }
      }
    });
  }
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};