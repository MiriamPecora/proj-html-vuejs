<script>
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone)

export default {
    name: 'Start Learning',
    methods: {
        getImagesPath(image){
            // prende in input il nome del file
            return new URL("../assets/img/learning/"+image, import.meta.url).href
        }
    }
}
</script>

<template>
    <div id="start-learning-component">
        <div class="container-lg d-flex justify-content-between align-items-center">
            <div>
                <h1>Start Learning to Drive Today</h1>
                <p>Give us a call to schedule your first driving lesson</p>
            </div>
            <div>
                <p class="fs-2">
                    <font-awesome-icon class="me-3" icon="fa-solid fa-phone"/> 1-800-555-555
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#start-learning-component{
    background-image: url(../assets/img/learning/background-car.png);
    background-size: cover;
    background-position: bottom;
    padding-top: 40px;
    padding-bottom: 40px;

    * {
        color: white;
    }
}

img{
    height: 265px;
    width: 100%;
    display: block;
    object-fit: cover;
    position: absolute;
    z-index: -1;
}
</style>