<script>
  import WindowMinimizeRegular from "$/lib/icons/window-minimize-regular.svelte";
  import WindowMaximizeRegular from "$/lib/icons/window-maximize-regular.svelte";
  import WindowRestoreRegular from "$/lib/icons/window-restore-regular.svelte";
  import CircleXMarkRegular from "$/lib/icons/circle-xmark-regular.svelte";
  import {
    webchat_enable,
    fullscreen,
    fullscreen_toggle,
  } from "$/lib/stores/config_store.js";

  export let chat_display_name;
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
  <div class="mt-auto">
    <button
      class="rounded-md w-5 mx-1"
      on:click={() => {
        webchat_enable.set(false);
      }}
    >
      <div class="w-5 h-5 fill-white my-auto">
        <span class="rotate-45">
          {#if $fullscreen_toggle}
            <WindowMinimizeRegular />
          {/if}
          {#if !$fullscreen_toggle}
            <CircleXMarkRegular />
          {/if}
        </span>
      </div>
    </button>
    {#if $fullscreen_toggle}
      <button
        class="rounded-md w-5 mx-1"
        on:click={() => {
          let ifuckinghatesubscriptions;

          fullscreen.subscribe((fullscreen_value) => {
            ifuckinghatesubscriptions = fullscreen_value;
          })();

          fullscreen.set(!ifuckinghatesubscriptions);
        }}
      >
        <div class="h-5 fill-white my-auto">
          <span>
            {#if $fullscreen}
              <WindowRestoreRegular />
            {/if}
            {#if !$fullscreen}
              <WindowMaximizeRegular />
            {/if}
          </span>
        </div>
      </button>
    {/if}
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
