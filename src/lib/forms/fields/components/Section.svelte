<script>
  import _ from "lodash-es";
  import Field from "$/lib/forms/Field.svelte";
  import * as utils from "$/lib/forms/utils/index.js";

  export let form;
  export let field;

  let collapsed = $field.spec?.params?.collapsed ?? false;

  $: state_key = $field?.state?.state_key;
  $: label = $field?.spec?.title;
  $: hide_label = $field?.spec?.hide_label;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: collapsible = $field.spec?.params?.collapsible ?? false;
  $: fields = utils.getFieldsToRender($field.spec?.fields);
  $: allChildrenConditionsChecked = Object.values($form?.state || {})
    ?.filter((s) => s && s.parent_field_state_key === state_key)
    ?.reduce((acc, child_state) => {
      if (!child_state?.conditions_checked) acc = false;
      return acc;
    }, true);

  function toggleCollapsed() {
    collapsed = !collapsed;
  }
</script>

<div class={!allChildrenConditionsChecked ? "invisible absolute" : ""}>
  <div class="flex flex-col w-full text-surface-900">
    <button
      disabled={!collapsible}
      type="button"
      class="{collapsible ? 'hover:bg-surface-100' : ''} flex items-center justify-between"
      on:click={toggleCollapsed}
    >
      <label for="input_{state_key}" class="block text-label {hide_label ? 'hidden' : ''}">
        {label}
      </label>
      {#if collapsible}
        <i class="fa-regular {collapsed ? 'fa-angle-down' : 'fa-angle-up'} text-surface-500 mr-2" />
      {/if}
    </button>
    <div class={collapsed ? "absolute invisible" : ""}>
      {#if fields}
        {#each fields as initial_field_spec (initial_field_spec.__key)}
          <Field {form} {initial_field_spec} parent_field={field} />
        {/each}
      {/if}
    </div>
    {#if validationMessage}
      <p class="text-label {!isValid ? `text-danger-500` : `text-success-500`}">
        {validationMessage}
      </p>
    {/if}
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import "../../../../app.css";
</style>