// messageStore.js
import { writable } from 'svelte/store';

// Initialize the store with an empty array
export const messages = writable([]);

// Function to add a new message
export const addMessage = (newMessage) => {
    messages.update(currentMessages => [...currentMessages, newMessage]);
};

// Function to clear all messages
export const clearMessages = () => {
    messages.set([]);
};
