<script>
  import * as utils from "$/lib/forms/utils/index.js";
  import Field from "$/lib/forms/Field.svelte";

  export let form;
  export let field;

  let current_page_index = 0;

  $: state_key = $field.state?.state_key;
  $: fields = utils.getFieldsToRender($field.spec?.fields);
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: allChildrenConditionsChecked = Object.values($form?.state || {})
    ?.filter((s) => s.parent_field_state_key === state_key)
    ?.reduce((acc, child_state) => {
      if (!child_state?.conditions_checked) acc = false;
      return acc;
    }, true);
</script>

{#if fields?.length}
  <div class={!allChildrenConditionsChecked ? "invisible absolute" : ""}>
    <div class="border border-surface-200">
      <div class="p-2 py-3 overflow-x-auto whitespace-nowrap">
        <div class="flex items-center">
          {#each fields as p, i}
            <button
              type="button"
              on:click={() => (current_page_index = i)}
              class="flex items-center mr-4 {current_page_index === i
                ? 'text-surface-900'
                : 'text-surface-500'}"
            >
              <span
                class="mr-1 flex items-center justify-center w-6 h-6 rounded-full {current_page_index ===
                i
                  ? 'bg-primary-500 text-surface-0'
                  : 'bg-surface-100 text-surface-700'}"
              >
                {i + 1}
              </span>
            </button>
          {/each}
        </div>
      </div>
      {#if fields}
        {#each fields as initial_field_spec, index (initial_field_spec.__key)}
          <div
            class="p-6 border-y border-surface-200 {current_page_index !== index
              ? 'invisible absolute'
              : ''}"
          >
            <Field {form} {initial_field_spec} parent_field={field} />
          </div>
        {/each}
      {/if}
      <div class="flex items-center justify-between text-sm p-2">
        <button
          type="button"
          class="bg-surface-300 px-4 py-1 rounded text-surface-0 {current_page_index === 0
            ? 'invisible'
            : ''}"
          on:click={() => (current_page_index = current_page_index - 1)}
        >
          Back
        </button>
        <button
          type="button"
          class="bg-surface-300 px-4 py-1 rounded text-surface-0 {current_page_index >=
          fields.length - 1
            ? 'invisible'
            : ''}"
          on:click={() => (current_page_index = current_page_index + 1)}
        >
          Next
        </button>
      </div>
    </div>
    {#if validationMessage}
      <p class="text-label {!isValid ? `text-danger-500` : `text-success-500`}">
        {validationMessage}
      </p>
    {/if}
  </div>
{/if}

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import "../../../../app.css";
</style>