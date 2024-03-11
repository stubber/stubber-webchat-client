<script>
  import { tick } from "svelte";

  export let autoFocus = true;

  async function init(el) {
    await tick();
    if (autoFocus) {
      focusFirstInput(el);
    }
  }

  function focusFirstInput(el) {
    let inputElements = Array.from(el.elements).filter(
      (el) =>
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA") &&
        el.type !== "hidden" &&
        !el.disabled &&
        !el.readOnly
    );
    inputElements[0]?.focus();
  }
</script>

<form on:submit|preventDefault on:focusout use:init>
  <slot />
</form>
