<script>
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
</template>

<style lang="scss" scoped>
img{
    height: 265px;
    width: 100%;
    display: block;
    object-fit: cover;
}
</style>