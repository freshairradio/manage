<div class="md:hidden">
  <div class="fixed inset-0 flex z-40">
    <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-gray-600 opacity-75" />
    </div>
    <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
    <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
      <div class="absolute top-0 right-0 -mr-14 p-1">
        <button
          class="flex items-center justify-center h-12 w-12 rounded-full
          focus:outline-none focus:bg-gray-600"
          aria-label="Close sidebar">
          <svg
            class="h-6 w-6 text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        <div class="flex-shrink-0 flex items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="629.887"
            height="139.091"
            class="h-8 w-auto flex-grow"
            viewBox="0 0 629.887 139.091">
            <path
              id="Path_65"
              data-name="Path 65"
              d="M51.136-98.182v4.091H12.273v-4.091ZM25.824,0V-114.29a22.394,22.394,0,0,1,3.1-11.953,21.312,21.312,0,0,1,8.246-7.8,23.308,23.308,0,0,1,11.154-2.749,20.58,20.58,0,0,1,4.155.384,27.215,27.215,0,0,1,3.643,1.023l-1.278,3.835a31.083,31.083,0,0,0-3.132-.831,16.64,16.64,0,0,0-3.388-.32,18.77,18.77,0,0,0-12.88,4.922q-5.529,4.922-5.529,13.487L29.787,0ZM80.56,0V-98.182h4.091v15.6h.511A26.788,26.788,0,0,1,96.508-94.858a35.187,35.187,0,0,1,18.058-4.6h2.045v4.091h-2.045A31.085,31.085,0,0,0,99.129-91.6,27.691,27.691,0,0,0,88.518-81.179a29.7,29.7,0,0,0-3.867,15.213V0Zm95.9,2.045a38.278,38.278,0,0,1-22.468-6.712,44.275,44.275,0,0,1-14.925-18.217,61.277,61.277,0,0,1-5.305-25.952A60.964,60.964,0,0,1,139.1-74.787,45.9,45.9,0,0,1,153.642-93a34.388,34.388,0,0,1,20.774-6.712A35.146,35.146,0,0,1,190.3-96.072a39.616,39.616,0,0,1,12.752,10.1,48.371,48.371,0,0,1,8.469,14.862,52.373,52.373,0,0,1,3.036,17.93v4.091h-78.75v-4.091h74.659a46.893,46.893,0,0,0-4.858-21.445,40.426,40.426,0,0,0-13.04-15.309,31.088,31.088,0,0,0-18.153-5.689,30.146,30.146,0,0,0-18.281,6.009,42.379,42.379,0,0,0-13.1,16.364,56.472,56.472,0,0,0-5.178,23.395v.511a60.591,60.591,0,0,0,4.506,23.619A40.526,40.526,0,0,0,155.5-8.5q8.629,6.456,20.966,6.456,9.077,0,15.245-3.2a34.492,34.492,0,0,0,9.908-7.351,50.5,50.5,0,0,0,5.529-7.1l3.324,2.3a46.184,46.184,0,0,1-6.52,8.246,38.964,38.964,0,0,1-11.122,7.862A36.858,36.858,0,0,1,176.461,2.045Zm129.4-79.517-4.091,1.023a30.483,30.483,0,0,0-5.529-10.643,22.382,22.382,0,0,0-8.661-6.392,30.6,30.6,0,0,0-11.889-2.141q-11.761,0-19.048,5.977a19.377,19.377,0,0,0-7.287,15.756A18.166,18.166,0,0,0,254.3-60.916q4.954,5.241,14.989,7.734l15.341,3.835q10.8,2.685,16.4,9.077A22.681,22.681,0,0,1,306.624-24.8a24.165,24.165,0,0,1-4.187,14.063A27.534,27.534,0,0,1,290.9-1.31a40.56,40.56,0,0,1-17,3.356q-13.1,0-21.413-6.392T241.681-22.5l4.091-1.023q2.173,10.419,9.3,15.948T273.9-2.045q12.784,0,20.71-6.264A20,20,0,0,0,302.533-24.8a18.481,18.481,0,0,0-4.73-12.848q-4.73-5.241-14.19-7.607l-15.341-3.835q-11.314-2.812-17.163-9.2a22.264,22.264,0,0,1-5.849-15.6,23.752,23.752,0,0,1,3.867-13.519,25.961,25.961,0,0,1,10.739-9.045,36.5,36.5,0,0,1,15.82-3.26q11.378,0,18.984,5.593T305.857-77.472Zm37.606,11.506V0h-4.091V-130.909h4.091v48.324h.511A26.788,26.788,0,0,1,355.32-94.858a35.187,35.187,0,0,1,18.058-4.6,34.6,34.6,0,0,1,17.386,4.283,30.908,30.908,0,0,1,11.825,11.825,34.6,34.6,0,0,1,4.283,17.386V0h-4.091V-65.966q0-13.04-8.182-21.222t-21.222-8.182A31.085,31.085,0,0,0,357.94-91.6,27.691,27.691,0,0,0,347.33-81.179,29.7,29.7,0,0,0,343.462-65.966ZM470.557,2.3a39.59,39.59,0,0,1-16.939-3.548,28.765,28.765,0,0,1-12.081-10.291q-4.474-6.744-4.474-16.332,0-8.438,3.324-13.711a23.545,23.545,0,0,1,8.885-8.278,47.45,47.45,0,0,1,12.3-4.506q6.744-1.5,13.583-2.4,8.949-1.151,14.542-1.758t8.182-2.077q2.589-1.47,2.589-5.114v-.511q0-9.46-5.146-14.7t-15.565-5.241q-10.8,0-16.939,4.73a27.963,27.963,0,0,0-8.629,10.1l-14.318-5.114a34.5,34.5,0,0,1,10.259-13.967A38.664,38.664,0,0,1,464.2-97.447,58.89,58.89,0,0,1,479.25-99.46a61.944,61.944,0,0,1,10.9,1.119,35.629,35.629,0,0,1,11.953,4.57,26.768,26.768,0,0,1,9.62,10.419q3.835,6.967,3.835,18.665V0H500.472V-13.3H499.7a26.556,26.556,0,0,1-5.114,6.839,29.507,29.507,0,0,1-9.524,6.2A36.694,36.694,0,0,1,470.557,2.3Zm2.3-13.551q8.949,0,15.117-3.516a24.224,24.224,0,0,0,9.332-9.077,23.309,23.309,0,0,0,3.164-11.7V-49.347q-.959,1.151-4.187,2.077a63.492,63.492,0,0,1-7.415,1.6q-4.187.671-8.118,1.151t-6.36.8a58.571,58.571,0,0,0-10.962,2.461,19.1,19.1,0,0,0-8.182,5.05q-3.1,3.356-3.1,9.109,0,7.862,5.849,11.857T472.858-11.25ZM546.77,0V-98.182h15.085V0Zm7.67-114.545a10.615,10.615,0,0,1-7.575-3,9.606,9.606,0,0,1-3.164-7.223A9.606,9.606,0,0,1,546.866-132a10.615,10.615,0,0,1,7.575-3,10.615,10.615,0,0,1,7.575,3,9.606,9.606,0,0,1,3.164,7.223,9.606,9.606,0,0,1-3.164,7.223A10.615,10.615,0,0,1,554.441-114.545ZM593.069,0V-98.182h14.574v14.83h1.023a23.578,23.578,0,0,1,9.716-11.825,28.6,28.6,0,0,1,15.852-4.538q1.662,0,4.155.064t3.771.192v15.341q-.767-.192-3.484-.607a37.834,37.834,0,0,0-5.721-.415A26.755,26.755,0,0,0,620.2-82.17a22.683,22.683,0,0,0-8.821,8.182,22.046,22.046,0,0,0-3.228,11.857V0Z"
              transform="translate(-12.273 136.79)"
              fill="#fff" />
          </svg>

        </div>
        <nav class="mt-5 px-2">
          <a
            href="/"
            class="group flex items-center px-2 py-2 text-base leading-6
            font-medium rounded-md text-white bg-gray-900 focus:outline-none
            focus:bg-gray-700 transition ease-in-out duration-150">
            <svg
              class="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2
                2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1
                0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>
          <a
            href="/"
            class="mt-1 group flex items-center px-2 py-2 text-base leading-6
            font-medium rounded-md text-gray-300 hover:text-white
            hover:bg-gray-700 focus:outline-none focus:text-white
            focus:bg-gray-700 transition ease-in-out duration-150">
            <svg
              class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0
                0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Team
          </a>
          <a
            href="/"
            class="mt-1 group flex items-center px-2 py-2 text-base leading-6
            font-medium rounded-md text-gray-300 hover:text-white
            hover:bg-gray-700 focus:outline-none focus:text-white
            focus:bg-gray-700 transition ease-in-out duration-150">
            <svg
              class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2
                2 0 00-2 2z" />
            </svg>
            Projects
          </a>
          <a
            href="/"
            class="mt-1 group flex items-center px-2 py-2 text-base leading-6
            font-medium rounded-md text-gray-300 hover:text-white
            hover:bg-gray-700 focus:outline-none focus:text-white
            focus:bg-gray-700 transition ease-in-out duration-150">
            <svg
              class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
                0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Calendar
          </a>
          <a
            href="/"
            class="mt-1 group flex items-center px-2 py-2 text-base leading-6
            font-medium rounded-md text-gray-300 hover:text-white
            hover:bg-gray-700 focus:outline-none focus:text-white
            focus:bg-gray-700 transition ease-in-out duration-150">
            <svg
              class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2
                2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1
                1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0
                006.586 13H4" />
            </svg>
            Documents
          </a>
          <a
            href="/"
            class="mt-1 group flex items-center px-2 py-2 text-base leading-6
            font-medium rounded-md text-gray-300 hover:text-white
            hover:bg-gray-700 focus:outline-none focus:text-white
            focus:bg-gray-700 transition ease-in-out duration-150">
            <svg
              class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2
                0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0
                01-2-2z" />
            </svg>
            Reports
          </a>
        </nav>
      </div>
      <div class="flex-shrink-0 flex bg-gray-700 p-4">
        <a href="/" class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>
            <div class="ml-3">
              <p class="text-base leading-6 font-medium text-white">Tom Cook</p>
              <p
                class="text-sm leading-5 font-medium text-gray-400
                group-hover:text-gray-300 transition ease-in-out duration-150">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="flex-shrink-0 w-14">
      <!-- Force sidebar to shrink to fit close icon -->
    </div>
  </div>
</div>
