<script>
  import { createPopperActions } from "svelte-popperjs";
  export let placement = "top";

  let popperRef, popperContent;

  $: {
    [popperRef, popperContent] = createPopperActions({
      placement: placement,
    });
  }

  const extraOpts = {
    modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
  };

  let showTooltip = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  use:popperRef
  on:mouseenter={() => (showTooltip = true)}
  on:mouseleave={() => (showTooltip = false)}
  on:click={() => {
    showTooltip = false;
    setTimeout(() => {
      showTooltip = true;
    }, 0);
  }}
>
  <slot name="subject" />
</div>
{#if showTooltip}
  <div
    id="tooltip"
    class="z-10 bg-surface-900 rounded text-white p-1 px-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]"
    data-popper-placement={placement}
    use:popperContent={extraOpts}
  >
    <span class="text-label">
      <slot name="tooltip" />
    </span>
    <div id="arrow" class="arrow absolute w-0 h-0" />
  </div>
{/if}

<style>
  #tooltip[data-popper-placement^="top"] > .arrow {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--surface-900);
    bottom: -5px;
    left: calc(50% - 5px);
  }

  #tooltip[data-popper-placement^="bottom"] > .arrow {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--surface-900);
    top: -5px;
    left: calc(50% - 5px);
  }

  #tooltip[data-popper-placement^="left"] > .arrow {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid var(--surface-900);
    right: -5px;
    top: calc(50% - 5px);
  }

  #tooltip[data-popper-placement^="right"] > .arrow {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid var(--surface-900);
    left: -5px;
    top: calc(50% - 5px);
  }
</style>
