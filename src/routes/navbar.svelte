<!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->

  <script>
    let showMenu = false;
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }
  </script>
  
  <div class="outerBar">
    <div class="navbar"> <!-- otherwise bg-rose-400-->
      <nav
        class="container px-10 py-5 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex md:items-center justify-between ">
          <a
            class="md:text-3xl font-semibold text-rose-50 text-2xl hover:text-rose-200"
            href="/home"
            >Riya Jain
          </a>
          <!-- Mobile menu button -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={toggleNavbar} class="md:flex hidden">
            <button
              type="button"
              class="text-rose-50 hover:text-rose-200 focus:outline-none focus:text-rose-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="md:flex-col md:mt-8 space-y-4 md:flex space-y-0 flex-row items-center space-x-10 mt-0 md:{showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class=" text-lg font-light text-rose-50 hover:text-rose-200 " href="/home">Home</a>
          <a class=" text-lg font-light text-rose-50 hover:text-rose-200" href="/about">About</a>
          <a class=" text-lg font-light text-rose-50 hover:text-rose-200" href="/experience">Experience</a>
          <a class=" text-lg font-light text-rose-50 hover:text-rose-200" href="/projects">Projects</a>
        </div>
      </nav>
    </div>
  </div>

  <style>
    .navbar {
        /* From https://css.glass */
        background: rgba(221, 86, 94, 1);
        border-radius: 0px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.9px);
        -webkit-backdrop-filter: blur(9.9px);
        border: 1px solid rgba(245, 62, 106, 0.35);
        width: 100%;
    }
    .outerBar {
      width: 100%;
      position: fixed;
    }
  </style>