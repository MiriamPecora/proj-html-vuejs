<script>
import AppStartLearning from "../components/AppStartLearning.vue"
import AppPercentage from "../components/AppPercentage.vue"
import AppCard from "../components/AppCard.vue"
import AppTestimonials from "../components/AppTestimonials.vue"

export default {
    name: 'Homepage',
    components: {
        AppStartLearning,
        AppPercentage,
        AppCard,
        AppTestimonials
    },
    methods: {
        getImagesPath(image){
            // prende in input il nome del file
            return new URL("../assets/img/home/"+image, import.meta.url).href

        }
    }

}
</script>

<template>
<!-- MAIN -->
<div> 

    

    <!-- jumbotron section -->
    <section id="jumbotron-section" class="position-relative">
        <img class="h-100 w-100 object-fit-cover position-absolute z-n1" :src="getImagesPath('homepage-hero-background.jpg')" alt="jumbotron-background">
        <div class="container-lg text-white">
            <h1>Drive with Avada</h1>
            <h5>We offer the fines driving tuition money can buy</h5>
        </div>
    </section>

    <!-- behindWheel section -->
    <section id="behind-wheel-section">
        <div class="container-lg">
            <div class="row">
                <div class="col">
                    <h2>Get Behind the Wheel</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.</p>
                </div>
                <div class="col">
                    <div class="team-10-card">
                        ciao
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- AppStartLearning component -->
    <AppStartLearning />

    <!-- courses section -->
    <section>

    </section>

    <!-- AppPercentage component -->
    <AppPercentage />

    <!-- instructors section -->
    <section id="instructors-section">
        <!-- ->AppCard component  -->
        <AppCard />
        <AppCard />
        <AppCard />
    </section>

    <!-- AppTestimonials component -->
    <AppTestimonials />

    <!-- latest news section -->
    <section id="latest-news-section">

    </section>

</div>

</template>

<style lang="scss" scoped>
    @use '../assets/scss/partials/variables' as *;

    #jumbotron-section{

        .container-lg{
            padding: 368px 30px 232px 30px;
        }

    }

    #behind-wheel-section{
        h2{
            margin-top: 100px;
            color: $color-title;
        }
    }
    .team-10-card{
        height: 630px;
        position: relative;
        top: -40px;
    }


</style>