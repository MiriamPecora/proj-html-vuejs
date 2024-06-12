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
        

    </footer>
</template>

<style lang="scss" scoped>

    @use '../assets/scss/partials/variables' as *;

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

</style>