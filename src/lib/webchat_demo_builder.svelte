<svelte:options
  customElement={{
    tag: "stubber-webchat-demo-builder",
    shadow: "none",
  }}
/>

<script>
  import { onMount } from "svelte";
  import page from "page";

  let demo_name = "Demo";
  let demo_description = "Demo description";

  let webchat_orguuid = import.meta.env.VITE_WEBCHAT_ORGUUID;
  let webchat_chat_name = import.meta.env.VITE_WEBCHAT_CHAT_NAME;
  let webchat_connect_on_open = import.meta.env.VITE_WEBCHAT_CONNECT_ON_OPEN;
  let webchat_open_on_mount = import.meta.env.VITE_WEBCHAT_OPEN_ON_MOUNT;
  let webchat_pass_through_data = import.meta.env.VITE_WEBCHAT_PASS_THROUGH_DATA;
  let webchat_chat_display_name = import.meta.env.VITE_WEBCHAT_CHAT_DISPLAY_NAME;

  let webchat_css_primary_color_r = 0;
  let webchat_css_primary_color_g = 0;
  let webchat_css_primary_color_b = 0;

  let webchat_demo_text_copied = false;

  onMount(() => {
    console.log("___Stubber Webchat Demo Builder Mounted");

    page("/v2/demo/builder", apply_params_on_load);

    page();

    save_params();
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

    page.replace(`/v2/demo/builder?${queryString}`);
  };

  const copy_demo_link = () => {
    const webchat_demo_params = build_demo_params();

    const queryString = new URLSearchParams({
      webchat_demo_settings_base64: btoa(JSON.stringify(webchat_demo_params)),
    }).toString();

    navigator.clipboard.writeText(
      `${window.location.origin}/v2/demo?${queryString}`,
    );
    webchat_demo_text_copied = true;
  };

  const open_demo_link = () => {
    const webchat_demo_params = build_demo_params();

    const queryString = new URLSearchParams({
      webchat_demo_settings_base64: btoa(JSON.stringify(webchat_demo_params)),
    }).toString();
    page.show(`/v2/demo?${queryString}`);
  };
</script>

<svelte:head>
  <script type="module" src="/v2/client/index.js"></script>
</svelte:head>

<div class="flex flex-col">
  <div class="text-center w-full px-5 py-auto my-2">
    <p class="text-black text-4xl">Webchat Demo Builder</p>
  </div>

  <div class="border w-full p-5 flex flex-col">
    <p class="text-black text-3xl px-auto mb-2">Demo Parameters</p>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">Demo Name</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={demo_name}
        on:change={() => {
          save_params();
        }}
      />
    </div>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">Demo Description</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={demo_description}
        on:change={() => {
          save_params();
        }}
      />
    </div>
  </div>

  <div class="border w-full p-5 flex flex-col">
    <p class="text-black text-3xl px-auto mb-2">Webchat Parameters</p>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">orguuid</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_orguuid}
        on:change={() => {
          save_params();
        }}
      />
    </div>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">chat_name</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_chat_name}
        on:change={() => {
          save_params();
        }}
      />
    </div>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">connect_on_open</p>
      <input
        class="w-4 border-grey-200 px-2 border h-10"
        autocomplete="off"
        type="checkbox"
        bind:checked={webchat_connect_on_open}
        on:change={() => {
          save_params();
        }}
      />
    </div>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">open_on_mount</p>
      <input
        class="w-4 border-grey-200 px-2 border h-10"
        autocomplete="off"
        type="checkbox"
        bind:checked={webchat_open_on_mount}
        on:change={() => {
          save_params();
        }}
      />
    </div>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">pass_through_data</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_pass_through_data}
        on:change={() => {
          save_params();
        }}
      />
    </div>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">chat_display_name</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_chat_display_name}
        on:change={() => {
          save_params();
        }}
      />
    </div>
  </div>

  <div class="border w-full p-5 flex flex-col">
    <p class="text-black text-2xl px-auto mb-2">Webchat CSS</p>

    <div class="mb-2">
      <p class="text-black text-1xl px-auto">Primary colour</p>
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_css_primary_color_r}
        on:change={() => {
          save_params();
        }}
      />
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_css_primary_color_g}
        on:change={() => {
          save_params();
        }}
      />
      <input
        class="w-full border-grey-200 px-2 border h-10"
        autocomplete="off"
        bind:value={webchat_css_primary_color_b}
        on:change={() => {
          save_params();
        }}
      />
    </div>
  </div>

  <div class="border w-full p-5 flex-col justify-start">
    <div class="mb-2 mx-2">
      <button
        on:click={() => {
          window.location.reload();
        }}
      >
        <p class="text-white text-xl px-auto bg-gray-500 p-2 rounded-sm w-64">
          Reload webchat
        </p>
      </button>
    </div>

    <div class="mb-2 mx-2">
      <button
        on:click={() => {
          copy_demo_link();
        }}
      >
        <p
          id="demo_copy_button_text"
          class="text-white text-xl px-auto bg-gray-500 p-2 rounded-sm w-64"
        >
          {#if !webchat_demo_text_copied}
            Copy demo link
          {/if}
          {#if webchat_demo_text_copied}
            Copied
          {/if}
        </p>
      </button>
    </div>
    

    <div class="mb-2 mx-2">
      <button
        on:click={() => {
          open_demo_link();
        }}
      >
        <p class="text-white text-xl px-auto bg-gray-500 p-2 rounded-sm w-64">
          Open demo page
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
