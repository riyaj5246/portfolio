<script>
    import Picture from '../assets/profile.png';

</script>

<link rel="stylesheet"
          href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="flex flex-row items-center w-full h-full">
    <div class="basis-1/12  h-screen lg:h-full"></div>
    <div class="lg:basis-5/12 h-full basis-11/12">
        <p class="text-rose-50 text-6xl subpixel-antialiased font-bold tracking-wide">Hey, I'm Riya.</p>
        <br/>
        <p class="pt-3 text-rose-50 text-4xl subpixel-antialiased font-light tracking-wide">Aspiring computer scientist at UIUC</p>
        <br/>
        <div class="flex flex-row">
            <button type="button" onclick="window.location.href='https://github.com/riyaj5246';" class="text-white bg-gradient-to-r from-rose-300 via-rose-500 to-rose-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-lg dark:shadow-rose-800/80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Github</span>
            </button>
            <button type="button" onclick="window.location.href='https://www.linkedin.com/in/riya-jain-uofi/';" class="text-white bg-gradient-to-r from-rose-300 via-rose-500 to-rose-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-lg dark:shadow-rose-800/80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Linkedin</span>
            </button>
            <button type="button" onclick="window.location.href='mailto:riyajj2@illinois.edu';" class="text-white bg-gradient-to-r from-rose-300 via-rose-500 to-rose-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-lg dark:shadow-rose-800/80 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Email</span>
            </button>
        </div>
     </div>
    <div class="lg:basis-6/12 h-full basis-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="pfp" src={Picture} />
    </div>
</div>
  
<style>
    .pfp {
        height: 100vh;
        width: 100%;
        object-fit: cover;
        border-radius: 50% 0 0 50%;
        transform: translate3d(5%, -3%, -3%);
    }
    @media (min-width: 1024px) { 
        .pfp {
            
            border-left: 15px solid #ffe4e6;
            border-top: 0px solid #ffe4e6;
            border-right: 0px solid #ffe4e6;
            border-bottom: 0px solid #ffe4e6;
        }
    }

</style>