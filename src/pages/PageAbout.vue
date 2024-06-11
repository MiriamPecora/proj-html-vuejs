<script>
import AppStartLearning from "../components/AppStartLearning.vue"
import AppCard from "../components/AppCard.vue"
import AppTestimonials from "../components/AppTestimonials.vue"
export default {
    name: 'About',
    components: {
        AppStartLearning,
        AppCard,
        AppTestimonials
    },
    methods: {
        getImagesPath(image){
            // prende in input il nome del file
            return new URL("../assets/img/about/"+image, import.meta.url).href
        }
    }
}
</script>

<template>
<div>
    <!-- jumbotron section -->
    <section id="jumbotron-section">
        <img class="h-60 w-100" :src="getImagesPath('default-ptb-retina.jpg')" alt="jumbotron-background">
        <h1 class="">About</h1>
    </section>
    <!-- mission section-->
     <section>
        <div class="container-lg d-flex pb-5">
            <div class="col-5">
                <h1 class="text-dark">Mission Statement</h1>
                <p class="fs-4 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                <p class="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.</p>
                <img src="../assets/img/about/labels.webp" alt="" class="h-25 pt-2">
            </div>
            <div class="col">
                <img src="../assets/img/about/about-page-mike-intro-fade.webp" alt="" class="h-100 position-absolute">
            </div>
        </div>
     </section>
     <!-- card section -->
     <section id="instructors-section">
        <div class="container text-center py-5">
            <h1 class="text-dark pt-4">Our Team</h1>
            <p class="fs-4 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
            <!-- ->AppCard component  -->
            <AppCard/>
            <AppCard/>
            <AppCard/>
        </div>
    </section>
    <!-- promise section -->
    <section id="promise-section">
        <div class="container text-center py-5">
            <h1 class="text-dark pt-4">Our Promise</h1>
            <p class="fs-4 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
            <div class="row d-flex">
                <div class="col">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div class="col">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
        </div>
    </section>
    <!-- learning components -->
    <AppStartLearning/>
    <!-- testimonials components -->
    <AppTestimonials/>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#jumbotron-section{
    h1{
        font-size: 70px;
    }

    .container-lg{
        padding: 0px 0px;
    }
}

#instructors-section {
    background-color: $bg-about;
}

#promise-section {
    background-image: url(../assets/img/about/about-promise-background.jpg);
}
</style>