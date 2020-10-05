<script>
  import { key } from "../api";
  import { getContext, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { stores, goto } from "@sapper/app";
  import moment from "moment";
  import Clock from "../components/icons/Clock.svelte";
  const { preloading, page, session } = stores();
  const api = getContext(key).functions();
  let show = {
    guidelines: true,
    enforcement: false,
    missing_a_show: false,
    community: false,
    music_sourcing: false,
    swearing: false,
    illicit: false
  };
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
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Broadcasting guidelines
      </h3>
      <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
        <p>
          First things first—before you get started let's go over some of
          Freshair's broadcasting guidelines. Give them all a read through and
          familiarise yourself with the rules, their rationale, and how we
          enforce them. The rules are crucial for us etiquette-wise, in relation
          to being housed in and broadcasting to EUSA venues, and to follow
          OfCom regulations. Violation of these rules could significantly hurt
          the station as a whole, and so we take compliance with them seriously.
        </p>
      </div>
      <div class="mt-5">
        <button
          type="button"
          on:click={() => (show.enforcement = true)}
          class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
          I understand
        </button>
      </div>
    </div>
  </div>
  {#if show.enforcement}
    <div class="bg-white shadow sm:rounded-lg mt-5">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Breaches of these guidelines
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <h4 class="font-bold">3 strike policy for minor offences</h4>
          <p>
            Minor offenses include things like swearing on air or not letting us
            know about missing one of your shows timeslots. If you get three
            strikes, you’ll have your show and broadcasting rights pulled for
            the year.
          </p>
          <h4 class="font-bold mt-1">Major offences</h4>
          <p>
            Major offences include but aren't limited to harrasment, hate
            speech, or promoting illicit materials on-air. These will result in
            your show being immediately cancelled, and depending on the severity
            can incur a lifetime ban.
          </p>
          <h4 class="font-bold mt-1">Reporting</h4>
          <p>
            If you'd like to report violations of these guidelines, please send
            an email to
            <a href="mailto:manager@freshair.radio">manager@freshair.radio</a>,
            and we'll investigate as quickly as possible.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            on:click={() => (show.missing_a_show = true)}
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            I understand
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if show.missing_a_show}
    <div class="bg-white shadow sm:rounded-lg mt-5">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Missing a Show
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            If you won't be able to prepare a show for one of your assigned
            timeslots, you
            <em>must</em>
            email the Head of Programming at
            <a
              href="mailto:programming@freshair.radio">programming@freshair.radio</a>
            at least 24 hours beforehand to let us know why. If you don't, this
            will count as a strike.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            on:click={() => (show.community = true)}
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            I understand
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if show.community}
    <div class="bg-white shadow sm:rounded-lg mt-5">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Community</h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            We expect everyone to be respectful in interactions and uphold the
            open & inclusive community we have as a station. We want everyone to
            feel welcome in Freshair, and we expect all our members to uphold
            that standard.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            on:click={() => (show.music_sourcing = true)}
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            I understand
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if show.music_sourcing}
    <div class="bg-white shadow sm:rounded-lg mt-5">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Music Sourcing
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            You must have the legal right to play any music included in your
            show (in essence, it must be public domain, or you must have
            purchased the music). You can never use YouTube, Spotify or similar
            platforms like Apple Music as a music source for your show.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            on:click={() => (show.swearing = true)}
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            I understand
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if show.swearing}
    <div class="bg-white shadow sm:rounded-lg mt-5">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Swearing and explicit language
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            There is not a complete list of words that cannot be said on air,
            but you’ll have to use your common sense. No strong or crass
            expletives are permitted. Do not be offensive to listeners, bearing
            in mind who could be listening. Think/catch yourself before you
            speak, and consider the time and style of your show when considering
            if your word choice is appropriate. For example, at night, it is
            likely not an issue to say ‘bloody’, but this may not be appropriate
            in the morning or afternoon.
          </p>
          <p class="mt-2">
            It is also not okay to use an arguably inoffensive word in the wrong
            context and doing so will lead to the same consequences as swearing
            – for example, saying “cock” all the time while maintaining that you
            were speaking about poultry. Common sense is the key here, and
            catching yourself before you swear.
          </p>
          <p class="mt-2">
            Swearing makes you and the station sound unprofessional and is never
            necessary. If you do swear accidently, it will count as a strike. If
            you swear in an outright/strong or purposeful way or if you use
            offensive language towards anyone/group (including
            racist/sexist/targeting language) this will count as a major offence
            and your show will be cancelled for the year.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            on:click={() => (show.illicit = true)}
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            I understand
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if show.illicit}
    <div class="bg-white shadow sm:rounded-lg mt-5">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Promoting illicit activities
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            It is prohibited to speak favourably of or encourage use of smoking,
            alcohol, illegal substances, or other illicit activities during your
            show. Violating this major rule will result in your show being
            cancelled for the year.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            on:click={() => goto('/claim')}
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-red active:bg-blue-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            I understand & agree to follow these guidelines
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
