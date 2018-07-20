<template>
    <div class="text-center centered">
        <p v-for="item in items" :key="item.id">{{item.current}}</p>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'Logo',

        data: function () {
            return {
                items: [
                    {current:'',message: 'IDM, ITALO DISCO, FUNK,', id: 1},
                    {current:'',message: 'NEW WAVE, FRENCH TASTE', id: 2},
                    {current:'',message: 'WEBRADIO', id: 3}
                ]
            }
        },


        mounted: function () {
            Vue.nextTick(()=>{
                this.initDescriptions();
            });
        },

        methods: {
            initDescriptions: function () {
                let delay = 1600;

                for (let i in this.items) {

                    if (i != 0) {
                        delay = delay + this.items[i-1].message.length * 30;
                    }

                    let strArray = this.items[i].message.split("");

                    setTimeout(()=>{
                        this.animate(this.items[i],strArray);
                    }, delay);

                }


            },
            animate: function (el, strArray) {


                if (strArray.length > 0) {
                    el.current += strArray.shift();
                }

                if (strArray.length > 0) {
                    setTimeout(() => {
                        this.animate(el, strArray)
                    }, 30);
                }

            }
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    @font-face {
        font-family: 'ModernNo20';
        src: url('../../../font/Modern No. 20.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .centered {
        color: white;
        font-size: 18px;
        margin-top: 7vh;
        letter-spacing: 9px;
        font-family: 'ModernNo20';

        p {
            margin-bottom: 0;
        }

        ul {
            padding-left: 0px;

            li {
                list-style-type: none;
            }
        }

        @media screen and (max-width: 1920px) {
            color: white;
            font-size: 14px;
            margin-bottom: 3vh;
            letter-spacing: 6px;
        }
    }

</style>
