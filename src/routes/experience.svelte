<!-- <div class="experience">
rose 500: 
rose 400: fb7185
teal 400: 4fd1c5
</div> -->
<script>
  import { Text, Timeline } from '@svelteuidev/core';
  import ECard from './eCard.svelte';

  let roles = [ 
    {
        position: "Software Engineering Intern",
        company: "SHEDD CAPITAL",
        bullets: ["Followed agile and test-driven development processes to deliver new features and aid in a full front-end app migration from Django templates to Vue.js and Django REST, implementing 25% of all page migrations.",
                "Used Extract, Transform, Load (ETL) principles to maintain and add to a PostgreSQL database of 100,000+ companies from a variety of sources.",
                "Optimized an internal webcrawler to scrape target company website body texts, leading to an increase of webcrawl efficacy from 60% to 80%, which resulted in a 130% improvement in the full-text search output."],
        dates: "MAY 2023 - NOW"
    }, 
    
    {
        position: "Software Developer",
        company: "DISRUPTION LAB",
        bullets: ["Gies VR: Worked to develop an interactive Virtual Reality world using Unity, C#, Figma, and Git.", 
                "AI Essay: Created a tool using React, AWS, Python, and the OpenAI API to automate essay grading."],
        dates: "AUG. 2022 - NOW"
    }, 
    
    {
        position: "Research Assistant - SPIN Intern",
        company: "NATIONAL CENTER FOR SUPERCOMPUTING APPLICATIONS",
        bullets: ["Utilized Python and Jupyter Notebooks to package and publish machine-learning models to an open-source interface called DLHub.",
                  "Contibuted to an increased level of accessibility to computational models created by scientific researchers in the fields of physics, astronomy, biology, chemistry, and more."],
        dates: "DEC. 2022 - JUN. 2023"
    }, 
    
    {
        position: "SIG Discovery Day Participant",
        company: "SESQUEHANNA INTERNATIONAL GROUP, LLP",
        bullets: ["Attended a 2-day discovery day to network with students passionate about quantitative finance and employees at SIG.",
                "Learned about the quantitative finance industry and the role of SWEs and Quant Traders at SIG."],
        dates: "APR. 2023"
    }, 

    {
        position: "Software Developer",
        company: "YOUNG JAINS OF AMERICA",
        bullets: ["Designed & developed components of YJA mobile app used by 750+ individuals from around the country with Figma, Javascript, and React Native."],
        dates: "JUN. 2021 - AUG. 2021"
    }, 

    {
        position: "High School TARGET Program Intern",
        company: "FERMI NATIONAL ACCELERATOR LABORATORY",
        bullets: ["Collaborated with a team to analyze data from beam particle monitors within Fermilab's particle accelerators to fine-tune the success-rate of physics experiments, presenting findings to a board of scientists.",
                "Utilized Python libraries including Matplotlib, NumPy, and Pandas to efficiently clean, process, and visualize large tables of data.",
                "Attended physics lectures, virtual lab tours, networking and scientific panels, and professional development workshops."],
        dates: "JUN. 2021 - AUG. 2021"
    }, 

    {
        position: "Computer Science Tutor",
        company: "CODE NINJAS",
        bullets: ["Collaborated with other high schoolers to teach 30+ K-8th graders basic programming concepts, 5+ revise curriculums, and plan/run 5+ STEM summer camps."],
        dates: "FEB. 2021 - JUL. 2021"
    }, 
    ]
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
                <button onclick="window.location.href='https://drive.google.com/file/d/1K3TjK-Oa2pAxvjKGmF7AwzJudYazy5OK/view?usp=sharing';" class="rounded-md bg-teal-500 hover:bg-teal-800 text-white font-bold py-5 px-5 my-20"> 
                    <span class="text-l text-rose-100"> Check out my resume! </span>
                </button>
            </div>
        </div>

        <div class="basis-5/5 sm:basis-3/5 p-10">
            <Timeline color="#fb7185" active={roles.length} lineWidth={8} bulletSize={35}>
                {#each roles as role}
                    <ECard
                    position={role.position}
                    company={role.company}
                    bullets={role.bullets}
                    dates={role.dates}
                    />
                {/each}
            </Timeline>
        </div>
      
    </div>
    <div class="sm:hidden inline text-center"> 
            <button onclick="window.location.href='https://drive.google.com/file/d/1K3TjK-Oa2pAxvjKGmF7AwzJudYazy5OK/view?usp=sharing';" class="rounded-md bg-teal-500 hover:bg-teal-800 text-white font-bold py-5 px-5 mb-10 mx-20"> 
                <span class="text-l text-rose-100"> Check out my resume! </span>
            </button>  
    </div>
</div>

<style>

.experience {
    background-color: rgb(64, 64, 64);
    height: auto;

}
</style>