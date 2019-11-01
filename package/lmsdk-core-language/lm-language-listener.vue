<template>
	<view></view>
</template>

<script>
    export default {
        props: {
        },
        created: function() {
            var _this = this;
            document.addEventListener("lmEvent_LangageChanged", function(event) {
                _this.onLanguageChanged(event);
            })
        },
        methods: {
            onLanguageChanged(event) {
                // this.$emit('onChanged', event)
                this.$emit('change', event)
            }
        }
    }
</script>

<style>
</style>
