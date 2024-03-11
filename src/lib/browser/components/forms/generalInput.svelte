<script>
  import Form from "../Form.svelte";
  import FormTelInput from "../forminputs/FormTelInput.svelte";
  import FormTextInput from "../forminputs/FormTextInput.svelte";

  export let submit; // function
  export let contactPointType;

  //components
  let shell;

  let stubber_pbx_extention;
  let stubber_pbx_name;
  let stubber_pbx_uuid;

  let slack_workspace_name;
  let slack_Id;

  let microsoft_teams_channel_id;

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;
  let slackRegex = /^[A-Z0-9]{11,11}$/;
  let teamsRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

  let isSaving;

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
      />
    {:else if contactPointType == "mobile"}
      <FormTelInput name="contact" label="Cellphone Number" />
    {:else if contactPointType == "office"}
      <FormTelInput name="contact" label="Office Telephone Number" />
    {:else if contactPointType == "stubber_pbx_ext"}
      <FormTextInput bind:value={stubber_pbx_extention} label="PBX Extension" />
      <FormTextInput bind:value={stubber_pbx_name} label="PBX Name" />
      <FormTextInput bind:value={stubber_pbx_uuid} label="PBX UUID" />
      <input
        type="hidden"
        name="contact"
        value={`${stubber_pbx_extention}:${stubber_pbx_name}|${stubber_pbx_uuid}`}
      />
    {:else if contactPointType == "pbx_ext"}
      <FormTextInput name="contact" label="PBX Extension" />
    {:else if contactPointType == "slack"}
      <FormTextInput
        bind:value={slack_workspace_name}
        label="Slack workspace name"
        tooltipText="Your workspace name is displayed in menus and headings throughout Slack"
      />
      <FormTextInput
        bind:value={slack_Id}
        label="Channel ID or User ID"
        regex={slackRegex}
        validationMessage="Invalid Id"
      />
      <input
        type="hidden"
        name="contact"
        value={`${slack_workspace_name}:${slack_Id}`}
      />
    {:else if contactPointType == "microsoft_teams"}
      <FormTextInput
        bind:value={microsoft_teams_channel_id}
        label="Channel ID"
        regex={teamsRegex}
      />
      <input
        type="hidden"
        name="contact"
        value={`${microsoft_teams_channel_id}`}
      />
    {/if}
    {#if contactPointType}
      <div class="flex flex-row space-x-2 items-center">
        <button
          type="submit"
          class="w-32 h-10 transition duration-300 my-2 mx-auto bg-gray-300 rounded-xl stubber_webchat_chat_button"
        >
          Submit
        </button>
      </div>
    {/if}
  </div>
</Form>
