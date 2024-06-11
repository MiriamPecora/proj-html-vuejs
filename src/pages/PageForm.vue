<script>
export default {
    name: 'Form'
}
</script>

<template>
    <div id="book_now">
        <div>
            <h1>Book Now</h1>
        </div>

        <div id="text_section">
            <h2>We're waiting for your call</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>    
        </div>

        <div class="container text-center">
            <div class="row align-items-start">

                <div id="form_left_side" class="col">
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
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
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
        text-align: center;
        margin-top: 150px;
    }

</style>