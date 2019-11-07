<template>
    <view @tap="navigatorTagOnClick">
		<slot></slot>
	</view>
</template>

<script>
    
    import LMPUtils from '../lmsdk-core-utils'
	import lmsdk_core_navigator from './lm-navigator.js'
	
    const navigator = new lmsdk_core_navigator();

    /// type: push，pop，poptoroot
    export default {
        props: {
            type: String,
            param: String
        },
        methods: {
            navigatorTagOnClick() {
				if (!LMPUtils.inLmApp) {
					return uni.navigateTo({
						url: this.param.slice(1)
					})
				}
                switch (this.type) {
                    case navigator.types.Push: return navigator.push(this.param).then()
                    case navigator.types.Pop:  return navigator.pop(this.param).then()
                    case navigator.types.PopToRoot: return navigator.popToRoot().then()
                    case navigator.types.SetTabSelected: return navigator.setSelectedTabBarIndex(this.param).then()
                    default: return
                }
            }
        }
    }
</script>

<style>
</style>
