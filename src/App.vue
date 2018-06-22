<template>
    <div id="app" >
        <layout>

            <template slot="colLeft">
                <BackgroungPlayer class="opacity"/>
                <Player/>
            </template>

            <template slot="colRight">
                <BackgroundInfo class="opacity"/>
                <Social/>
            </template>
        </layout>
    </div>
</template>

<script>
    import Player from './components/Player.vue'
    import BackgroungPlayer from './components/BackgroungPlayer.vue'
    import BackgroundInfo from "./components/BackgroundInfo"
    import Layout from "./components/Layout";
    import Social from "./components/Socials/Social";

    export default {
        name: 'app',
        components: {
            BackgroundInfo,
            Player,
            BackgroungPlayer,
            Layout,
            Social
        }
    
    }
</script>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    body {
        background-color: black;
        width: 100%;
        height: 100%;
        color: #ffffff;
        margin:0;
        padding:0;

        #app{
            width: 100%;
            height: 100%;
        }

        .center-holder {
            text-align: center;
            margin: auto;
            max-width: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);

            @media screen and (max-width: 1024px) {
                top: 30px;
                transform: translateX(-50%) translateY(0%);
            }
        }

        .opacity {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: black;
            opacity: 0.8;
            margin: 0;
            padding: 0;
        }


}


</style>
