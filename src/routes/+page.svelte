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

<div>
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
        background-image: url("src/assets/pfp_dark.png");
        background-size:cover;
        background-position-y: 1000%;
        background-position-x: 50% ;
        background-repeat: no-repeat;
    }
 }
</style>
