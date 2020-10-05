<script>
  import { key } from "../api";
  import { getContext, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { stores, goto } from "@sapper/app";
  import moment from "moment";
  import Clock from "../components/icons/Clock.svelte";
  const { preloading, page, session } = stores();
  let shows = [];
  const api = getContext(key).functions();
  onMount(() => {
    api.get(`/public/shows`).then((s) => {
      shows = s;
    });
  });
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<div class="md:flex md:items-center md:justify-between" in:fade>
  <div class="flex-1 min-w-0">
    <h2
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl mt-1
            sm:leading-9 sm:truncate">
      Hi
      {api.user.user_metadata.name.split(' ')[0]}!
    </h2>
  </div>
</div>

<div class="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
  <div class="bg-white shadow sm:rounded-lg mt-15">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Your show</h3>
      <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
        <p>
          Let's find the show you're associated with. Choose from the list below
        </p>
      </div>

      <ul class="mt-2">
        {#each shows as show}
          <li>
            <button
              on:click={() => {
                api.put(`/shows/claim/${show.identifier}`).then((s) => {
                  console.log(s);
                  goto('/');
                });
              }}
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out rounded-lg w-full">
              <div class="flex items-center px-4 py-4 sm:px-6 w-full">
                <div class="w-full flex-grow flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-8 w-8 rounded-md"
                      src={show.picture || '/default-show.png'}
                      alt="" />
                  </div>
                  <div class="flex-grow px-4 ">
                    <div
                      class="text-lg leading-5 font-medium  truncate text-left">
                      {show.title}
                    </div>
                  </div>
                </div>
                <div>
                  <!-- Heroicon name: chevron-right -->
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
