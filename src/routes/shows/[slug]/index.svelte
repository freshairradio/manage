<script>
  import { key } from '../../../api'
  import { getContext, onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { stores, goto } from '@sapper/app'
  import moment from 'moment'
  import { sortBy } from 'lodash'
  import Clock from '../../../components/icons/Clock.svelte'
  const { preloading, page, session } = stores()
  const api = getContext(key).functions()
  let show
  // onMount(() => {
  //   api.get(`/shows/${$page.params.slug}`).then((s) => (show = s))
  // })
  const reloadShow = (slug) => {
    api.get(`/shows/${slug}`).then((s) => {
      show = s
    })
  }
  $: {
    show = null
    api.get(`/shows/${$page.params.slug}`).then((s) => (show = s))
  }
  const createEpisode = () => {
    api.post(`/shows/${show.identifier}/episodes`).then((s) => {
      goto(`/shows/${$page.params.slug}/episodes/${s.identifier}`)
    })
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
      <span class="shadow-sm rounded-md">
        <a
          href="/shows/{$page.params.slug}/edit"
          class="inline-flex items-center px-4 py-2 border border-gray-300
          text-sm leading-5 font-medium rounded-md text-gray-700 bg-white
          hover:text-gray-500 focus:outline-none focus:shadow-outline-blue
          focus:border-blue-300 active:text-gray-800 active:bg-gray-50
          transition duration-150 ease-in-out">
          Edit Details
        </a>
      </span>

    </div>
  </div>

  <div class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
    <div
      class="bg-white shadow overflow-hidden sm:rounded-lg mt-15 sm:w-1/2
      sm:mx-auto">
      <img
        src={show.picture || '/default-show.png'}
        alt="{show.title}'s image'" />

    </div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-10">
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
            <dt class="text-sm leading-5 font-medium text-gray-500">Twitter</dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {show.meta.twitter || '...'}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm leading-5 font-medium text-gray-500">
              Facebook
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {show.meta.facebook || '...'}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm leading-5 font-medium text-gray-500">
              Instagram
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {show.meta.instagram || '...'}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm leading-5 font-medium text-gray-500">
              Primary Category
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {show.meta.category || '...'}
            </dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm leading-5 font-medium text-gray-500">
              Description
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {show.description}
            </dd>
          </div>

        </dl>
      </div>
    </div>
    <div class="mt-10 flex items-center justify-center">
      <button
        on:click={createEpisode}
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent
        text-sm leading-5 font-medium rounded-full text-white bg-indigo-600
        hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo
        focus:border-indigo-700 active:bg-indigo-700 transition duration-150
        ease-in-out">
        Add Episode
      </button>
    </div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-10 mb-15">
      <ul>
        {#each sortBy(show.episodes, 'created').reverse() as episode, i}
          <li class={i !== 0 ? 'border-t border-gray-200' : ''}>
            <a
              href="/shows/{$page.params.slug}/episodes/{episode.identifier}"
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50
              transition duration-150 ease-in-out">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div
                    class="text-sm leading-5 font-medium text-indigo-600
                    truncate">
                    {episode.title}
                  </div>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold
                      rounded-full {episode.meta && episode.meta.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                      {episode.meta && episode.meta.published ? 'Published' : episode.audio ? 'Processing' : 'No Audio'}
                    </span>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <div
                      class="mr-6 flex items-center text-sm leading-5
                      text-gray-500">
                      <Clock
                        tailwind="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {episode.meta && episode.meta.length ? episode.meta.length : '...'}
                    </div>

                  </div>
                  <div
                    class="mt-2 flex items-center text-sm leading-5
                    text-gray-500 sm:mt-0">

                    <span>
                      <time
                        datetime={moment(episode.created).toISOString()}
                        title={moment(episode.created).format('DD/MM/YYYY')}>
                        {moment(episode.created).fromNow()}
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        {/each}

      </ul>
    </div>

  </div>
{/if}
