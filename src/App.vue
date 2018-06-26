<template>
    <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
    >
        <div id="app" v-if="show" >
            <layout>

                <template slot="colLeft">
                    <div id="backLeft">
                        <BackgroungPlayer class="opacity"/>
                    </div>
                    <div id="Player">
                        <Player />
                    </div>


                </template>

                <template slot="colRight">
                    <div id="colRight">
                        <div id="backRight">
                            <BackgroundInfo class="opacity"/>
                        </div>

                        <div id="Social">
                            <Social/>
                        </div>
                    </div>
                </template>
            </layout>
        </div>

    </transition>

</template>

<script>
    import Player from './components/Player.vue'
    import BackgroungPlayer from './components/BackgroungPlayer.vue'
    import BackgroundInfo from "./components/BackgroundInfo"
    import Layout from "./components/Layout";
    import Social from "./components/Socials/Social";
    import {TimelineMax} from "gsap/TweenMax";

    export default {
        name: 'app',
        components: {
            BackgroundInfo,
            Player,
            BackgroungPlayer,
            Layout,
            Social
        },
        data:function(){
            return {
                show: false
            }
        },
        mounted:function(){
            this.show = true;
        },
        methods: {
            beforeEnter: function (el) {
            },
            enter: function (el, done) {

                let tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:0, onComplete:done});

                tl
                    .fromTo(el.querySelector('#backLeft > div'), 0.6,{marginTop:'100vh'}, {marginTop:0},'a')
                    .fromTo(el.querySelector('#backRight > div'), 0.6,{marginBottom:'100vh'}, {marginBottom:0},'a')
                    .fromTo(el.querySelector('#Social > div > #divlogo'), 0.6,{scale:0},{scale:1}, 'b')
                    .fromTo(el.querySelector('#Player'), 0.6,{scale:0},{scale:1}, 'b')
                    .staggerFromTo(el.querySelectorAll('#socialnetwork > div > div > a'), 1,{scale:0},{scale:1, delay: 1.2}, 0.3, 'c')

            },
            leave: function (el, done) {

                done();
            }
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
