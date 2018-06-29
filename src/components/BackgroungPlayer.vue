<template>
    <div id="background-holder" class="background-holder">
        <div id="pictureBg" class="pictureBg" :style="bgImage"></div>
    </div>
</template>
<script>

    import backgroundReverse from './../img/backgroundreverse.png'

    export default {
        name: 'backgroundPlayer',
        data: function () {
            return {
                bgImage: {
                    backgroundImage: 'empty'
                }
            }
        },
        mounted: function () {
            setInterval(() => {
                this.backgroundImage();
            }, 5000);
            this.backgroundImage();
        },
        methods: {

            backgroundImage: function () {
                this.$http
                    .get('https://www.radioking.com/widgets/currenttrack.php?radio=145142&format=json')
                    .then((response) => {
                        if (response.body.cover)
                            this.bgImage.backgroundImage = 'url(' + response.body.cover + ')';
                        else
                            this.bgImage.backgroundImage = 'url(' + backgroundReverse + ')';
                    })
            },


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .background-holder {

        .pictureBg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: 0;
            padding: 0;

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            filter: blur(10px);
            -webkit-filter: blur(10px);
            -moz-filter: blur(10px);
            -o-filter: blur(10px);
            -ms-filter: blur(10px);

            transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            -ms-transition: all 0.5s ease-in-out;
            -webkit-transition: all 0.5s ease-in-out;
        }

    }


</style>
