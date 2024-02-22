<svelte:options
  customElement={{
    tag: "stubber-webchat",
    shadow: "none", 
  }}
/>

<script>
  import Webchat from "./chat/webchat.svelte";

  export let orguuid;
  export let chatname;
  export let connectOnLoad;

  let webchatEnable = false;

  console.log("stubber webchat v1.0.9")
</script>

<svelte:head>
  <style>
      @import "../app.css";
  </style>
</svelte:head>

{#if !webchatEnable}
  <button class="stubber_webchat_enable_button" on:click={() => webchatEnable = true }>
    Chat
  </button>
{/if}
{#if webchatEnable}
  <Webchat orguuid={orguuid} chatname={chatname} connectOnLoad={connectOnLoad}/>
{/if}