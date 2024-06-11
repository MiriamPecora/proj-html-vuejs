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

</template>

<style lang="scss" scoped>
#jumbotron-section{

    .container-lg{
        padding: 368px 30px 232px 30px;
    }
}


</style>