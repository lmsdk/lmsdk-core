<template>
</template>

<script>
    export default {
        props: {
        },
        created: function() {
            var _this = this;
            document.addEventListener("lmEvent_ThemeChanged", function(event) {
                _this.onThemeChanged(event);
            })
        },
        methods: {
            onThemeChanged(event) {
                this.$emit('onChanged', event)
                this.$emit('on-changed', event)
            }
        }
    }
</script>

<style>
</style>
