<template>
    <div class="row divlogo">
        <div class="offset-xl-4 col-xl-4" id="divlogo">
            <Logo/>
        </div>
        <div class="offset-xl-2 col-xl-8" id="description">
            <Description/>
        </div>
        <div class="offset-xl-2 col-xl-8" id="socialnetwork">
            <SocialNetwork/>
        </div>
    </div>
</template>

<script>
    import Logo from "./partials/Logo"
    import Description from "./partials/Description"
    import SocialNetwork from "./partials/SocialNetwork";

    export default {
        name: 'Social',
        components: {
            Logo,
            Description,
            SocialNetwork
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    #divlogo {
        @media screen and (max-width: 768px) {
            max-width:50%;
            margin:auto;
        }
    }

    #description {
        @media screen and (max-width: 768px) {
            padding-left:15%;
            padding-right:15%;
        }
    }
</style>