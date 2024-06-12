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
<img :src="getImagesPath('background-car.png')" alt="background car">
<div class="container d-flex justify-content-between">
    <div>
        <h1 class="text-dark">Start Learning to Drive Today</h1>
        <p class="text-dark">Give us a call to schedule your first driving lesson</p>
    </div>
    <div>
        <p class="text-dark fs-2">
            <font-awesome-icon class="me-3" icon="fa-solid fa-phone"/> 1-800-555-555
        </p>
    </div>
</div>
</template>

<style lang="scss" scoped>
img{
    height: 265px;
    width: 100%;
    display: block;
    object-fit: cover;
}
</style>