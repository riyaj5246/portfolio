<!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->

<script>
    import Navbar from "./navbar.svelte";
    import Homepage from "./homepage.svelte";
    import Picture from "../assets/profile.png";
    import About from "./about.svelte";
    import Experience from "./experience.svelte"
    import Projects from "./projects.svelte"
</script>

<Navbar/>


<div class="overflow-y-hidden">
    <section id="homepage">
    <div class="riya">
        <Homepage/>
    </div>
    </section>
    <section id = "about">
<About/>
</section>
<section id="experience">
<Experience/>
</section>
<section id="projects">
<Projects/>
</section>
</div>

<style>
.riya {
    background-color: #404040;
}
@media (max-width: 1024px) { 
    .riya {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/trialproject2-74281.appspot.com/o/pfp_dark_unused.png?alt=media&token=becc3a81-680d-4320-a774-b93b2cb35fc6");
        background-size:cover;
        /* background-position-y: 1000%; */
        background-position-x: 50% ;
        background-repeat: no-repeat;
    }
 }
</style>
