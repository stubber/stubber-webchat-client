<script>
  import _ from "lodash-es";

  // fieldWrapper
  export let field;
  export let fieldcomponent;
  export let parent_field;

  function removeEntry() {
    let field_index = parseInt($field.spec?.__key);
    // update the parent field
    let parent_data = _.cloneDeep($parent_field?.data?.base);
    if (_.isArray(parent_data)) {
      parent_data = parent_data.slice(0, field_index).concat(parent_data.slice(field_index + 1));
    }

    parent_field.update((p) => {
      let cp = _.cloneDeep(p);
      _.set(cp, "data.base", parent_data);
      return cp;
    });
  }

  function reorder(is_move_higher) {
    let field_index = parseInt($field.spec?.__key);
    let sibling_index = field_index + (is_move_higher ? 1 : -1);

    if (sibling_index < 0 || sibling_index >= $parent_field?.data?.base?.length) return;

    // update the parent field
    let parent_data = _.cloneDeep($parent_field?.data?.base);
    if (_.isArray(parent_data)) {
      let temp = _.cloneDeep(parent_data[field_index]);
      parent_data[field_index] = _.cloneDeep(parent_data[sibling_index]);
      parent_data[sibling_index] = temp;
    }

    $parent_field.data.base = parent_data;
  }
</script>

<div class="flex items-stretch pb-6">
  <div class="relative flex-grow-0 mr-2">
    <button
      on:click={() => reorder(false)}
      type="button"
      class="flex items-center justify-center text-xl w-8 border border-dashed bg-surface-0 border-surface-300 hover:bg-surface-500 hover:text-surface-0 active:bg-surface-500 active:text-surface-0 active:border-0 rounded-t text-surface-500 h-1/2"
    >
      <i class="fa-regular fa-angle-up" />
    </button>
    <button
      on:click={() => reorder(true)}
      type="button"
      class="flex items-center justify-center text-xl w-8 border border-t-0 border-dashed bg-surface-0 border-surface-300 hover:bg-surface-500 hover:text-surface-0 active:bg-surface-500 active:text-surface-0 active:border-0 rounded-b text-surface-500 h-1/2"
    >
      <i class="fa-regular fa-angle-down" />
    </button>
  </div>
  <div class="flex-grow">
    <svelte:component this={fieldcomponent} {...$$props} field_wrapper={null} />
  </div>
  <button
    on:click={removeEntry}
    type="button"
    class="flex-grow-0 flex items-center justify-center text-xl w-8 ml-2 border border-dashed bg-surface-0 border-danger-300 hover:bg-danger-500 hover:text-surface-0 hover:border-0 active:bg-danger-500 active:text-surface-0 active:border-0 rounded text-danger-500"
  >
    <i class="fa-regular fa-xmark" />
  </button>
</div>
