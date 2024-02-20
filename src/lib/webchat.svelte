<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "none", 
  }}
/>

<script>
  import Webchat from "./chat/webchat.svelte";
  import "../app.css";

  export let orguuid;
  export let chatname;
  export let connectOnLoad;

  let webchatEnable = false;
</script>

{#if !webchatEnable}
  <button class="stubber_webchat_enable_button" id="stubber_webchat_enable_button" on:click={() => webchatEnable = true }>
    Chat
  </button>
{/if}
{#if webchatEnable}
  <Webchat orguuid={orguuid} chatname={chatname} connectOnLoad={connectOnLoad}/>
{/if}