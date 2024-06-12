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
    <img class="w-100 position-absolute z-n1" src="../assets/img/home/triangle-down-gray.png" alt="triangolo">

    <!-- AppPercentage component -->
    <AppPercentage />

    <!-- instructors section -->
    <section id="instructors-section">
        <!-- ->AppCard component  -->
        <div class="container-lg">
            <div class="row ">
                <div class="col-12">Ciao</div>
                <div class="col-7">come</div>
                <div class="col-5">va</div>
            </div>
            <div class="row">
                <AppCard />
                <AppCard />
                <AppCard /> 
            </div>
        </div>
    </section>

    <!-- AppTestimonials component -->
    <section id="testimonial-section">
        <AppTestimonials />
    </section>

    <!-- latest news section -->
    <section id="latest-news-section">
        <div class="container-lg">
            <div class="team-10-card row">
                <div class="col-12">
                    <h2>Latest News</h2>
                </div>
                <div class="col-6">
                    <div class="image-container">
                        <img src="../assets/img/home/latest-news-car1.png" alt="img strana">
                    </div>
                    <h3>What a car</h3>
                    <p>testo in piccolo</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="col-6">
                    <img src="../assets/img/home/latest-news-car2.png" alt="img strana">
                    <h3>Avada driving</h3>
                    <p>testo in piccolo</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="col-12">
                    <button class="btn btn-success">MORE FROM THE BLOG</button>
                </div>

            </div>
        </div>
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
        padding-bottom: 100px;

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

    #testimonial-section{
        background-image: url("../assets/img/testimonials/testimonial-background.jpg");
    }

    #latest-news-section{
        background-image: url("../assets/img/home/latest-news-background.png");

        .team-10-card{
            border-bottom: 0;
        }

        // .image-container:hover{
        //     background-size: 100%;
        //     background-image: url("../assets/img/home/mask-17.svg");
        //     background-position: center;
        //     background-size: cover;
        // }

        img{
            width: 100%;
            

            mask-image: url("../assets/img/home/mask-17.svg");
            mask-position: center;
            mask-size: cover;
            transition: all 0.4s;


            &:hover{
                perspective: 100px;
                transform: scale(1.03);
            }
        }

    }


</style>