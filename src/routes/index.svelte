<script>
  import { key } from '../api'
  import { getContext, onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { stores } from '@sapper/app'
  import moment from 'moment'
  import Clock from '../components/icons/Clock.svelte'
  const { preloading, page, session } = stores()
  const api = getContext(key).functions()
  let shows
  // onMount(() => {
  //   api.get(`/shows/${$page.params.slug}`).then((s) => (show = s))
  // })
  $: {
    api.get(`/shows`).then((s) => (shows = s))
  }
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>
{#if shows}
  <div class="md:flex md:items-center md:justify-between" in:fade>

    <div class="flex-1 min-w-0">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl mt-1
        sm:leading-9 sm:truncate">
        Your shows
      </h2>
    </div>

  </div>

  <div class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-10 mb-15">
      <ul>
        {#each shows as show, i}
          <li class={i !== 0 ? 'border-t border-gray-200' : ''}>
            <a
              href="/shows/{show.slug}"
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50
              transition duration-150 ease-in-out">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div
                    class="text-sm leading-5 font-medium text-indigo-600
                    truncate">
                    {show.title}
                  </div>
                  <!-- <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold
                      rounded-full {episode.meta && episode.meta.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                      {episode.meta && episode.meta.published ? 'Published' : episode.audio ? 'Processing' : 'No Audio'}
                    </span>
                  </div> -->
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <div
                      class="mr-6 flex items-center text-sm leading-5
                      text-gray-500">
                      <Clock
                        tailwind="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      <time
                        datetime={moment(show.created).toISOString()}
                        title={moment(show.created).format('DD/MM/YYYY')}>
                        {moment(show.created).fromNow()}
                      </time>
                    </div>

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
