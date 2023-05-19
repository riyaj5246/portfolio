<!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->

<script>
    import Navbar from "./navbar.svelte";
    import Homepage from "./homepage.svelte";
    import Picture from "../assets/profile.png";
    import About from "./about.svelte";
</script>

<Navbar/>

<div class="riya">
<Homepage/>
<About/>
</div>

<style>
.riya {
    background-color: #404040;
}
@media (max-width: 1024px) { 
    .riya {
        background-image: url("src/assets/pfp_dark.png");
        background-size:cover;
        background-position: 50%;
        background-repeat: no-repeat;
    }
 }
</style>
