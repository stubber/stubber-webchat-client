import io from "socket.io-client";
import { addMessage, messages } from "../stores/messageStore";
import { switch_whatsapp, switch_email, switch_sms } from "$/lib/stores/configStore.js";
import { platform_name, webchat_incoming_animation } from "../stores/configStore";

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
      console.log("___Connected to server");

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

      // if (message.length > 0) {
      //   sendMessage();
      // }
    });

    socket.on("webchat_message", (data) => {
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
        message: data.webchat_message,
      };

      webchat_incoming_animation.set(false);
      addMessage(messageObject);
    });

    socket.on("webchat_client_configuration", (data) => {
      let settings = Object.keys(data);

      settings.forEach((key) => {
        if (data[key].type == "switching") {
          switch_whatsapp.set(data[key]?.value?.whatsapp);
          switch_sms.set(data[key]?.value?.sms);
          switch_email.set(data[key]?.value?.email);
        }
      });
    });

    socket.on("disconnect", () => {
      console.log("___Disconnected from server");
    });

    socket.on("error", (data) => {
      console.log("__Stubber Webchat : " + data?.error);
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
    return;
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

  console.log("___Sending Config", contact_point);

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