<script>
  import { key } from '../../../api'
  import { fade } from 'svelte/transition'
  import { getContext, onMount } from 'svelte'
  import { stores } from '@sapper/app'
  import CloudUpload from '../../../components/icons/CloudUpload.svelte'
  const { preloading, page, session } = stores()
  const api = getContext(key).functions()
  let show
  let updating = false
  let dirty = false
  let skipInitial = true
  let updater
  onMount(() => {
    updater = setInterval(updateShow, 3000)
    return () => clearInterval(updater)
  })
  // onMount(() => {
  //   api.get(`/shows/${$page.params.slug}`).then((s) => (show = s))
  // })
  const reloadShow = (slug) => {
    api.get(`/shows/${slug}`).then((s) => {
      show = s
    })
  }
  const updateShow = () => {
    if (dirty && show && show.identifier) {
      updating = true
      dirty = false
      api.put(`/shows/${show.identifier}`, show).then((s) => {
        updating = false
      })
    }
  }
  $: reloadShow($page.params.slug)

  $: {
    if (show && show.identifier) {
      if (skipInitial) skipInitial = false
      else dirty = true
    }
  }

  let file
  let cls
  let percentage = 0
  const chooseFile = (e) => {
    cls = 'border-blue-500'
    console.log(e)
    file.click()
  }
  const dropFile = (e) => {
    const dt = e.dataTransfer
    const files = dt.files
    uploadFile({ target: { files } })
  }
  const uploadFile = async (e) => {
    let file = e.target.files[0]
    if (!file) return
    const upload = await api.get('https://upload.freshair.radio/upload', {
      'Content-Type': file.type
    })
    const reader = new FileReader()
    const xhr = new XMLHttpRequest()
    xhr.upload.addEventListener(
      'progress',
      (e) => {
        if (e.lengthComputable) {
          percentage = Math.round((e.loaded * 100) / e.total)
          console.log(percentage)
        }
      },
      false
    )

    xhr.upload.addEventListener(
      'load',
      (e) => {
        percentage = 100
        show.picture = upload.access
        setTimeout(() => (percentage = 0), 500)
      },
      false
    )
    xhr.open('PUT', upload.signed)
    xhr.setRequestHeader('x-amz-acl', 'public-read')
    xhr.setRequestHeader('Content-Type', file.type)
    xhr.overrideMimeType(file.type)
    reader.onload = function (evt) {
      xhr.send(evt.target.result)
    }
    reader.readAsArrayBuffer(file)
  }
  const dragenter = (e) => {
    console.log(e)
    cls = 'border-blue-500'
  }
</script>

<svelte:head>
  <title>{show ? show.title : '...'}</title>
</svelte:head>
{#if show}
  <div class="md:flex md:items-center md:justify-between" in:fade>

    <div class="flex-1 min-w-0">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl mt-1
        sm:leading-9 sm:truncate">
        {show.title}
      </h2>
    </div>
    <div class="mt-4 flex md:mt-0 md:ml-4">
      <span class=" text-gray-700">
        {#if updating || dirty}
          Saving
          <CloudUpload tailwind="w-6 h-6 inline ml-1" />
        {:else}Saved{/if}
      </span>

    </div>
  </div>

  <div class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
    <div
      class="bg-white shadow overflow-hidden sm:rounded-lg mt-15 sm:w-1/2
      sm:mx-auto grid grid-cols-1 grid-rows-1 justify-center items-center
      border-2 border-white cursor-pointer {cls} relative "
      on:click={chooseFile}
      on:dragenter|preventDefault|stopPropagation={dragenter}
      on:dragover|preventDefault|stopPropagation={dragenter}
      on:dragleave|preventDefault|stopPropagation={() => (cls = '')}
      on:drop|preventDefault|stopPropagation={dropFile}>
      <input
        bind:this={file}
        on:change={uploadFile}
        type="file"
        accept="image/*"
        class="hidden" />
      <img
        class="row-start-1 row-end-2 col-start-1 col-end-2 object-cover"
        style="filter:blur(2px)"
        src={show.picture || '/default-show.png'}
        alt="{show.title}'s image'" />
      <div
        class=" absolute bg-blue-500 h-full top-0 left-0"
        style="width: {percentage}%; transition: width .2s" />
      <div
        class="text-lg leading-5 text-white row-start-1 row-end-2 col-start-1
        col-end-2 z-10 mx-4 text-center bg-gray-600 p-1 py-2 rounded-full">
        <div class="sm:mt-0">Drag and drop or click to upload</div>
      </div>
    </div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-15">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Show Details
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          This is displayed on your show page on freshair.radio, your podcast
          page on Spotify and Apple podcasts, and may be used for promotion of
          your show by Freshair
        </p>
      </div>
      <div class="px-4 py-5 sm:px-6">
        <dl class="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <label
              for="twitter"
              class="block text-sm font-medium leading-5 text-gray-500">
              Twitter
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border
                border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                @
              </span>
              <input
                id="twitter"
                bind:value={show.meta.twitter}
                class="form-input flex-1 block w-full px-3 py-2 rounded-none
                rounded-r-md sm:text-sm sm:leading-5"
                placeholder="handle..." />
            </div>

          </div>
          <div class="sm:col-span-1">
            <label
              for="facebook"
              class="block text-sm font-medium leading-5 text-gray-500">
              Facebook
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border
                border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                fb.me/
              </span>
              <input
                id="facebook"
                bind:value={show.meta.facebook}
                class="form-input flex-1 block w-full px-3 py-2 rounded-none
                rounded-r-md sm:text-sm sm:leading-5"
                placeholder="username..." />
            </div>

          </div>
          <div class="sm:col-span-1">
            <label
              for="instagram"
              class="block text-sm font-medium leading-5 text-gray-500">
              Instagram
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border
                border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                @
              </span>
              <input
                id="instagram"
                bind:value={show.meta.instagram}
                class="form-input flex-1 block w-full px-3 py-2 rounded-none
                rounded-r-md sm:text-sm sm:leading-5"
                placeholder="username..." />
            </div>
          </div>
          <div class="sm:col-span-1">
            <label
              for="slug"
              class="block text-sm font-medium leading-5 text-gray-500">
              Primary Category
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">

              <input
                id="slug"
                bind:value={show.meta.category}
                class="form-input flex-1 block w-full px-3 py-2 rounded-md
                sm:text-sm sm:leading-5"
                placeholder="Category..." />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="description"
              class="block text-sm font-medium leading-5 text-gray-500">
              Description
            </label>
            <div class="mt-1 max-w-full flex rounded-md shadow-sm">
              <textarea
                bind:value={show.description}
                id="description"
                rows="3"
                class="form-textarea block w-full transition duration-150
                ease-in-out sm:text-sm sm:leading-5 resize-none" />
            </div>

          </div>

        </dl>
      </div>
    </div>
  </div>
{/if}
