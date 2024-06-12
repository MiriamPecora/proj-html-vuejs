<script>
    export default {
        name: 'Percentage',
        data() {
            return {
                context: null,
                posX: null,
                posY: null,
                fps: 1000 / 200,
                procent: 0,
                oneProcent: 360 / 100,
                result: null,
                deegres: 0,
                arcInterval: null,
                canvasWidth: null,
                canvasHeigth: null,
            }
        },
        props: [
            "finalPercentage",
            "labelText",
        ],
        // Inizio progressione spin 
        methods: {
            createCanva() {
                const canvas = this.$refs.canvas;
                this.canvasWidth = canvas.width;
                this.canvasHeigth = canvas.heigth;
                this.context = canvas.getContext('2d');
                this.posX = canvas.width / 2,
                this.posY = canvas.height / 2,
                this.result = this.oneProcent * this.finalPercentage;
            
                this.context.lineCap = 'round';
                this.arcInterval = setInterval(this.startInterval, this.fps);
            },

            startInterval(){
                this.deegres += 1;
                this.context.clearRect( 0, 0, this.canvasWidth, this.canvasHeigth );
                this.procent = this.deegres / this.oneProcent;

                this.context.beginPath();
                this.context.arc( this.posX, this.posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
                this.context.strokeStyle = '#f6f6f6';
                this.context.lineWidth = '8';
                this.context.stroke();

                this.context.beginPath();
                this.context.strokeStyle = '#7ABC74';
                this.context.lineWidth = '8';
                this.context.arc( this.posX, this.posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + this.deegres) );
                this.context.stroke();
                if( this.deegres >= this.result ) clearInterval(this.arcInterval);
            }
        },
        computed: {
            percentageFixed(){
                return this.procent.toFixed()
            }
        },
        mounted(){
            this.createCanva();
            this.startInterval();
        },
    }

</script>

<template>
    <div class="canvas-wrap team-10-card d-flex justify-content-center flex-column">
        <canvas ref="canvas" width="260" height="220"></canvas>
        <span id="procent">{{ percentageFixed }}</span>
        <span id="procentLabel" class="mb-5 text-center fw-semibold"> {{ labelText }}</span>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;
    
    :root {
        background: #fff;
    }

    #procent {
        
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 50px;
        transform: translate(-50%, -100%);
        color: $color-text;
    }

    #procent::after {
        content: '%';
    }

    #procentLabel {
    color: $color-text;
    }

    .canvas-wrap {
        position: relative;    
    }

    .team-10-card{
        border-top: 5px solid $color-main;
        height: 420px;
        width: 380px;
    }
</style>