// messageStore.js
import { writable } from 'svelte/store';

// Initialize the store with an empty array
export const payload_messages = writable([]);
export const payload_message_attachments = writable([]);
export const payload_client_configs = writable([]);
