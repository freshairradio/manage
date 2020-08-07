<script>
  import MobileNav from './MobileNav.svelte'
  import DesktopNav from './DesktopNav.svelte'
  import DesktopNavItem from './DesktopNavItem.svelte'
  import Microphone from './icons/Microphone.svelte'
  import { onMount, getContext } from 'svelte'
  import { key } from '../api.js'
  import { stores } from '@sapper/app'
  import ViewGrid from './icons/ViewGrid.svelte'
  const { preloading, page, session } = stores()
  const api = getContext(key).functions()
  let shows = []
  onMount(() => {
    api.get('/shows').then((s) => (shows = s))
  })
</script>

<!-- {@debug shows} -->
<!-- Off-canvas menu for mobile -->

<MobileNav />

<!-- Static sidebar for desktop -->
<DesktopNav>
  <DesktopNavItem
    active={$page.path === '/'}
    first={true}
    href="/"
    text="Dashboard"
    icon={ViewGrid} />
  {#each shows as show, i}
    <DesktopNavItem
      active={$page.path.startsWith(`/shows/${show.slug}`)}
      first={false}
      href="/shows/{show.slug}"
      text={show.title}
      icon={Microphone} />
  {/each}

</DesktopNav>
