<svelte:options
  customElement={{
    tag: "stubber-webchat-demo",
    shadow: "none",
  }}
/>

<script>
  import { onMount } from "svelte";
  import page from "page";

  let demo_name = "Dev Test";
  let demo_description = "Dev Test";
  
  let webchat_orguuid = "96305d53-2fb0-512d-9d59-3f2b03aa679a";
  let webchat_chat_name = "documentationexample";
  let webchat_connect_on_open = true;
  let webchat_open_on_mount = false;
  let webchat_pass_through_data = "{'some':'data'}";
  let webchat_chat_display_name = "Demo Test";

  let webchat_css_primary_color_r = 0;
  let webchat_css_primary_color_g = 0;
  let webchat_css_primary_color_b = 0;

  let webchat_demo_text_copied = false;

  onMount(() => {
    console.log("___Stubber Webchat Demo Mounted");

    page("/v2/demo", apply_params_on_load);

    page();
  });

  const apply_params_on_load = (context) => {
    const query_params = new URLSearchParams(context.querystring);

    const webchat_demo_settings_base64 = query_params.get(
      "webchat_demo_settings_base64",
    );
    if (webchat_demo_settings_base64) {
      let temp_params;
      try {
        temp_params = JSON.parse(atob(webchat_demo_settings_base64));

        demo_name = temp_params?.demo_params?.demo_name;
        demo_description = temp_params?.demo_params?.demo_description;

        webchat_orguuid = temp_params?.webchat_params?.orguuid;
        webchat_chat_name = temp_params?.webchat_params?.chat_name;
        webchat_connect_on_open = temp_params?.webchat_params?.connect_on_open;
        webchat_open_on_mount = temp_params?.webchat_params?.open_on_mount;
        webchat_pass_through_data =
          temp_params?.webchat_params?.pass_through_data;
        webchat_chat_display_name =
          temp_params?.webchat_params?.chat_display_name;

        webchat_css_primary_color_r =
          temp_params?.webchat_css?.webchat_css_primary_color_r;
        webchat_css_primary_color_g =
          temp_params?.webchat_css?.webchat_css_primary_color_g;
        webchat_css_primary_color_b =
          temp_params?.webchat_css?.webchat_css_primary_color_b;

        document.documentElement.style.setProperty(
          "--primary-color",
          `rgb(${webchat_css_primary_color_r},${webchat_css_primary_color_g},${webchat_css_primary_color_b})`,
        );
      } catch (e) {
        console.error(e.toString());
      }
    }
  };

  const build_demo_params = () => {
    return {
      demo_params: {
        demo_name,
        demo_description,
      },
      webchat_params: {
        orguuid: webchat_orguuid,
        chat_name: webchat_chat_name,
        connect_on_open: webchat_connect_on_open,
        open_on_mount: webchat_open_on_mount,
        pass_through_data: webchat_pass_through_data,
        chat_display_name: webchat_chat_display_name,
      },
      webchat_css: {
        webchat_css_primary_color_r,
        webchat_css_primary_color_g,
        webchat_css_primary_color_b,
      },
    };
  };

  const save_params = () => {
    const webchat_demo_params = build_demo_params();

    document.documentElement.style.setProperty(
      "--primary-color",
      `rgb(${webchat_css_primary_color_r},${webchat_css_primary_color_g},${webchat_css_primary_color_b})`,
    );

    const queryString = new URLSearchParams({
      webchat_demo_settings_base64: btoa(JSON.stringify(webchat_demo_params)),
    }).toString();

    page.replace(`/v2/demo?${queryString}`);
  };

  const open_demo_builder_link = () => {
    const webchat_demo_params = build_demo_params();

    const queryString = new URLSearchParams({
      webchat_demo_settings_base64: btoa(JSON.stringify(webchat_demo_params)),
    }).toString();
    page.show(`/v2/demo/builder?${queryString}`);
  };
</script>

<svelte:head>
  <script type="module" src="/v2/client/index.js"></script>
</svelte:head>

<div class="flex flex-col">
  <div class="text-center w-full px-5 py-auto my-2">
    <p class="text-black text-4xl">{demo_name}</p>
  </div>
  <div class="text-center w-full px-5 py-auto my-2 border-grey-200 border">
    <p class="text-black text-2xl">{demo_description}</p>
  </div>

  <div class="border w-full p-5 flex">
    <div class="mb-2 mx-auto">
      <button
        on:click={() => {
          open_demo_builder_link()
        }}
      >
        <p class="text-white text-xl px-auto bg-gray-500 p-2 rounded-sm w-64">
          Edit demo
        </p>
      </button>
    </div>
  </div>

  <stubber-webchat
    orguuid={webchat_orguuid}
    chat_name={webchat_chat_name}
    connect_on_open={webchat_connect_on_open}
    open_on_mount={webchat_open_on_mount}
    pass_through_data={webchat_pass_through_data}
    chat_display_name={webchat_chat_display_name}
  >
  </stubber-webchat>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  stubber-webchat::part(host) {
    /* --background: linear-gradient(to right, white , grey); */
    /* --primary-color: black; */
    /* --primary-color: rgb(66, 210, 9); */
    /* --border-color: none; */
    /* --text-color: black; */
  }
</style>
