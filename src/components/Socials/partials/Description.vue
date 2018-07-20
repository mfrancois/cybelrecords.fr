<template>
    <div class="text-center centered">
        <p v-for="item in items" :key="item.id">{{item.message}}</p>
    </div>
</template>

<script>
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
        },

        methods: {
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
        margin-bottom: 0;
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
            letter-spacing: 6px;
        }
    }

</style>
