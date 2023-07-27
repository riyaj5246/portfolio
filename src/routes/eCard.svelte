<script>
  import { Text, Timeline } from '@svelteuidev/core';
  let isOpened = false;
  function toggle() {
    isOpened = !isOpened;
  }
  export let position;
  export let company;
  export let bullets;
  export let dates;
</script>
  
<Timeline.Item >
    <p class=" text-2xl font-bold tracking-wide text-rose-100">
    {position}
    <p>
    <p class=" text-l font-extrabold tracking-wide text-teal-400">
    {company}
    <p>
    {#if isOpened}
        <div class="">
            <ul class=" list-disc list-inside text-l text-rose-100">
                {#each bullets as bullet, i}
                <li class="py-1 font-light"> {bullet} </li>
                {/each}
            <ul>
        </div>
    {/if}
    
    <p class=" pt-1 text-s font-semibold tracking-wide text-rose-400">
    {dates}
    <p>
    {#if !isOpened}
    <button on:click={toggle} class="font-bold tracking-wide text-sm text-rose-100 mt-1 bg-teal-400 rounded-lg px-2"> Expand </button>
    {/if}
    {#if isOpened}
    <button on:click={toggle} class="font-bold tracking-wide text-sm text-rose-100 mt-1 bg-teal-600 rounded-lg px-2"> Collapse </button>
    {/if}
</Timeline.Item>