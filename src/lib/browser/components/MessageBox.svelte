<script>
  import { onDestroy, onMount } from "svelte";
  import DOMPurify from "dompurify";
  import CheckDoubleRegular from "$/lib/icons/check-double-regular.svelte";
  import PeriodSolid from "$/lib/icons/period-solid.svelte";
  import { marked } from "marked";
  import { messages } from "$/lib/stores/messageStore.js";
  import { webchat_incoming_animation } from "$/lib/stores/configStore.js";

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

  let typingAnimationIndex = 1;

  let animateTyping = () => {
    typingAnimationIndex = typingAnimationIndex + 1;

    if (typingAnimationIndex > 3){
      typingAnimationIndex = 0;
    }

    if ($webchat_incoming_animation){
      setTimeout(() => {
        animateTyping();
      }, 250);
    }
  }

  let auto_scroll_subcribe;
  let webchat_incoming_animation_subscribe;

  onMount(() => {
    auto_scroll_subcribe = messages.subscribe(autoScroll);
    webchat_incoming_animation_subscribe = webchat_incoming_animation.subscribe(webchat_incoming_animation => {
      if (webchat_incoming_animation){
        animateTyping()
      }
    })
  });

  onDestroy(() => {
    if (auto_scroll_subcribe){
      auto_scroll_subcribe();
    }
    if (webchat_incoming_animation_subscribe){
      webchat_incoming_animation_subscribe();
    }
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
          {#if messageObject.message.type == "html"}
            <div class="font-mono">
              {@html messageObject.message.value}
            </div>
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
  {#if $webchat_incoming_animation}
    <div class="mb-2 mr-10 flex flex-col">
      <p class="m-auto mx-2 text-sm">Agent</p>
      <div class="bg-gray-200 rounded-lg py-2 px-4 flex h-10">
        {#if typingAnimationIndex >= 0}
        <span class="h-2 w-2">
          <PeriodSolid />
        </span>
        {/if}
        {#if typingAnimationIndex >= 1}
        <span class="h-2 w-2">
          <PeriodSolid />
        </span>
        {/if}
        {#if typingAnimationIndex >= 2}
        <span class="h-2 w-2">
          <PeriodSolid />
        </span>
        {/if}
      </div>
    </div>
  {/if}
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
