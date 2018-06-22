<template>
    <div class="row text-center">
        <div class="player-holder">
            <iframe src="https://www.radioking.com/widgets/player/player.php?id=145142&c=%23ffffff&c2=%232c3e50&ii=&p=1&pp=1&i=1&eq=1&po=1&t=1&f=v&v=2&s=0&li=0&h=365&l=470&a=0&plc=0"
                    name="idFrame" id="idFrame" style="border-radius: 5px; width:275px;height:365px; min-height: 365px;"
                    frameBorder="0" scrolling="no"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Player'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .player-holder {
        z-index: 1;
        width: 100%;
        height: 100%;
        margin-top: 30vh;
        margin-bottom: 5vh;

        iframe {
            overflow: hidden;
        }

        @media screen and (max-width: 768px) {
            margin-top: 10vh;
        }
    }


</style>
