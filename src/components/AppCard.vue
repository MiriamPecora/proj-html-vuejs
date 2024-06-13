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
<div class="team-10-card position-relative" :class="{'card-lg': isFullWidth}">
    <!-- immagine -->
    <div class="image-container">
        <img :src="imageUrl" :alt="this.name">
    </div>
    
    <!-- testi e descrizioni -->
    <div class="content-container">
        <h2 class="team-10-text-dark py-2">{{ name }}</h2>
        <p v-show="isFullWidth" class="mb-4">{{ role }}</p>
        <span class="icons">
            <font-awesome-icon icon="fa-brands fa-facebook-f"/>
            <font-awesome-icon icon="fa-brands fa-x-twitter"/>
            <font-awesome-icon icon="fa-brands fa-instagram"/>
        </span>
        <p class="lh-lg">{{ description }}</p>


        <div v-show="isFullWidth">
            <h5 class="fs-6 team-10-text-dark py-3">LOCATIONS COVERED</h5>
            <ul>
                <li v-for="(location, id) in locations" :key="`location-${id}`" class="my-1">
                    <font-awesome-icon class="team-10-text-main" icon="fa-solid fa-circle-arrow-right"/>
                    {{ location }}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.team-10-card{

    ul{
        padding: 0;
    }

    padding: 40px;

    border-top: 5px solid $color-main;

    img{
        width: 100%;
        transition: transform 0.5s;
        &:hover{
            box-shadow: 0px 0px 10px black;
            transform: scale(1.05);
        }
    }

    text-align: center;

    .icons *{
        margin-right: 20px;
    }

    &.card-lg{
        display: flex !important;
        text-align: left;
        .content-container{
            width: 70%;
            padding-left: 40px;
        }

        .image-container{
            width: 30%;

            img{
                width: 100%;
            }
        }

        .icons{
            position: absolute;
            top: 20px;
            right: 10px;
        }
        

        

    }

}




</style>