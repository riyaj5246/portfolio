<script>

    import { Swipe, SwipeItem } from "svelte-swipe";
    import PCard from './pcard.svelte'
    import MediaQuery from "./MediaQuery.svelte";
    import PCardPhone from './pcardphone.svelte';

    
  const swipeConfig = {
    autoplay: false,
    delay: 1000,
    showIndicators: true,
    transitionDuration: 500,
    defaultIndex: 0,
  };

  let SwipeComp;

  function nextSlide(){
   SwipeComp.nextItem()
  }

  function prevSlide(){
    SwipeComp.prevItem()
  }

  let project_info = [
    {name: "DermaVision", 
    description: "A Swift app to increase accessibility to medical knowledge on skin cancer with a machine learning algorithm to detect healthy skin, benign tumors, and malignant tumors. Includes a UV Index Forecast, skin health log, and location-based sunscreen reminders.", 
    skills: "Swift | SwiftUI | Firebase | TensorflowLite | Python | Kaggle | Git | Figma",
    img_path: "https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/dermavision.png?alt=media&token=e79521c5-e928-4e16-a123-994903fb0741&_gl=1*94w30t*_ga*NDM2Nzc2MjY5LjE2ODY0NTA0NTM.*_ga_CW55HF8NVT*MTY4NjUwOTI0NC4yLjEuMTY4NjUwOTQ5Ny4wLjAuMA..",
    title_size: "5xl"}, 
    
    {name: "BookWorm",
    description: "A platform to give users book recommendations based on genre and topic preferences. Users can save books they are interested in reading based on our curated recommendation algorithm and manual searching. ",
    skills: " React.JS  |  Vite  |  TypeScript | Auth0  |  Yarn  |  Express  |  ChakraUI | Git ",
    img_path: "https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/bookworm.png?alt=media&token=7bbbb3c0-f740-46e0-8c45-d3ed54ddbd02&_gl=1*14yt5wz*_ga*NDM2Nzc2MjY5LjE2ODY0NTA0NTM.*_ga_CW55HF8NVT*MTY4NjUwOTI0NC4yLjEuMTY4NjUwOTQ3MS4wLjAuMA..",
    title_size: "5xl" }, 
    
    {name: "Covid-19 Simulator",
    description: "A live simulation showcasing the contraction, spread, vaccine & natural immunization, and death due to COVID-19 within a confined and small population. Displays information with a dynamic colored grid, multiple graphs, and medical forms for each individual.",
    skills: " Java | JavaFX | JSON | Git",
    img_path:"https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/covid.png?alt=media&token=180caa98-183f-49e2-aa21-a7531d2fbb8c&_gl=1*oqulbw*_ga*NDM2Nzc2MjY5LjE2ODY0NTA0NTM.*_ga_CW55HF8NVT*MTY4NjUwOTI0NC4yLjEuMTY4NjUwOTM3NS4wLjAuMA..",  
    title_size: "4xl"}
    ]

</script>

<style>
  .swipe-holder{
    height: 80vh;
    width: 100%;
    justify-self: center;
  }

  .projects {
    background-image: url("../assets/abt_bg.png");
    font-size: large;
    height: auto;
    width: 100%;
}
.glass_overlay{
    /* background: rgba(64, 64, 64, 0.6); */
        background: #31979560;

    backdrop-filter: blur(8.6px);
    -webkit-backdrop-filter: blur(8.6px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}

.title {
    color: rgb(64,64,64);
}
</style>

<div class="projects">
    <div class="glass_overlay flex-col">

    <div class = "text-center pt-16" >
        <p class = "pb-10 title md:text-center text-left text-5xl md:text-6xl subpixel-antialiased font-bold tracking-wide">My Projects</p>
    </div>

    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
    <div class="swipe-holder text-center flex flex-row xl:visible invisible">

        <div class="left-button basis-1/12 py-24"> 
            <button on:click={prevSlide} type="button" >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(89.84902723735408 89.84902723735405) scale(0.84 0.84)" >
                    <polygon points="20.48,45 59.75,90 69.52,81.48 37.69,45 69.52,8.52 59.75,0 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(64,64,64); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                </g>
                </svg>
            </button>
        </div>

        <div class="flex-col basis-10/12">
            <Swipe bind:this={SwipeComp} {...swipeConfig} >
                {#each project_info as project, i}
                <SwipeItem>
                    <PCard name={project_info[i].name} 
                    description={project_info[i].description}
                    skills={project_info[i].skills}
                    img_path={project_info[i].img_path}
                    title_size={project_info[i].title_size}/>
                </SwipeItem>
                {/each}
            </Swipe> 
        </div>

        <div class="right-button basis-1/12 py-24">
            <button type="button" on:click={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(165.15486381322958 165.15486381322955) rotate(180) scale(0.84 0.84)" >
                    <polygon points="20.48,45 59.75,90 69.52,81.48 37.69,45 69.52,8.52 59.75,0 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill: rgb(64,64,64); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                </g>
                </svg>
            </button>
        </div>
    </div>
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 1280px) and (min-width: 900px)" let:matches>
{#if matches}
 <div class="flex-col basis-10/12">
    {#each project_info as project, i}
    <div class= "px-28 py-10 text-center">
            <PCard name={project_info[i].name} 
            description={project_info[i].description}
            skills={project_info[i].skills}
            img_path={project_info[i].img_path}
            title_size={project_info[i].title_size}/>
     </div>
    {/each}
</div>
{/if}
 </MediaQuery>

 <MediaQuery query="(max-width: 900px)" let:matches>
{#if matches}
 <div class="flex-col basis-10/12 pb-40">
    {#each project_info as project, i}
    <div class= "px-28 py-10 text-center">
        <PCardPhone name={project_info[i].name} 
        description={project_info[i].description}
        skills={project_info[i].skills}
        img_path={project_info[i].img_path}
        title_size={'3xl'}/>
     </div>
    {/each}
</div>

{/if}
 </MediaQuery>
    </div>
</div>
