<script>
export default {
    name: 'Form'
}
</script>

<template>
    <div id="book_now">

        <div id="jumbotron_booknow">
            <div id="jumbo_text" class="container-lg d-flex h-100 align-items-end">
                <h1>Book Now</h1>
            </div>
        </div>

        <div id="text_section" class="container-lg d-flex flex-column py-5">
            <h2 class="py-3">We're waiting for your call</h2>
            <div class="row">
                <div class="col-7"><p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p></div>
                <div class="col"></div>
            </div>
        </div>

        <div id="quick_contact">

            <div class="container-lg d-flex flex-column py-5 team-10-card">
                <div class="row">

                    <div id="form_left_side" class="col-5">
                        <div>
                            <h3>Give us a call</h3>
                            <h2>1-800-555-555</h2>
                            <p>MONDAY-SATURDAY (8AM-8PM)</p>
                        </div>
                        <div>
                            <h3>Send us an email</h3>
                            <h2>info@your-domain.com</h2>
                            <p>24/7/365</p>
                        </div>
                    </div>

                    <div id="form_right_side" class="col">
                        <h3>Quick Contact</h3>
                        <div id="form">
                            <div class="row">
                                <div class="col-5 py-4">
                                    <label class="form-label">Your Name</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-5 py-4">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control">
                                </div>
                                <div class="col-5 py-4">
                                    <label class="form-label">Telephone</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-5 py-4">
                                    <label class="form-label">Location</label>
                                    <input type="email" class="form-control">
                                </div>
                                <div class="col-10 py-4">
                                    <label class="form-label" for="service">Service</label>
                                    <select id="service" class="form-select" aria-label="Default select example">
                                        <option selected value="Standard Tuition">Standard Tuition</option>
                                        <option value="Night Driving">Night Driving</option>
                                        <option value="Automatic">Automatic</option>
                                        <option value="Pass Plus">Pass Plus</option>
                                        <option value="Intensive Course">Intensive Course</option>
                                        <option value="Instructor">Instructor</option>
                                        <option value="Refresher Course">Refresher Course</option>
                                        <option value="Cab Driver Training">Cab Driver Training</option>
                                        <option value="Heavy Vehicule Training">Heavy Vehicule Training</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    #book_now{
        border: 1px solid black;
    }

    #jumbotron_booknow {
        background-image: url("../assets/img/booknow/book-now-hero-background.jpg");
        background-size:contain;
        height: 410px;
        width: 100%;
    }

    .team-10-card{
        border-top: 5px solid grey;
    }
    
    
</style>