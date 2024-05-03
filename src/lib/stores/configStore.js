// messageStore.js
import { writable } from 'svelte/store';

export const switching_opened = writable(false);
export const switch_whatsapp = writable(false);
export const switch_sms = writable(false);
export const switch_email = writable(false);
export const switch_submit = writable(false);

export const webchat_enable = writable(false);
export const webchat_opened = writable(false);
export const webchat_incoming_animation = writable(true);

export const voicenote_enable = writable(false);
export const files_enable = writable(false);

export const platform_name = writable("whatsapp");
export const contact_point_type = writable("mobile");
export const default_country_code = writable("US");

export const webchat_agent_name = writable("Agent");

export const openWebchat = () => {
    webchat_enable.set(true);
    webchat_opened.set(true);
};

export const openSwitching = () => {
    switching_opened.set(true);
}