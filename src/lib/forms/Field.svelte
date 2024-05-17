<script>
  import { getContext, onDestroy, onMount } from "svelte";
  import * as utils from "$/lib/forms/utils/index.js";
  import _ from "lodash-es";

  export let form;
  export let initial_field_spec = null;
  export let parent_field = null;
  export let field_wrapper = null;
  export let field = null;

  const default_field_wrapper = getContext("stubber-form-fields-default-wrapper");

  let removeField;
  onMount(() => {
    let addResult = form.addField(initial_field_spec, $parent_field?.state?.state_key);
    if (addResult?.state_key) field = utils.createField(addResult?.state_key, form);
    if (addResult?.removeField) removeField = addResult?.removeField;
  });

  onDestroy(() => {
    if (removeField) removeField();
  });

  // derive the field wrapper
  $: FieldWrapper = field_wrapper || default_field_wrapper;

  // get the right svelte component
  $: fieldcomponent = utils.mapFieldToComponent($field?.spec);
</script>

{#if $field?.state?.conditions_passed}
  <div class={$field?.state?.invisible ? "invisible absolute" : ""}>
    <svelte:component this={FieldWrapper} {form} {field} {fieldcomponent} {parent_field} />
  </div>
{/if}