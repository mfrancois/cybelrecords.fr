<template>
    <div id="app">
        <div class="pictureBg" :style="bgImage"></div>
        <div class="opacity"></div>

        <div class="center-holder">
            <Player/>
        </div>
    </div>
</template>

<script>
    import Player from './components/Player.vue'

    export default {
        name: 'app',
        components: {
            Player
        },
        data: function () {
            return {
                bgImage:{
                    backgroundImage:'empty'
                }
            }
        },
        mounted: function () {
            setInterval(()=>{
                this.backgroundImage();
            },5000);

            this.backgroundImage();
        },
        methods: {

            backgroundImage:function () {
                this.$http
                    .get('https://www.radioking.com/widgets/currenttrack.php?radio=145142&format=json')
                    .then((response) => {
                        this.bgImage.backgroundImage = 'url('+response.body.cover+')';
                    })

            }
        }
    }
</script>

<style>
    body {
        background-color: black;
        width: 100%;
        height: 100%;
        color: #ffffff;
        margin:0;
        padding:0;
    }

    .opacity{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        opacity: 0.8;
        margin:0;
        padding:0;
    }

    .pictureBg{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin:0;
        padding:0;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;


        filter: blur(10px);
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);

        transition:all 0.5s ease-in-out;
        -moz-transition:all 0.5s ease-in-out;
        -o-transition:all 0.5s ease-in-out;
        -ms-transition:all 0.5s ease-in-out;
        -webkit-transition:all 0.5s ease-in-out;
    }
    .center-holder {
        text-align: center;
        margin: auto;
        max-width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    @media screen and (max-width: 1024px) {
        .center-holder {
            top: 30px;
            transform: translateX(-50%) translateY(0%);
        }
    }
</style>
