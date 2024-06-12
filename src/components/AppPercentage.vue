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
        // Inizio spin progressione
        methods: {
            createCanva() {
                const canvas = this.$refs.canvas;
                this.canvasWidth = canvas.width;
                this.canvasHeigth = canvas.heigth;
                this.context = canvas.getContext('2d');
                this.posX = canvas.width / 2,
                this.posY = canvas.height / 2,
                this.result = this.oneProcent * 64;
            
                this.context.lineCap = 'round';
            },

            startInterval(){
                // const spanProcent = this.$refs.procent;
                console.log(this.context)
                this.arcInterval = setInterval (function() {
                this.deegres += 1;
                // this.context.clearRect( 0, 0, this.canvasWidth, this.canvasHeigth );
                this.procent = this.deegres / this.oneProcent;

                // spanProcent.innerHTML = procent.toFixed();

                this.context.beginPath();
                this.context.arc( this.posX, this.posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
                this.context.strokeStyle = '#b1b1b1';
                this.context.lineWidth = '10';
                this.context.stroke();

                this.context.beginPath();
                this.context.strokeStyle = '#3949AB';
                this.context.lineWidth = '10';
                this.context.arc( this.posX, this.posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + this.deegres) );
                this.context.stroke();
                if( this.deegres >= this.result ) clearInterval(this.arcInterval);
                }, this.fps);
            }
        },
        mounted(){
            this.createCanva();
            // this.startInterval();
        },
    }

</script>

<template>
    <div class="canvas-wrap">
        <canvas ref="canvas" width="300" height="300"></canvas>
        <span ref="procent"></span>
    </div>
</template>

<style scoped>
    :root {
  background: #fff;
}

span#procent {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 50px;
  transform: translate(-50%, -50%);
  color: #3949AB;
}

span#procent::after {
  content: '%';
}

.canvas-wrap {
  position: relative;
  width: 300px;
  height: 300px;
}
</style>