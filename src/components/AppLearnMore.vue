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
    <div class="image-container">
        <img class="w-100" :src="getImagesPath" :alt="`${title} car img`">
    </div>
    <h6 class="mb-3">{{ title }}</h6>
    <button class="team-10-button button-gray">LEARN MORE</button>
</div>
</template>

<style lang="scss" scoped>
.learn-more{
    text-align: center;
}

.image-container{
    overflow: hidden;
}

img{
    display: block;
    transition: filter 0.5s, transform 0.5s;
    &:hover{
        filter: brightness(1.2);
        transform: scale(1.1)
    }
}

.button-gray{
    padding: 9px 20px;
    font-size: 12px;
}

h6{
    font-size: 21px;
}
</style>