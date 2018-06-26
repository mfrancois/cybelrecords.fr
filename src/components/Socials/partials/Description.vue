<template>
    <div class="text-center centered" >
        <p id="txtdesc"></p>
        <p id="txtdesc2"></p>
        <p id="txtdesc3"></p>
    </div>
</template>

<script>
    export default {
        name: 'Logo',

        mounted:function(){
            var string = "IDM, ITALO DISCO, FUNK,";
            var string2 = "NEW WAVE, FRENCH TASTE";
            var string3 = "WEBRADIO";


            var strArray = string.split("");
            var strArray2 = string2.split("");
            var strArray3 = string3.split("");



            setTimeout(function animate(){
                if(strArray.length > 0){
                    document.getElementById('txtdesc').innerHTML += strArray.shift();
                }
                setTimeout(animate, 30);
            }, 1600);
            setTimeout(function animate(){
                if(strArray2.length > 0){
                    document.getElementById('txtdesc2').innerHTML += strArray2.shift();
                }
                setTimeout(animate, 30);
            }, 2290);
            setTimeout(function animate(){
                if(strArray3.length > 0){
                    document.getElementById('txtdesc3').innerHTML += strArray3.shift();
                }
                setTimeout(animate, 30);
            }, 2950);
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

        p{
            margin-bottom: 0;
        }


        @media screen and (max-width: 1920px) {
            color: white;
            font-size: 14px;
            margin-bottom: 3vh;
            letter-spacing: 6px;
        }
    }

</style>
