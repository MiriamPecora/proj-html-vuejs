<script>
import { store } from '../store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook)
library.add(faXTwitter)
library.add(faInstagram)

export default {
    name: 'Card',
    data() {
        return {
           store,
           pathFolder: '../assets/img/cards/', 
        }
    },
    props: {
        name: String,
        role: String,
        description: String,
        locations: Array,
        isFullWidth: Boolean,
        imagePath: String,
    },
    methods: {
        
    },
    computed: {
        imageUrl() {
            console.log(this.pathFolder + this.imagePath)
            return new URL(this.pathFolder + this.imagePath + '.jpg', import.meta.url).href;
        }
    }
}
</script>

<template>
<div class="team-10-card" :class="{'card-lg': isFullWidth}">
    <div>
        <img :src="imageUrl" :alt="this.name">
    </div>
    <h2>{{ name }}</h2>
    <span>
        <font-awesome-icon icon="fa-brands fa-facebook"/>
        <font-awesome-icon icon="fa-brands fa-x-twitter"/>
        <font-awesome-icon icon="fa-brands fa-instagram"/>
    </span>
    <p>{{ description }}</p>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

img {
    width: 50%;
}
</style>