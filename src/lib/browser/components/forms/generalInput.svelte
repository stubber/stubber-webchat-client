<script>
  import Form from "../Form.svelte";
  import FormTelInput from "../forminputs/FormTelInput.svelte";
  import FormTextInput from "../forminputs/FormTextInput.svelte";

  export let submit; // function
  export let contactPointType;

  //components
  let isError;
  let formValue;

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;

  async function handleSubmit() {
    let isSaving = true;
    const formData = new FormData(this);
    let contactPoint = {
      contact: formData.get("contact").trim(),
      // type: formData.get("type").trim(),
      type: contactPointType
    };
    await submit(contactPoint);
    isSaving = false;
  }
</script>

<Form on:submit={handleSubmit}>
  <div class="w-full md:w-110 space-y-5">
    {#if contactPointType == "email"}
      <FormTextInput
        name="contact"
        label="Email Address"
        regex={emailRegex}
        validationMessage="Invalid Email"
        bind:isError={isError}
        bind:value={formValue}
      />
    {:else if contactPointType == "mobile"}
      <FormTelInput name="contact" label="Cellphone Number" bind:isError={isError} bind:value={formValue}/>
    {/if}
    {#if contactPointType}
      <div class="flex flex-row space-x-2 items-center">
        <button
          type="submit"
          class="w-32 h-10 transition duration-300 my-2 mx-auto bg-gray-300 rounded-xl stubber_webchat_chat_button"
          disabled={isError || !formValue}
        >
          Submit
        </button>
      </div>
    {/if}
  </div>
</Form>
