<template>
    <div class="row divlogo" >
        <div class="offset-md-4 col-md-4" id="divlogo">
            <Logo/>
        </div>
        <div class="offset-md-2 col-md-8" id="description">
            <Description/>
        </div>
        <div class="offset-md-2 col-md-8" id="socialnetwork">
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

    .divlogo {
        margin-top: 20vh;

        @media screen and (max-width: 768px) {
            margin-top: 10vh;
        }
    }
</style>