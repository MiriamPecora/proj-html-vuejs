<script>
import { store } from '../store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faCircleArrowRight)
library.add(faFacebookF, faXTwitter, faInstagram)

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
    <div>
        <h2 class="text-dark">{{ name }}</h2>
        <span>
            <font-awesome-icon icon="fa-brands fa-facebook-f"/>
            <font-awesome-icon icon="fa-brands fa-x-twitter"/>
            <font-awesome-icon icon="fa-brands fa-instagram"/>
        </span>
        <p>{{ description }}</p>
        <div :class="{'card-lg': isFullWidth}">
            <h5 class="fs-6 text-dark">LOCATIONS COVERED</h5>
            <ul>
                <li>
                    <font-awesome-icon icon="fa-solid fa-circle-arrow-right"/>
                    {{ locations }}
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-circle-arrow-right"/>
                    {{ locations }}
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-circle-arrow-right"/>
                    {{ locations }}
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-circle-arrow-right"/>
                    {{ locations }}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

img {
    width: 50%;
}
</style>