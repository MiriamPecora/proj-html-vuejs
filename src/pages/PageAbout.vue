<script>
import AppCard from "../components/AppCard.vue"
import AppTestimonials from "../components/AppTestimonials.vue"
export default {
    name: 'About',
    components: {
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
    <section id="jumbotron-section" class="position-relative">
        <img class="h-60 w-100 object-fit-cover position-absolute z-n1" :src="getImagesPath('default-ptb-retina.jpg')" alt="jumbotron-background">
        <div class="container-lg text-white">
            <h1 class="">About</h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#jumbotron-section{
    h1{
        font-size: 100px;
    }

    .container-lg{
        padding: 220px 30px 232px 30px;
    }

}
</style>