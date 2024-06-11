<script>
import AppStartLearning from "../components/AppStartLearning.vue"
import AppPercentage from "../components/AppPercentage.vue"
import AppCard from "../components/AppCard.vue"
import AppTestimonials from "../components/AppTestimonials.vue"
import AppLearnMore from "../components/AppLearnMore.vue"


export default {
    name: 'Homepage',
    data(){
        return{
            courses: [
                {
                    image: "courses-passplus.jpg",
                    title: "Pass Plus"
                },
                {
                    image: "courses-intensive.jpg",
                    title: "Intensive Course"
                },
                {
                    image: "courses-instructor.jpg",
                    title: "Instructors"
                }
            ]
        }
    },
    components: {
        AppStartLearning,
        AppPercentage,
        AppCard,
        AppTestimonials,
        AppLearnMore,
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
    <section id="jumbotron-section">
        <div class="container-lg text-white">
            <h1>Drive with Avada</h1>
            <h5>We offer the finest driving tuition money can buy</h5>
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
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- AppStartLearning component -->
    <AppStartLearning />

    <!-- courses section -->
    <section id="courses-section">
        <div class="container-lg">
            <div class="row">
                <div class="col-5 pe-5">
                    <div class="team-10-card">
                        
                    </div>
                </div>
                <div class="courses col-7 d-flex justify-content-between  gap-5 ">
                    <AppLearnMore v-for="course in courses" :imagePath="course.image" :title="course.title"/>
                </div>
            </div>
        </div>
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
        background-image: url("../assets/img/home/homepage-hero-background.jpg");
        background-size: cover;
        .container-lg{
            padding-top: 368px;
            padding-bottom: 232px;
        }

    }

    #behind-wheel-section{
        h2{
            margin-top: 100px;
            color: $color-title;
        }
        .team-10-card{
            height: 630px;
            position: relative;
            top: -40px;
        }
    }

    #courses-section{
        background-image: url("../assets/img/home/courses-background.png");
        background-size: cover;
        background-position: bottom;
        .team-10-card{
            position: relative;
            top: -30px;
            width: 100%;
            height: 400px;
        }
        
        .courses{
            padding-top: 78px;
        }


    }


</style>