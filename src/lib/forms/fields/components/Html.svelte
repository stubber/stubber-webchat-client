<script>
  import _ from "lodash-es";

  export let field;

  $: html = $field?.spec?.params?.html;
</script>

<div class="w-full">
  {#if html}
    {@html html}
  {/if}
</div>
