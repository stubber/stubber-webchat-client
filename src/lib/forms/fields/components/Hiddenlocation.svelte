<script>
  import { deepEqual } from "fast-equals";
  import _ from "lodash-es";
  import { onMount } from "svelte";

  export let field;

  $: state_key = $field.state?.state_key;

  onMount(() => {
    navigator.geolocation.getCurrentPosition((o) => {
      let { latitude, longitude } = o?.coords || {};
      if (!latitude || !longitude) return;

      let base = {
        lat: latitude,
        lng: longitude,
        latlng: `${latitude},${longitude}`,
      };

      if (!deepEqual(base, $field.data.base)) {
        $field.data.base = base;
      }
    });
  });
</script>

<input name={state_key} bind:value={$field.data.base} hidden />
