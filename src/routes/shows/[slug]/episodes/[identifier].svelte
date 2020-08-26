<script>
  import { key } from '../../../../api'
  import { fade } from 'svelte/transition'
  import { getContext, onMount } from 'svelte'
  import { stores } from '@sapper/app'
  import CloudUpload from '../../../../components/icons/CloudUpload.svelte'
  const { preloading, page, session } = stores()
  import { goto } from '@sapper/app'
  const api = getContext(key).functions()
  let show
  let episode
  let updating = false
  let dirty = false
  let skipInitial = true
  let updater
  onMount(() => {
    updater = setInterval(updateEpisode, 3000)
    return () => clearInterval(updater)
  })
  // onMount(() => {
  //   api.get(`/shows/${$page.params.slug}`).then((s) => (show = s))
  // })
  const reloadShow = (slug) => {
    api.get(`/shows/${slug}`).then((s) => {
      show = s
      episode = s
        ? s.episodes.find((e) => e.identifier == $page.params.identifier)
        : null
    })
  }
  const updateEpisode = () => {
    if (dirty && episode && episode.identifier) {
      updating = true
      dirty = false
      api
        .put(
          `/shows/${show.identifier}/episodes/${episode.identifier}`,
          episode
        )
        .then((s) => {
          updating = false
        })
    }
  }
  const deleteEpisode = () => {
    api
      .del(`/shows/${show.identifier}/episodes/${episode.identifier}`)
      .then((s) => {
        goto(`/shows/${show.slug}`)
      })
  }

  $: reloadShow($page.params.slug)

  $: {
    if (episode && episode.identifier) {
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
    const upload = await api.get('https://upload.freshair.radio/upload')
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
        episode.audio = upload.access
      },
      false
    )
    xhr.open('PUT', upload.signed)
    xhr.setRequestHeader('x-amz-acl', 'public-read')
    xhr.setRequestHeader('Content-Type', 'audio/mpeg')
    xhr.overrideMimeType('audio/mpeg')
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
      <span class=" text-gray-700 flex items-center">
        {#if updating || dirty}
          Saving
          <CloudUpload tailwind="w-6 h-6 inline ml-1" />
        {:else}Saved{/if}
      </span>
      <span class="ml-6 shadow-sm rounded-md">
        <button
          on:click={deleteEpisode}
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent
          text-sm leading-5 font-medium rounded-md text-white bg-red-600
          hover:bg-red-500 focus:outline-none focus:shadow-outline-red
          focus:border-red-700 active:bg-red-700 transition duration-150
          ease-in-out">
          Delete Episode
        </button>
      </span>

    </div>
  </div>

  <div class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-15 mb-15">
      <div class="px-4 py-5 pb-0 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Episode Details
        </h3>

      </div>
      <div class="px-4 py-5 sm:px-6 ">
        <dl class="grid grid-cols-1 col-gap-4 row-gap-4 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <label
              for="name"
              class="block text-sm font-medium leading-5 text-gray-500">
              Name
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <input
                id="name"
                bind:value={episode.title}
                class="form-input flex-1 block w-full px-3 py-2 rounded-md
                sm:text-sm sm:leading-5"
                placeholder="Name..." />
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
                bind:value={episode.description}
                id="description"
                rows="3"
                class="form-textarea block w-full transition duration-150
                ease-in-out sm:text-sm sm:leading-5 resize-none" />
            </div>

          </div>

        </dl>
        {#if episode.audio}
          <div class="mt-5">
            <div
              class="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start
              sm:justify-between">
              <div class="sm:flex sm:items-start">
                <svg
                  class="h-8 w-auto sm:flex-shrink-0 sm:h-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010
                    12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0
                    011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0
                    .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>

                <div class="mt-3 sm:mt-0 sm:ml-4">

                  <div
                    class="text-sm leading-5 text-gray-600 sm:flex
                    sm:items-center">

                    <div class="">
                      {episode.meta && episode.meta.length ? `${(episode.meta.length / 60).toPrecision(2)} minutes` : '...'}
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                <span
                  class="inline-flex items-center px-3 py-0.5 rounded-full
                  text-sm font-medium leading-5 {episode.meta && episode.meta.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                  {episode.meta && episode.meta.published ? 'Published' : 'Processing'}
                </span>
              </div>
            </div>
          </div>
        {:else}
          <div
            class="mt-5 cursor-pointer"
            on:click={chooseFile}
            on:dragenter|preventDefault|stopPropagation={dragenter}
            on:dragover|preventDefault|stopPropagation={dragenter}
            on:dragleave|preventDefault|stopPropagation={() => (cls = '')}
            on:drop|preventDefault|stopPropagation={dropFile}>
            <input
              bind:this={file}
              on:change={uploadFile}
              type="file"
              accept="audio/mpeg,audio/mp3"
              class="hidden" />
            <div
              class="border-2 border-gray-50 {cls} rounded-md bg-gray-50 px-6
              py-5 sm:flex sm:items-start sm:justify-between relative">
              <div
                class=" absolute bg-blue-500 h-full top-0 left-0"
                style="width: {percentage}%; transition: width .2s" />
              <div class="sm:flex sm:items-start">
                <svg
                  class="h-8 w-auto sm:flex-shrink-0 sm:h-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010
                    12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0
                    011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0
                    .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>

                <div class="mt-3 sm:mt-0 sm:ml-4">

                  <div
                    class="text-sm leading-5 text-gray-600 sm:flex
                    sm:items-center">

                    <div class="sm:mt-0">Drag and drop or click to upload</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        {/if}
      </div>
    </div>

  </div>
{/if}
