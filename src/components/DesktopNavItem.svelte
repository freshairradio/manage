<script>
  export let icon
  export let text
  export let href
  export let active
  export let first
</script>

{#if active}
  <a
    {href}
    rel="preload"
    class="{!first ? 'mt-1' : ''} group flex items-center px-2 py-2 text-sm
    leading-5 font-medium text-white rounded-md bg-gray-900 focus:outline-none
    focus:bg-gray-700 transition ease-in-out duration-150">
    <svelte:component
      this={icon}
      tailwind="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300
      group-focus:text-gray-300 transition ease-in-out duration-150" />
    {text}
  </a>
{:else}
  <a
    {href}
    rel="preload"
    class="{!first ? 'mt-1' : ''} group flex items-center px-2 py-2 text-sm
    leading-5 font-medium text-gray-300 rounded-md hover:text-white
    hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700
    transition ease-in-out duration-150">
    <svelte:component
      this={icon}
      tailwind="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
      group-focus:text-gray-300 transition ease-in-out duration-150" />
    {text}
  </a>
{/if}
