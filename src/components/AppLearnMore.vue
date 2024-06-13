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
        <img class="w-100 mb-3" :src="getImagesPath" :alt="`${title} car img`">
    </div>
    <h6 class="mb-3">{{ title }}</h6>
    <button class="team-10-button button-gray">LEARN MORE</button>
</div>
</template>

<style lang="scss" scoped>
.learn-more{
    text-align: center;
}



.button-gray{
    padding: 9px 20px;
    font-size: 12px;
}

h6{
    font-size: 21px;
}
</style>