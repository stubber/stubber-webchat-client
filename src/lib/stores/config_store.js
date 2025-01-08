// messageStore.js
import { writable } from "svelte/store";

export const fullscreen = writable(false); //state
export const fullscreen_toggle = writable(false); //config
export const links_open_in_new_tab = writable(true); //config

export const powered_by_enabled = writable(true); //config
export const open_webchat_button_config = writable({}) //config

export const switching_opened = writable(false); //state

export const switch_whatsapp = writable(false); //config
export const switch_sms = writable(false); //config
export const switch_email = writable(false); //config

export const switch_submit = writable(false); //state

export const webchat_incoming_animation = writable(true); //state

export const voicenote_enable = writable(false); //config
export const files_enable = writable(false); //config

export const platform_name = writable("whatsapp"); //state
export const contact_point_type = writable("mobile"); //state
export const default_country_code = writable("US"); //state

export const webchat_agent_name = writable("Agent"); //config

export const openWebchat = () => {
  webchat_enable.set(true);
  webchat_opened.set(true);
};

export const openSwitching = (platform, type) => {
  platform_name.set(platform);
  contact_point_type.set(type);
  switching_opened.set(true);
};

export const webchat_state = writable({
  debug: {
    enabled: false
  },
  webchat_enabled: false,
  webchat_opened: false,
  fullscreen: false,
  switching_opened: false,
  switch_submit: false,
  platform_name: "whatsapp",
  contact_point_type: "mobile",
  default_country_code: "US",
  messages: []
})

export const webchat_config = writable({
  fullscreen_toggle: false,
  links_open_in_new_tab: true,
  powered_by_enabled: true,
  open_webchat_button_config: {},
  switch_whatsapp: false,
  switch_sms: false,
  switch_email: false,
  voicenote_enabled: false,
  files_enabled: false,
  webchat_agent_name: "Agent",
  chat_display_name: "Chat"
});
