<script>
import AppStartLearning from "../components/AppStartLearning.vue"
import AppPercentage from "../components/AppPercentage.vue"
import AppCard from "../components/AppCard.vue"
import AppTestimonials from "../components/AppTestimonials.vue"
import AppLearnMore from "../components/AppLearnMore.vue"

import { store } from '../store'

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
            ],
            store
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
                    <h2 class="team-10-text-dark">Get Behind the Wheel</h2>
                    <p class="big-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.</p>
                </div>
                <div class="col">
                    <div class="team-10-card text-center">
                        <h3 class="team-10-text-main">First Lesson Free</h3>
                        <p>When you make a block booking with us your first lesson is included free.</p>
                        <form action="/">
                            <input class="team-10-input" type="text" placeholder="Your Name*" required>
                            <input class="team-10-input" type="text" placeholder="Email*" required>
                            <input class="team-10-input" type="text" placeholder="Telephone">
                            <input class="team-10-input" type="text" placeholder="Location">
                            <button class="team-10-button button-green">REQUEST A CALLBACK</button>
                        </form>
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
                        <img class="positon-absolute" src="../assets/img/home/new-corner.png" alt="new image">
                        <h2 class="team-10-text-dark">Courses</h2>
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
    <div id="percentageCards" class="container-lg h-100 d-flex justify-content-between py-5 position-relative">
        <AppPercentage final-percentage="95" label-text="PASS RATE" /> 
        <AppPercentage final-percentage="100" label-text="REFERRAL RATE" /> 
        <AppPercentage final-percentage="0" label-text="ACCIDENT RATE" /> 
    </div>

    <!-- instructors section -->
    <section id="instructors-section">
        <!-- ->AppCard component  -->
        <div class="container-lg">
            <div class="row ">
                <div class="col-12">
                    <h1 class="py-4 team-10-text-dark">Your Instructors</h1>
                </div>
                <div class="col-7">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                </div>
                <div class="col-5">
                    <button class="btn">More About Us</button>
                </div>
            </div>
            <div class="row">
                <div class="col-4" v-for="(instructor, id) in store.instructors" :key="`instructor-${id}`">
                    <AppCard 
                    :name="instructor.name"
                    :description="instructor.shortDesc"
                    :image-path="instructor.picture.home"
                    :is-full-width="false"
                    />
                </div>
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
            
            <!-- card with arrow down image -->
            <div class="full-arrow-card">
                <div class="team-10-card text-center">
                    <div class="row px-5">
                        <div class="col-12">
                            <h2 class="py-5 fs-1 team-10-text-dark">Latest News</h2>
                        </div>
                        <div class="col-6">
                            <div class="image-container">
                                <img src="../assets/img/home/latest-news-car1.png" alt="img strana">
                            </div>
                            <h3 class="team-10-text-main">What a car</h3>
                            <p>Categories: General 0 Commentson What Car to Start With? Views: 7658</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="col-6">
                            <img src="../assets/img/home/latest-news-car2.png" alt="img strana">
                            <h3 class="team-10-text-main">Avada driving</h3>
                            <p>testo in piccolo</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="col-12">
                            <button class="team-10-button button-green">MORE FROM THE BLOG</button>
                        </div>
                    </div>
    
                </div>
                <img class="w-100" src="../assets/img/home/triangle-down.png" alt="">
            </div>
        </div>
    </section>

</div>

</template>

<style lang="scss" scoped>
    @use '../assets/scss/partials/variables' as *;

    // FONT SIZING
    h2{
        font-size: 40px;
    }

    h3{
        font-size: 30px;
    }

    h4{
        font-size: 21px;
    }


    #jumbotron-section{
        background-image: url("../assets/img/home/homepage-hero-background.jpg");
        background-size: cover;
        .container-lg{
            padding-top: 368px;
            padding-bottom: 232px;
        }

    }

    #behind-wheel-section{
        *{
            margin-bottom: 30px;
        }    
        
        h2{
            padding-top: 80px;
        }

        p.big-text{
            font-size: 22px;
        }

        .team-10-card{
            width: 100%;
            position: relative;
            top: -40px;
            padding: 40px;
        }
    }

    #courses-section{
        background-image: url("../assets/img/home/courses-background.png");
        background-size: cover;
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
        padding-top: 170px;
        padding-bottom: 130px;
    }

    #instructors-section{
        .container-lg{
            position: relative;
            top: 50px;
        }
    }

    #latest-news-section{
        background-image: url("../assets/img/home/latest-news-background.png");

        .full-arrow-card{
            position: relative;
            top: -40px;
        }
        .team-10-card{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            

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

        // .image-container:hover{
        //     background-size: 100%;
        //     background-image: url("../assets/img/home/mask-17.svg");
        //     background-position: center;
        //     background-size: cover;
        // }


    }

    



</style>