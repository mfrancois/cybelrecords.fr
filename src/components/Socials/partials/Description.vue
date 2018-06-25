<template>
    <div class="text-center centered" >
        <p id="descriptiontext">IDM, ITALO DISCO, FUNK,<br /> NEW WAVE, FRENCH TASTE <br /> WEBRADIO</p>
    </div>
</template>

<script>
    export default {
        name: 'Logo'
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

        @media screen and (max-width: 768px) {
            color: white;
            font-size: 14px;
            margin-bottom: 5vh;
            letter-spacing: 6px;
        }
    }

</style>
