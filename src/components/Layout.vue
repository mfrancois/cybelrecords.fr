<template>
    <div class="container-fluid">
        <div class="row fullwindowed">
            <div class="col-md-6">
                <slot name="colLeft">
                </slot>
            </div>
            <div class="col-md-6">
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
</style>
