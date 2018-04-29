<template>
    <div id="app">
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
        }
    }
</script>

<style>
    body{
        background-color: black;
        width: 100%;
        height: 100%;
    }

    .center-holder{
        text-align: center;
        margin: auto;
        max-width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    @media screen and (max-width: 1024px)
    {
        .center-holder{
            top: 30px;
            transform: translateX(-50%) translateY(0%);
        }
    }
</style>
