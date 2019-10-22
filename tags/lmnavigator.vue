<template>
    <view @onClick="navigatorTagOnClick"></view>
</template>

<script>

    const lmsdk_core_navigator = require('../package/lmsdk_core_navigator');

    var navigator = new lmsdk_core_navigator();

    /// type: push，pop，poptoroot
    export default {
        props: {
            type: String,
            param: String,
        },
        methods: {
            async navigatorTagOnClick() {
                switch (this.type) {
                    case navigator.types.Push: return (await navigator.push(this.param))
                    case navigator.types.Pop:  return (await navigator.pop(this.param))
                    case navigator.types.PopToRoot: return (await navigator.popToRoot())
                    case navigator.types.SetTabSelected: return (await navigator.setSelectedTabBarIndex(this.param))
                    default: return
                }
            }
        }
    }
</script>

<style>
</style>
