<script>
  import CircleXMarkRegular from "$/lib/icons/circle-xmark-regular.svelte";
  import { webchat_enable, fullscreen } from "$/lib/stores/config_store.js";

  export let chat_display_name;
</script>

<div
  class="pl-4 p-3 border-b rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"
>
  <p class="text-2xl font-semibold stubber_webchat_text">
    {!chat_display_name ? "" : chat_display_name}
  </p>
  <button
    class="rounded-md w-5 mx-1"
    on:click={() => {
      webchat_enable.set(false);
    }}
  >
    <div class="w-5 h-5 fill-white my-auto">
      <span class="rotate-45">
        <CircleXMarkRegular />
      </span>
    </div>
  </button>
</div>

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
