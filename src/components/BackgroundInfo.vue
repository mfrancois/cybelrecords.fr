<template>
    <div class="background-holder">
        <div class="pictureBg"></div>
        <div class="opacity"></div>
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
        .opacity {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: black;
            opacity: 0.9;
            margin: 0;
            padding: 0;
        }

        .pictureBg {

            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: 0;
            padding: 0;
            background-size: cover;
            background-image: url('../img/background.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

    }

</style>
