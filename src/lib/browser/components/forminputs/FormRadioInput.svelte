<script>
  import { onMount } from "svelte";
  export let label;
  export let name;
  export let value;
  export let options;

  onMount(() => {
    if (!value) {
      value = options[0].value;
    }
  });
</script>

<div class="flex flex-col w-full space-y-2 text-surface-900">
  {#if label}
    <label for="input_${name}" class="block text-label">
      {label}
    </label>
  {/if}
  <fieldset
    class="group flex flex-col border-0 rounded-md px-2 py-1 ring-1 ring-surface-300 ring-inset focus-within:ring-primary-400 focus-within:ring-2"
    id="input_${name}"
  >
    {#each options as option}
      <div class="py-1">
        <input
          id="input_${option.value}"
          {name}
          bind:group={value}
          type="radio"
          value={option.value}
        />
        <label for="input_${option.value}" class="text-field">{option.label}</label>
      </div>
    {/each}
  </fieldset>
</div>
