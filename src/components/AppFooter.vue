<script>
    
    import { library } from '@fortawesome/fontawesome-svg-core';

    import { faPhone, faHouse, faTurnUp, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

    import { faFacebookF, faXTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

    library.add( faFacebookF, faXTwitter, faYoutube, faInstagram )
    library.add( faPhone, faHouse, faEnvelope, faTurnUp, faCircleArrowRight )

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
                    <input type="email" class="team-10-input">
                    <button class="team-10-button button-green">SUBSCRIBE</button>
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
                            <p class="lh-lg pe-5">Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.</p>
                            <button class="team-10-button button-gray">
                                <router-link :to="{ name: 'About' }" class="text-decoration-none">
                                    MORE ABOUT US
                                </router-link>
                            </button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Driving Courses</h4>
                            <ul class="d-flex flex-column gap-3">
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2 team-10-text-main" icon="fa-solid fa-circle-arrow-right" /><span>Basic Driving Course</span></a>
                                </li>
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2 team-10-text-main" icon="fa-solid fa-circle-arrow-right" /><span>Pass Plus Driving Course</span></a>
                                </li>
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2 team-10-text-main" icon="fa-solid fa-circle-arrow-right" /><span>Intensive Driving Course</span></a>
                                </li>
                                <li>
                                    <a href="/"><font-awesome-icon class="me-2 team-10-text-main" icon="fa-solid fa-circle-arrow-right" /><span>Instructors Training</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Contact Details</h4>
                            <ul class="d-flex flex-column gap-3">
                                <li>
                                    <span><font-awesome-icon class="me-2 team-10-text-white" icon="fa-solid fa-house" />50 North Main Street <br>
                                    <span class="ps-4">New York, NY 98765</span></span>
                                </li>
                                <li>
                                    <span><font-awesome-icon class="me-2 team-10-text-white" icon="fa-solid fa-phone" />Toll Free: 1-800-555-555</span>
                                </li>
                                <li>
                                    <span><font-awesome-icon class="me-2 team-10-text-white" icon="fa-regular fa-envelope" />info@your-domain.com</span>
                                </li>
                                <li>
                                    <span><font-awesome-icon class="me-2 team-10-text-white" icon="fa-solid fa-turn-up" />Mon to Sat: 8 am – 5 pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Book Free Class</h4>
                            <img class="pb-4 w-100" src="../assets/img/footer/blogpost-ten.jpg" alt="">
                            <button class="team-10-button button-green" type="submit">
                                <router-link :to="{ name: 'Book' }" class="text-white text-decoration-none">
                                    BOOK NOW
                                </router-link>
                            </button>
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
                            <p class="size_sm">© Copyright 2012 - 2024 | Avada Theme by <span class="team-10-text-main">ThemeFusion</span> | All Rights Reserved | Powered by <span class="team-10-text-main">WordPress</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 d-flex justify-content-end align-items-center">
                    <div class="content">
                        <ul class="d-flex flex-row gap-3 mb-0">
                            <li><font-awesome-icon icon="fa-brands fa-facebook-f"/></li>
                            <li><font-awesome-icon icon="fa-brands fa-x-twitter"/></li>
                            <li><font-awesome-icon icon="fa-brands fa-youtube"/></li>
                            <li><font-awesome-icon icon="fa-brands fa-instagram"/></li>
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
        font-weight: bold;

        &:hover {
             .team-10-text-main * {
             color: white;
            }

            span {
            color: $color-main;
            }
        }
    }

    #newsletter {
        background-image: url("../assets/img/footer/newsletter_background.jpg");
        background-size:cover;

        h3 {
            color: $color-title;
        }
    }

    #top_footer {
        background-image: url("../assets/img/footer/footer-background-color.jpg");
        background-size:cover;

        img {
            width: 250px;
        }

        ul {
            padding-left: 0;
        }
    }

    #bottom_footer {
        background-color: $bg-dark;

        .size_sm {
            font-size: 12px;
        }
    }
    
</style>