<script>
  import _ from "lodash-es";

  export let field;

  $: heading_text = $field?.spec?.params?.heading_text;
  $: subheading_text = $field?.spec?.params?.subheading_text;
</script>

<div class="flex flex-col w-full mb-2">
  {#if heading_text}
    <h1 class="text-xl text-surface-700 mt-4">{heading_text}</h1>
  {/if}
  {#if subheading_text}
    <h2 class="text-sm text-surface-500 whitespace-pre-wrap">{subheading_text}</h2>
  {/if}
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import "../../../../app.css";
</style>