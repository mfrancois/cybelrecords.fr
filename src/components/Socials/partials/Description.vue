<template>
    <div class="text-center centered" >
        <p id="txtdesc"></p>
    </div>
</template>

<script>
    export default {
        name: 'Logo',

        mounted:function(){
            var string = "IDM, ITALO DISCO, FUNK, NEW WAVE, FRENCH TASTE WEBRADIO";

            var strArray = string.split("");





            setTimeout(function animate(){
                if(strArray.length > 0){
                    document.getElementById('txtdesc').innerHTML += strArray.shift();
                }else{
                    return;
                }
                setTimeout(animate, 40);
            }, 1600);
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

        @media screen and (max-width: 1920px) {
            color: white;
            font-size: 14px;
            margin-bottom: 5vh;
            letter-spacing: 6px;
        }
    }

</style>
