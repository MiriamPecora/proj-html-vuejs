<script>
export default{
    name:"learn more",
    props: [
        'imagePath',
        'title',
    ],
    computed: {
        getImagesPath(){
            // prende in input il nome del file
            return new URL("../assets/img/home/"+this.imagePath, import.meta.url).href
        }
    }
}
</script>

<template>
<div class="learn-more">
    <img :src="getImagesPath" :alt="`${title} car img`">
    <h6>{{ title }}</h6>
    <button class="btn">LEARN MORE</button>
</div>
</template>

<style>

</style>