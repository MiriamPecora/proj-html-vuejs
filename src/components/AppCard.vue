<script>
import { store } from '../store';
export default {
    name: 'Card',
    data() {
        return {
           store,
           pathFolder: '../assets/img/', 
        }
    },
    props: {
        name: String,
        role: String,
        description: String,
        shortDesc: String,
        locations: Array,
        isFullWidth: Boolean,
        imagePath: String,
    },
    methods: {
        
    },
    computed: {
        imageUrl() {
            return new URL(this.pathFolder + this.imagePath, import.meta.url).href;
        }
    }
}
</script>

<template>
<div class="team-10-card" :class="{'card-lg': isFullWidth}">
    <div>
        <img :src="imageUrl" :alt="this.name">
    </div>
    <h2></h2>
    <span></span>
    <p></p>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>