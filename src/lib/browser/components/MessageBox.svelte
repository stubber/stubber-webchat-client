<script>
  import { onDestroy, onMount } from "svelte";
  import DOMPurify from "dompurify";
  import CheckDoubleRegular from "$/lib/icons/check-double-regular.svelte";
  import { marked } from "marked";
  import { messages } from "$/lib/stores/messageStore.js";

  let timeFormat = (dateTime) => {
    let hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");

    const am_pm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return hours + ":" + minutes + " " + am_pm;
  };

  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
    }
    if (
      !node.hasAttribute("target") &&
      (node.hasAttribute("xlink:href") || node.hasAttribute("href"))
    ) {
      node.setAttribute("xlink:show", "new");
    }
  });


  let autoScroll = () => {
    // this is dirty i feel like there is a cleaner way to do this
    // however the latest message wont be received if the scroll is moved after a message is sent
    // i have to auto scroll when an element is created
    setTimeout(() => {
      let host = document.querySelector("stubber-webchat");
      let message_box = host.shadowRoot.getElementById(
        "stubber_webchat_message_box",
      );
      message_box.scrollTop = message_box.scrollHeight;
    }, 100);
  };

  let autoScrollSubcribe;

  onMount(() => {
    autoScrollSubcribe = messages.subscribe(autoScroll);
  });

  onDestroy(() => {
    autoScrollSubcribe();
  });

</script>

<div
  class="p-4 overflow-y-auto flex-grow hide-scrollbar"
  id="stubber_webchat_message_box"
>
  {#each $messages as messageObject}
    {#if messageObject.direction == "in"}
      <div class="mb-2 mr-10 flex flex-col">
        {#if messageObject.previous_direction == "out" || !messageObject.previous_direction}
          <p class="m-auto mx-2 text-sm">Agent</p>
        {/if}
        <div class="bg-gray-200 rounded-lg py-2 px-4 flex flex-col">
          {#if messageObject.message.type == "markdown"}
            {@html DOMPurify.sanitize(
              marked(messageObject.message.value.trim()),
            )}
          {/if}
          {#if messageObject.message.type == "text"}
            <p class="">{messageObject.message.value}</p>
          {/if}
          <p class="text-sm ml-auto">
            {timeFormat(messageObject.dateTime)}
          </p>
        </div>
      </div>
    {/if}
    {#if messageObject.direction == "out"}
      <div class="mb-2 ml-10 text-right flex flex-col">
        <p class="m-auto mx-2 text-sm">You</p>
        <div class="bg-gray-200 rounded-lg py-2 px-4 flex flex-col">
          <p class="">{messageObject.message}</p>
          <div class="flex w-full">
            <p class="text-sm ml-auto mr-2">
              {timeFormat(messageObject.dateTime)}
            </p>
            <span
              class="w-3 my-auto bg-red"
              class:stubber_webchat_message_tick_received={messageObject.received}
              class:stubber_webchat_message_tick_pending={!messageObject.received}
            >
              <CheckDoubleRegular />
            </span>
          </div>
        </div>
      </div>
    {/if}
  {/each}
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Tailwind CSS with @apply */
  .hide-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  /* Tailwind CSS with @apply */
  .hide-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  
</style>
