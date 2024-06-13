<script>
import { store } from "../store"
import AppStartLearning from "../components/AppStartLearning.vue"
import AppCard from "../components/AppCard.vue"
import AppTestimonials from "../components/AppTestimonials.vue"
export default {
    name: 'About',
    data() {
        return {
            store
        }
    },
    components: {
        AppStartLearning,
        AppCard,
        AppTestimonials
    }
}
</script>

<template>
<div>
    <!-- jumbotron section -->
    <section id="jumbotron-section">
        <div class="container-lg">
          <h1 class="">About</h1>
        </div>
    </section>
    <!-- mission section-->
     <section id="mission-section">
        <div class="container-lg pb-5">
          <div class="d-flex justify-content-between">
            <div class="w-50">
                <h1 class="text-dark">Mission Statement</h1>
                <p class="fs-4 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                <p class="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.</p>
                <img src="../assets/img/about/labels.webp" alt="" class="w-100 pt-2">
            </div>
            <div class="w-50 image-container">
                <img src="../assets/img/about/about-page-mike-intro-fade.webp" alt="" class="w-100 position-relative">
            </div>
          </div>
        </div>
     </section>
     <!-- card section -->
     <section id="instructors-section">
        <div class="container py-5">
            <h1 class="text-dark text-center pt-4">Our Team</h1>
            <p class="col-8 text-center fs-4 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
            <!-- AppCard component  -->
            <AppCard  v-for="(instructor, index) in store.instructors" :image-path="instructor.picture.about" :name="instructor.name"
            :description="instructor.description" :locations="instructor.locations" :is-full-width="true" />
        </div>
    </section>
    <!-- promise section -->
    <section id="promise-section">
        <div class="container text-center py-5">
            <h1 class="text-dark pt-4">Our Promise</h1>
            <p class="fs-4 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
            <div class="row d-flex">
                <div class="col">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item border-2 border-secondary-subtle rounded-0">
                          <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              High Rate of Success
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" >
                            <div class="accordion-body text-start mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-2 border-secondary-subtle rounded-0 my-3 border-top">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Zero Accident Rate
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" >
                            <div class="accordion-body text-start mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-2 border-secondary-subtle rounded-0 border-top">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              We're Never Late
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" >
                            <div class="accordion-body text-start mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item border-2 border-secondary-subtle rounded-0">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Price Promise
                            </button>
                          </h2>
                          <div id="collapseFour" class="accordion-collapse collapse" >
                            <div class="accordion-body text-start mx-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-2 border-secondary-subtle rounded-0 my-3 border-top">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              True Professionals
                            </button>
                          </h2>
                          <div id="collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body text-start mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-2 border-secondary-subtle rounded-0 border-top">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                              We Work Around You
                            </button>
                          </h2>
                          <div id="collapseSix" class="accordion-collapse collapse" >
                            <div class="accordion-body text-start mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
    <!-- learning components -->
    <AppStartLearning/>
    <!-- testimonials components -->
    <section id="testimonial-section">
        <AppTestimonials class="py-5"/>
    </section>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#jumbotron-section{
    
    background-image: url("../assets/img/about/default-ptb-retina.jpg");
    background-size: cover;
    padding-top: 250px;
    h1{
        font-size: 70px;
    }
}

#mission-section{
  .image-container{

    img{
      top: -100px;
    }
  }
}

#instructors-section {
    background-color: $bg-about;
}

#promise-section {
    background-image: url(../assets/img/about/about-promise-background.jpg);
}

#testimonial-section {
    background-image: url(../assets/img/testimonials/testimonial-background.jpg);
}

.accordion-button {
    color: $color-main;
    font-weight: 500;
}

.accordion-button:not(.collapsed) {
    background-color: #fff;
    box-shadow: none;
}

.accordion-button:focus {
    box-shadow: none;
}

.accordion-button::after {
    margin-left: 0;
    width: 0;
    height: 0;
}

.accordion-button::before {
    margin-left: 10px;
    margin-right: 20px;
    flex-shrink: 0;
    width: var(--bs-accordion-btn-icon-width);
    height: var(--bs-accordion-btn-icon-width);
    content: "+";
    transition: var(--bs-accordion-btn-icon-transition);
}

.accordion-button:not(.collapsed)::before {
    content: "-";
}
</style>