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

        <div class=" hidden sm:inline basis-2/5 flex flex-col items-end w-full h-full">
            <div class="basis-3/4 my-20">
                <p class="pt-7 px-5 text-rose-100 text-right text-4xl md:text-6xl subpixel-antialiased font-bold tracking-wide"> 
                    My Professional Experience
                </p>
            </div>
            <div class="text-right basis-1/4">
                <button onclick="window.location.href='https://drive.google.com/file/d/1fRozOZ--ywygx8E6gdaWT2hGMRFgffIb/view?usp=sharing';" class="rounded-md bg-teal-600 hover:bg-teal-800 text-white font-bold py-5 px-5 my-20"> 
                    <span class="text-l text-rose-100"> Check out my resume! </span>
                </button>
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
                    <li> Working in a full-stack agile environment using Vue.js, Javascript, Django, Python, and AWS</li>
                    <li> Maintaining & updating a Postgress database and developing an internal dashboard containing aerospace industry information</li>
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
                    <li> Gies VR: Worked to develop an interactive Virtual Reality world using Unity, C#, Figma, and Git </li>
                    <li> AI Essay: Created a tool using React, AWS, Python, and the OpenAI API to automate essay grading </li>
                <ul>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                AUG. 2022 - NOW
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
                    <li> Used python to package & publish ML models to an open-source interface called DLHub </li>
                    <li> Increased accessibility to computational models created for scientific research </li>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                DEC. 2022 - JUN. 2023
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
                    <li> Worked with team to analyze data from beam particle monitors within accelerators to improve physics experiments and presented findings to board of scientists</li>
                    <li>  Utilized python libraries including Matplotlib, NumPy, and pandas </li>
                <ul>
                <p class=" py-2 text-s font-semibold tracking-wide text-rose-400">
                JUN. 2021 - AUG. 2021
                <p>
                </Timeline.Item>

            </Timeline>
        </div>
      
    </div>
    <div class="sm:hidden inline text-center"> 
            <button onclick="window.location.href='https://drive.google.com/file/d/1fRozOZ--ywygx8E6gdaWT2hGMRFgffIb/view?usp=sharing';" class="rounded-md bg-teal-600 hover:bg-teal-800 text-white font-bold py-5 px-5 mb-10 mx-20"> 
                <span class="text-l text-rose-100"> Check out my resume! </span>
            </button>  
    </div>
</div>

<style>

.experience {
    background-color: rgba(64, 64, 64, 1);
    height: auto;

}
</style>