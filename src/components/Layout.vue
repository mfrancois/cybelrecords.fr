<template>
    <div class="container-fluid">
        <div class="row fullwindowed">
            <div class="col-xl-6 align-middle">
                   <slot name="colLeft">
                   </slot>
            </div>
            <div class="col-xl-6 align-middle">
                <slot name="colRight">

                </slot>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'Layout'

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .fullwindowed{
        height: 100vh;
    }

    .align-middle{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
