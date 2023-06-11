<script>
  import { Card, Button } from "flowbite-svelte";
  export let name;
  export let description;
  export let skills;
  export let img_path;
  export let title_size;
</script>

<div class="dog mx-8">
    <!-- img="src/assets/dog.jpeg" -->
  <!-- <Card href="/" size='s' color="none" border="false"> -->
    <div class="flex flex-horizontal pt-10 pl-10 pr-10">
    <div class="basis-2/4 mx-5 mt-5">
        <img class="w-max h-max border-normal rounded-md border-rose-400 border-4 pic" src={img_path} alt="None"/>
    </div>
    <div class="basis-2/4 mx-5">
        <h5 class="mb-7 text-{title_size} font-bold tracking-normal text-rose-100 dark:text-rose-100">{name}</h5>
        <p class="my-5 text-xl font-normal text-rose-100 dark:text-rose-100 leading-relaxed ">{description}       </p>
    </div>
    </div>
    <p class="py-10 text-xl text-teal-400 italic dark:text-teal-400 font-medium tracking-wider">{skills}
    </p>
</div>


<style>
    .dog{
       border-radius: 1rem; 
       background-color: rgba(64, 64, 64, 1);
       border-color: rgba(221, 86, 94, 1);
       border-width: 5px;
       filter: drop-shadow(0 20px 13px rgb(221 86 94 / 0.3)) drop-shadow(0 8px 5px rgb(211 86 94 / 0.2));
      }
</style>