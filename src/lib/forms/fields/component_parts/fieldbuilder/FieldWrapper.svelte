<script>
  // fieldWrapper
  export let fieldcomponent;
</script>

<div class="mb-2">
  <svelte:component this={fieldcomponent} {...$$props} />
</div>
