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
    }
}
</script>

<template>

    <!-- jumbotron section -->
    <section id="jumbotron-section">

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
h1{
    text-align: center;
}
</style>