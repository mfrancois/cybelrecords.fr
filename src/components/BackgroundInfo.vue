<template>
    <div class="background-holder">
        <div class="pictureBg"></div>
    </div>
</template>
<script>

    export default {
        name: 'backgroundInfo'
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
            background-image: url('../img/background.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            filter: blur(10px);
            -webkit-filter: blur(10px);
            -moz-filter: blur(10px);
            -o-filter: blur(10px);
            -ms-filter: blur(10px);

        }
    }

</style>
