<script>
    
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
                                    <a href="/">Basic Driving Course</a>
                                </li>
                                <li>
                                    <a href="/">Pass Plus Driving Course</a>
                                </li>
                                <li>
                                    <a href="/">Intensive Driving Course</a>
                                </li>
                                <li>
                                    <a href="/">Instructors Training</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="content mt-3">
                            <h4 class="pb-4">Contact Details</h4>
                            <ul class="d-flex flex-column gap-3">
                                <li>
                                    <span>50 North Main Street <br>
                                    New York, NY 98765</span>
                                </li>
                                <li>
                                    <span>Toll Free: 1-800-555-555</span>
                                </li>
                                <li>
                                    <span>info@your-domain.com</span>
                                </li>
                                <li>
                                    <span>Mon to Sat: 8 am – 5 pm</span>
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

    </footer>
</template>

<style lang="scss" scoped>

    @use '../assets/scss/partials/variables' as *;

    a {
        text-decoration: none;
        color: $color-text ;
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

    // .col {
    //     border: solid black 1px;
    // }
</style>