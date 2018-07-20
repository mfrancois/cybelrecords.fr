<template>
    <div class="text-center divsn">
            <div class="icon-holder">
                <a href="https://soundcloud.com/user-555564733" target="_blank" class="fa-2x iconrs"><font-awesome-icon :icon="['fab', 'soundcloud']" class="inconrs"/></a>
                <a href="https://twitter.com/cybelerecords" target="_blank" class="fa-2x iconrs" ><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="https://www.instagram.com/cybelerecords/" target="_blank" class="fa-2x iconrs"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="https://www.facebook.com/cybelerecordswebradio/" target="_blank" class="fa-2x iconrs"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .divsn{
        margin-top: 5vh;
        .fa-2x{
            font-size: 1.4em !important;
        }

        .icon-holder{
            text-align: center;
            width: 100%;
            display: flex;
            justify-content: center;

            .iconrs{
                float: left;
                box-sizing: border-box;
                width: 60px;
                padding: 0;

                path{
                    transition: 0.4s;
                    fill: #ffffff;
                    opacity: 0.7;
                }

                @media screen and (max-width: 768px) {
                    margin-bottom: 2px;
                }


                &:hover{

                    path{
                        opacity: 1;
                    }
                }

            }

        }



    }



</style>