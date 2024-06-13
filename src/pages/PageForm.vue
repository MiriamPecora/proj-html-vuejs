<script>
import AppPercentage from "../components/AppPercentage.vue";
import AppTestimonials from "../components/AppTestimonials.vue"

export default {
    name: 'Form',
    components: {
        AppTestimonials,
        AppPercentage,
    },
    data() {
        return {
            inputNames: [
                "Your Name",
                "Email",
                "Telephone",
                "Location",
            ],
            options: [
                "Standard Tuition",
                "Night Driving",
                "Automatic",
                "Pass Plus",
                "Intensive Course",
                "Instructor",
                "Refresher Course",
                "Cab Driver Training",
                "Heavy Vehicule Training",
            ]
        }
    },
}


</script>

<template>
    <div id="book_now">

        <div id="jumbotron_booknow">
            <div id="jumbo_text" class="container-lg d-flex h-100 align-items-end">
                <h1 class="text-white">Book Now</h1>
            </div>
        </div>

        <div id="text_section" class="container-lg d-flex flex-column py-5">
            <h2 class="py-3 dark_grey fs-1">We're waiting for your call</h2>
            <div class="row">
                <div class="col-7 fs-4"><p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p></div>
                <div class="col"></div>
            </div>
        </div>

        <div id="quick_contact" class="py-5">
            <div class="container-lg h-100 d-flex flex-column py-5 team-10-card card-border position-relative mb-5">
                <div class="row mx-auto">

                    <div id="form_left_side" class="col-4">
                        <div>
                            <h3 class="dark_grey fs-2">Give us a call</h3>
                            <h2 class="py-3 green_txt fs-1">1-800-555-555</h2>
                            <p class="pb-4 fs-5 fw-semibold ">MONDAY-SATURDAY (8AM-8PM)</p>
                        </div>
                        <hr>
                        <div>
                            <h3 class="pt-4 dark_grey fs-2">Send us an email</h3>
                            <h3 class="py-3 green_txt fs-2">info@your-domain.com</h3>
                            <p class="fs-6 fw-semibold">24/7/365</p>
                        </div>
                    </div>

                    <div id="form_right_side" class="col">
                        <h3 class="dark_grey fs-2">Quick Contact</h3>
                        <div id="form">
                            <div class="row">
                                <div class="col-6 py-4" v-for="inputName in inputNames">
                                    <label class="form-label">{{ inputName }}</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-12 py-4">
                                    <label class="form-label" for="service">Service</label>
                                    <select id="service" class="form-select" aria-label="Default select example">
                                        <option v-for="option in options" :value="option"> {{ option }} </option>
                                    </select>
                                </div>
                                <div class="col-12 py-4">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-control"></textarea>
                                </div>
                                <div class="col">
                                    <button class="btn rounded-5 px-4 py-2 fw-semibold text-white" type="submit">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="treeBackground">
            <div id="percentageCards" class="container-lg h-100 d-flex justify-content-between py-5 position-relative">
                <AppPercentage final-percentage="95" label-text="PASS RATE" /> 
                <AppPercentage final-percentage="100" label-text="REFERRAL RATE" /> 
                <AppPercentage final-percentage="0" label-text="ACCIDENT RATE" /> 
            </div>
            
            <div id="testimonialsSection" class="pb-5">
                <AppTestimonials />
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    @use '../assets/scss/partials/variables' as *;

    #jumbotron_booknow {
        background-image: url("../assets/img/booknow/book-now-hero-background.jpg");
        background-size:cover;
        height: 410px;
        width: 100%;
    }

    #quick_contact {
        background-image: url("../assets/img/booknow/latestnews-background.jpg");
        background-size:cover;
        width: 100%;
        height: 100%;
    }

    #form {
        input, select, textarea {
            background-color: $bg-about;
        }

        button {
        background-color: $color-main;
        }  
    }

    #percentageCards {
        top: -90px;
    }

    #treeBackground {
        background-image: url("../assets/img/testimonials/testimonial-background.jpg");
        background-size:cover;
        width: 100%;
        height: 100%;
    }

    .card-border{
        border-top: 5px solid $bg-dark-semitransparent;
        top: -90px
    }

    // TEXT
    .dark_grey {
        color: $color-title;
    }

    .green_txt {
        color: $color-main;
    }
    
</style>