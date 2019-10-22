<template>
    <view style="normal">
    </view>
</template>

<script>

    // <lm-navigationbar text="Title" left="icon back" right="icon message"></lm-navigationbar>
    const lmsdk_core_navigationBar = require('./lmnavigationbar.js');

    export default {
        props: {
            style: String,
            text: String,
            left: String,
            right: String,
            backgroud: String
        },
        onShow() {

            var navigationBar = new lmsdk_core_navigationBar();

            if ( !this.style || this.style.length <= 0 ) {
                this.style = "normal";
            }

            navigationBar.setNavigationBarStyle(location.href, this.style, this.text, this.left, this.right, this.backgroud);
        }
    }
</script>

<style>
</style>
