<script>
    
    import { library } from '@fortawesome/fontawesome-svg-core';

    import { faPhone, faHouse, faTurnUp, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

    library.add(faPhone, faHouse, faEnvelope, faTurnUp, faCircleArrowRight)

    export default {
        name: 'Footer'
    }
    
</script>

<template>
    <footer>

        <div id="newsletter">
            <div class="container-lg d-flex justify-content-center py-5">
                <div class="col-6 d-flex text-center flex-column gap-4">
                    <h3 class="fs-2">Sign up to our Newsletter</h3>
                    <input type="email" class="form-control">
                    <button class="btn rounded-5 px-4 py-2 fw-semibold text-white">SUBSCRIBE</button>
                    <span>(We do not share your data with anybody, and only use it for its intended purpose)</span>  
                </div>
                
            </div>
        </div>
        
        <div id="top_footer">
            <div class="container-lg d-flex justify-content-between py-5">
                <div class="row">
                    <div class="col">
                        <div class="content">
                            <img class="pb-4" src="../assets/img/header/avada-drivers-logo-1x.webp" alt="">
                            <p class="pb-5 lh-lg">Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.</p>
                            <button class="btn rounded-5 btn-outline-secondary px-4 py-2 fw-semibold">MORE ABOUT US</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Driving Courses</h4>
                            <ul class="d-flex flex-column gap-3">
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2" icon="fa-solid fa-circle-arrow-right" />Basic Driving Course</a>
                                </li>
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2" icon="fa-solid fa-circle-arrow-right" />Pass Plus Driving Course</a>
                                </li>
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2" icon="fa-solid fa-circle-arrow-right" />Intensive Driving Course</a>
                                </li>
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2" icon="fa-solid fa-circle-arrow-right" />Instructors Training</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Contact Details</h4>
                            <ul class="d-flex flex-column gap-3">
                                <li>
                                    <span><font-awesome-icon class="me-2" icon="fa-solid fa-house" />50 North Main Street <br>
                                    New York, NY 98765</span>
                                </li>
                                <li>
                                    <span><font-awesome-icon class="me-2" icon="fa-solid fa-phone" />Toll Free: 1-800-555-555</span>
                                </li>
                                <li>
                                    <span><font-awesome-icon class="me-2" icon="fa-regular fa-envelope" />info@your-domain.com</span>
                                </li>
                                <li>
                                    <span><font-awesome-icon class="me-2" icon="fa-solid fa-turn-up" />Mon to Sat: 8 am – 5 pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Book Free Class</h4>
                            <img class="pb-4" src="../assets/img/footer/blogpost-ten.jpg" alt="">
                            <button id="greenbtn" class="btn rounded-5 px-4 py-2 fw-semibold text-white" type="submit">BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="bottom_footer">
            <div class="container-lg d-flex justify-content-between py-5">
                <div class="row w-100">
                    <div class="col-sm-6 col-md-8 d-flex align-items-center">
                        <div class="content text-nowrap">
                            <p class="size_sm">© Copyright 2012 - 2024 | Avada Theme by <span class="highlight">ThemeFusion</span> | All Rights Reserved | Powered by <span class="highlight">WordPress</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 d-flex justify-content-end align-items-center">
                    <div class="content">
                        <ul class="d-flex flex-row gap-3 mb-0">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
</template>

<style lang="scss" scoped>

    @use '../assets/scss/partials/variables' as *;

    a {
        text-decoration: none;
        color: $color-text;
    }

    #newsletter {
        background-image: url("../assets/img/footer/newsletter_background.jpg");
        background-size:cover;

        h3 {
            color: $color-title;
        }

        button {
            background-color: $color-main;
        }
    }

    #top_footer {
        background-image: url("../assets/img/footer/footer-background-color.jpg");
        background-size:cover;

        img {
            width: 250px;
        }
    }

    #greenbtn{
        background-color: $color-main;
    }

    #bottom_footer {
        background-color: $bg-dark;

        .size_sm {
            font-size: 12px;
        }
    }

    .highlight {
        color: $color-main;
    }
    
</style>