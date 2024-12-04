<script>
  import WindowMinimizeRegular from "$/lib/icons/window-minimize-regular.svelte";
  import WindowMaximizeRegular from "$/lib/icons/window-maximize-regular.svelte";
  import WindowRestoreRegular from "$/lib/icons/window-restore-regular.svelte";
  import CircleXMarkRegular from "$/lib/icons/circle-xmark-regular.svelte";
  import Fullscreen from "../../icons/fullscreen.svelte";
  import ArrowDownSolid from "../../icons/arrow-down-solid.svelte";
  import TicketSolid from "$/lib/icons/ticket-solid.svelte";
  import {
    webchat_enable,
    fullscreen,
    fullscreen_toggle,
    webchat_state
  } from "$/lib/stores/config_store.js";
  const STUBBER_SQUARED_URL = import.meta.env.VITE_WEBCHAT_STUBBER_SQUARED_URL;

  export let chat_display_name;

  let debug = false
  let stubref;

  webchat_state.subscribe((current_webchat_state) => {
    if (current_webchat_state.debug.enabled) {
      debug = true;
      if (current_webchat_state.debug?.server?.stubref) {
        stubref = current_webchat_state.debug.server.stubref;
      }
    }
  });
</script>

{#if ($fullscreen && $fullscreen_toggle) || !$fullscreen}
  <div
    class={$fullscreen
      ? "pl-4 p-3 border-b flex justify-between items-center h-15 stubber_webchat_top_box"
      : "pl-4 p-3 border-b rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"}
  >
    <p class="text-2xl font-semibold stubber_webchat_text">
      {!chat_display_name ? "" : chat_display_name}
    </p>
    <div class="flex">
      {#if debug && stubref}
      <a
        class="h-5 mx-2 flex"
        href={`${STUBBER_SQUARED_URL}/s/${stubref}`}
        target="_blank"
      >
        <span class="w-5 flex my-auto fill-white">
          <TicketSolid />
        </span>
      </a>
    {/if}
      {#if $fullscreen_toggle}
        <button
          class="h-5 mx-2 flex"
          on:click={() => {
            let ifuckinghatesubscriptions;

            fullscreen.subscribe((fullscreen_value) => {
              ifuckinghatesubscriptions = fullscreen_value;
            })();

            fullscreen.set(!ifuckinghatesubscriptions);
          }}
        >
          <span class="w-4 flex my-auto">
            {#if $fullscreen}
              <WindowRestoreRegular />
            {/if}
            {#if !$fullscreen}
              <Fullscreen />
            {/if}
          </span>
        </button>
      {/if}
      <button
        class="rounded-md h-5 flex mx-2"
        on:click={() => {
          webchat_enable.set(false);
        }}
      >
        <span class="flex my-auto w-4">
          <ArrowDownSolid />
        </span>
      </button>
    </div>
  </div>
{/if}

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .stubber_webchat_top_box {
    background-color: var(--primary-color);
    background: var(--background, var(--primary-color));
    color: var(--background-color);
  }

  .stubber_webchat_text {
    color: var(--text-color, white);
  }
</style>
