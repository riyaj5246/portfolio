<!-- <div class="experience">
rose 500: 
rose 400: fb7185
teal 400: 4fd1c5
</div> -->
<script>
  import { Text, Timeline } from '@svelteuidev/core';
</script>

<div class="experience">
    <div class="sm:hidden inline">
        <p class=" pt-10 px-5 text-rose-100 text-4xl subpixel-antialiased font-bold tracking-wide"> My Professional Experience</p>
    </div>

    <div class="flex flex-row items-center w-full h-full">
        <div class=" hidden sm:inline basis-2/5 flex flex-col items-center w-full h-full">
            <div class="basis-3/4">
                <p class=" pt-7 px-5 text-rose-100 text-right text-4xl md:text-6xl subpixel-antialiased font-bold tracking-wide"> My Professional Experience</p>
            </div>
            <div class="flex flex-col">
                <div class="basis-3/4 bg-rose-500" > 
                </div>
                <div class="basis-1/4">
                    <button class="rounded-md bg-teal-600 hover:bg-teal-800 text-white font-bold py-5 px-0 m-20"> 
                        <span class="text-rose-100"> Check out my resume! </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="basis-5/5 sm:basis-3/5 p-10">
            <Timeline color="#fb7185" active={3} lineWidth={8} bulletSize={35}>
                <Timeline.Item >
                <p class=" text-2xl font-bold tracking-wide text-rose-100">
                Software Engineering Intern
                <p>
                <p class=" text-l font-extrabold tracking-wide text-teal-400">
                SHEDD CAPITAL
                <p>
                <ul class=" list-disc list-inside text-l text-rose-100">
                    <li> Developing the frontend for the Shedd internal dashboard using Vue.js, Django, Javascript, Python </li>
                    <li> Some more bullshit about what I did for the company </li>
                <ul>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                MAY 2023 - NOW
                <p>
                </Timeline.Item>

                <Timeline.Item >
                <p class=" text-2xl font-bold tracking-wide text-rose-100">
                Software Developer
                <p>
                <p class=" text-l font-extrabold tracking-wide text-teal-400">
                DISRUPTION LAB
                <p>
                <ul class=" list-disc list-inside text-l text-rose-100">
                    <li> Developing the frontend for the Shedd internal dashboard using Vue.js, Django, Javascript, Python </li>
                    <li> Some more bullshit about what I did for the company </li>
                <ul>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                MAY 2023 - NOW
                <p>
                </Timeline.Item> 
                
                <Timeline.Item >
                <p class=" text-2xl font-bold tracking-wide text-rose-100">
                Research Assistant
                <p>
                <p class=" text-l font-extrabold tracking-wide text-teal-400">
                NATIONAL CENTER FOR SUPERCOMPUTING APPLICATIONS
                <p>
                <ul class=" list-disc list-inside text-l text-rose-100">
                    <li> Developing the frontend for the Shedd internal dashboard using Vue.js, Django, Javascript, Python </li>
                    <li> Some more bullshit about what I did for the company </li>
                <ul>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                NOV 2019 - AUG 2022
                <p>
                </Timeline.Item>

                <Timeline.Item >
                <p class=" text-2xl font-bold tracking-wide text-rose-100">
                High School TARGET Intern
                <p>
                <p class=" text-l font-extrabold tracking-wide text-teal-400">
                FERMI NATIONAL ACCELERATOR LABORATORY
                <p>
                <ul class=" list-disc list-inside text-l text-rose-100">
                    <li> Developing the frontend for the Shedd internal dashboard using Vue.js, Django, Javascript, Python </li>
                    <li> Some more bullshit about what I did for the company </li>
                <ul>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                MAY 2023 - NOW
                <p>
                </Timeline.Item>

            </Timeline>
        </div>
      
    </div>
   
</div>

<style>

.experience {
    background-color: rgba(64, 64, 64, 1);
    height: auto;

}
</style>