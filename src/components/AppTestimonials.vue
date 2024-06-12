<script>
import {store} from "../store"

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCircle as circlePlain } from '@fortawesome/free-solid-svg-icons';
import { faCircle as circleEmpty } from '@fortawesome/free-regular-svg-icons';

library.add(circlePlain, circleEmpty)


export default {
    name: 'Testimonials',
    data(){
        return {
            store,
            currentActive: 2,
            intervalId: null,
            intervalTime: 5
        }
    },
    methods: {
        changeActive(id){
            this.currentActive = id;
            this.startInterval()
        },
        goNext(){
            this.currentActive++
            if(this.currentActive === this.store.testimonials.length){
                this.currentActive = 0
            }
        },
        startInterval(){
            if(this.intervalId != null){
                clearInterval(this.intervalId)
            }
            this.intervalId = setInterval(this.goNext, this.intervalTime*1000)
        }

    },
    computed:{
        currentImage(){
            const imageName = this.store.testimonials[this.currentActive].picture
            console.log(imageName)
            return new URL('../assets/img/testimonials/'+imageName, import.meta.url).href
        },
        currentName(){
            return this.store.testimonials[this.currentActive].name
        }
    },
    mounted(){
        this.startInterval()
    }
}
</script>

<template>

<div id="testimonial" class="text-center container-lg">
    <div class="width-65 mx-auto">

        <!-- title -->
        <h2 class="text-dark fs-1">Testimonials</h2>
    
        <p class="fs-4 mb-5">Here’s what our happy drivers had to say about our services:</p>
        
        <img :src="currentImage" alt="portfolio image" class="mb-4">
        
        <p class="fst-italic fs-6 spacing-test">Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.</p>
        
        <h5 class="lh-lg spacing-test">{{ currentName }}</h5>
        
        <!-- circle dots -->
        <div class="d-flex justify-content-center gap-2">
            <div v-for="(testimonial, id) in store.testimonials" :key="`testimonial-${id}`" @click="() => changeActive(id)">
                <font-awesome-icon v-if="id === currentActive" icon="fa-solid fa-circle" />
                <font-awesome-icon v-else icon="fa-regular fa-circle" />
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
img{
    width: 150px;
}

svg{
    cursor: pointer;
    font-size: 12px;
}

.spacing-test {
    letter-spacing: 5px;
}

.width-65 {
    width: 65%;
}
</style>