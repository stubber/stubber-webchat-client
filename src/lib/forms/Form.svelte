<script>
  import { setContext } from "svelte";
  import * as utils from "$/lib/forms/utils/index.js";
  import _ from "lodash-es";
  import Field from "./Field.svelte";
  import NullFieldWrapper from "./NullFieldWrapper.svelte";
  import { deepEqual } from "fast-equals";

  export let initial_form = {};
  export let form = null;
  export let field_wrapper = null;
  export let dependencies = null;

  form = utils.createForm({ dependencies, form });
  setContext("stubber-form-fields-default-wrapper", field_wrapper || NullFieldWrapper);

  let debounceRenderForm = utils.debounce(renderForm, 50);
  $: debounceRenderForm(initial_form);
  function renderForm(v) {
    if (!deepEqual($form?.initial_form, v)) form.initialize(v);
  }

  $: fields = utils.getFieldsToRender($form?.root_spec?.fields);
</script>

{#if $form?.render_index}
  {#key $form?.render_index}
    {#if fields}
      {#each fields as initial_field_spec (initial_field_spec.__key)}
        <Field {form} {initial_field_spec} />
      {/each}
    {/if}
  {/key}
{/if}

