import io from "socket.io-client";
import webchat_state from "$/lib/stores/config_store.js";

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
        SESSIONUUID = payload.sessionuuid,
        SOCKET_CONNECTION.auth.sessionuuid = payload.sessionuuid;
        console.log("applied session", payload.sessionuuid);
      }

      if (payload.config){
        // apply conifg
        
      }

      if (payload.message){
        // apply message
      }

      if (payload.control_event){
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