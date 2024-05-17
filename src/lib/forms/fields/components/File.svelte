<script>
  import { onMount } from "svelte";
  import Dropzone from "svelte-file-dropzone";
  import _ from "lodash-es";
  import { deepEqual } from "fast-equals";
  import { syncStoreToStore } from "$/lib/forms/utils/syncing";
  import { writable } from "svelte/store";

  export let form;
  export let field;

  const internal = writable({});

  $: state_key = $field.state?.state_key;
  $: label = $field.spec?.title;
  $: hide_label = $field.spec?.hide_label;
  $: isValid = !$field.state?.validation || $field.state?.validation?.valid;
  $: validationMessage = $field.state?.validation?.message;
  $: max_files = isNaN(parseInt($field.spec?.params?.max_files))
    ? Infinity
    : parseInt($field.spec?.params?.max_files);
  $: limit_remaining =
    max_files - ($internal?.selected_files?.length ?? 0) - ($internal?.uploaded_files?.length ?? 0);

  onMount(() => {
    // set field values that aren't set yet
    let f = _.cloneDeep($field);
    let initial_value = _.isArray(f?.data?.base) ? f?.data?.base : [];
    let initial_data = {
      ...f?.data,
      base: initial_value,
    };
    let initial_state_internal = {
      selected_files: [],
      uploaded_files: initial_value,
      failed_files: [],
    };

    _.set(f, "data", initial_data);
    _.set(f, "state.internal", initial_state_internal);
    if (!deepEqual(f, $field)) $field = f;

    syncStoreToStore(
      field,
      internal,
      (a, b) => {
        let _clone = _.cloneDeep(a.state?.internal) || {};

        // get parts from data
        let files = _.isArray(a?.data?.base) ? a?.data?.base : [];
        _clone.uploaded_files = files;

        // set field state if changed
        if (!deepEqual(a?.state?.internal, _clone)) {
          $field.state.internal = _clone;
        }
        return _clone;
      },
      (a, b) => {
        let _clone = _.cloneDeep(a) || {};
        // update the state
        _.set(_clone, "state.internal", _.cloneDeep(b));
        // update the data
        _.set(_clone, "data.base", b?.uploaded_files);
        return _clone;
      }
    );
  });

  async function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    let comparison = _.cloneDeep($internal);
    let batch = _.cloneDeep(
      acceptedFiles.map((a) => {
        return {
          ...a,
          f_id: Math.random().toString(36).substring(7),
        };
      })
    );
    if (limit_remaining < batch.length) {
      alert("You have reached the maximum number of files allowed");
      return;
    }
    comparison.selected_files = comparison.selected_files.concat(batch);
    comparison.failed_files = comparison.failed_files.concat(_.cloneDeep(fileRejections));

    if (!deepEqual(comparison, $internal)) {
      $internal = comparison;
    }

    let upload_res = await form.uploadFiles(acceptedFiles);
    let { uploaded_files, failed_files } = upload_res;

    let comparison2 = _.cloneDeep($internal);
    if (_.isArray(uploaded_files)) {
      uploaded_files.forEach((a) => {
        a.f_id = batch.find((f) => f.path === a.filename).f_id;
        form.appendAttachment(a);
      });
      comparison2.uploaded_files = comparison2.uploaded_files.concat(uploaded_files);
    }

    if (_.isArray(failed_files)) {
      failed_files.forEach((a) => {
        a.f_id = batch.find((f) => f.path === a.filename).f_id;
      });
      comparison2.failed_files = comparison2.failed_files.concat(failed_files);
    }

    let batch_ids = batch.map((b) => b.f_id);

    comparison2.selected_files = comparison2.selected_files.filter((f) => {
      return !batch_ids.includes(f.f_id);
    });

    if (!deepEqual(comparison2, $internal)) {
      $internal = comparison2;
    }
  }

  function removeFile(item) {
    let comparison = _.cloneDeep($internal);

    comparison.selected_files = comparison.selected_files?.filter((f) => f.f_id !== item.file.f_id);
    comparison.failed_files = comparison.failed_files?.filter((f) => f.f_id !== item.file.f_id);
    comparison.uploaded_files = comparison.uploaded_files?.filter((f) => f.f_id !== item.file.f_id);

    if (!deepEqual(comparison, $internal)) {
      $internal = comparison;
    }

    if (item?.is_uploaded) {
      form.removeAttachment(item?.file);
    }
  }

  $: fileList = (
    ($internal?.uploaded_files || [])?.map((f) => {
      return {
        file: f,
        is_uploaded: true,
      };
    }) || []
  )
    .concat(
      $internal?.selected_files?.map((f) => {
        return {
          file: f,
          is_selected: true,
        };
      }) || []
    )
    .concat(
      $internal?.failed_files?.map((f) => {
        return {
          file: f,
          is_failed: true,
        };
      }) || []
    );
</script>

{#if $internal}
  <label
    for="input_{state_key}"
    class="block text-label text-surface-900 {hide_label ? 'hidden' : ''}"
  >
    {label}
  </label>
  <div class="w-full flex flex-col {!isValid ? 'border-b border-warning-500' : ''}">
    <Dropzone on:drop={handleFilesSelect} disabled={limit_remaining <= 0}>
      <div class="flex justify-center h-full flex-col text-center">
        <div>
          <p class="text-field text-surface-800">Drop files to upload</p>
          <p class="text-field text-surface-800">
            Or click <span
              class="text-primary-500 hover:text-primary-400 hover:underline cursor-pointer"
              >here</span
            >
            to browse
          </p>
          {#if limit_remaining <= 0}
            <p class="text-field text-danger-600 text-sm italic">
              You have reached the maximum number of files allowed
            </p>
          {/if}
        </div>
      </div>
    </Dropzone>
    <div class="w-full mt-2">
      {#each fileList as item}
        <div class="w-full flex flex-row">
          {#if item.is_uploaded}
            <div class="px-2">
              <i class="fa fa-check text-success-500" />
            </div>
          {:else if item.is_failed}
            <div class="px-2 space-x-2 flex items-center text-danger-400">
              <i class="fa-regular fa-triangle-exclamation" />
              <p class="hidden md:block text-fluid-md">Failed</p>
            </div>
          {:else}
            <div class="px-2 space-x-2 flex items-center text-surface-500">
              <p class="hidden md:block text-fluid-md" />
              <i class="fa fa-pulse fa-spinner" />
            </div>
          {/if}
          <div class="w-full shrink py-1 pl-2 truncate border border-surface-200 rounded-sm">
            <p class="text-surface-800 text-fluid-md">
              {item?.file?.filename ?? item?.file?.name ?? item?.file?.path}
            </p>
          </div>
          <button
            type="button"
            class="shrink-0 ml-1 p-1 px-2 fa-solid fa-2xs fa-x bg-surface-0 rounded-full border border-surface-0 hover:border-warning-500 hover:text-warning-500"
            on:click={() => {
              removeFile(item);
            }}
          />
        </div>
      {/each}
    </div>
  </div>
  {#if validationMessage}
    <p class="text-label {!isValid ? `text-danger-500` : `text-success-500`}">
      {validationMessage}
    </p>
  {/if}
{/if}
