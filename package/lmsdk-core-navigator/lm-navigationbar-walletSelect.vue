<template>
    <view v-if="!lmAPP">
		<view class="header">
		    <view class="changeWallet">
		        <text>LimoWallet</text>
		    </view>
		    <view class="search" @tap="onClickRight">
		        <uni-icons type="search"></uni-icons>
		        <input type="search" placeholder="搜索Token" placeholder-style="color: #fff" />
		    </view>
		</view>
    </view>
</template>

<script>
    
    import LMPUtils from '../lmsdk-core-utils'
    
    export default {
        data() {
            return {
                lmAPP: LMPUtils.inLmApp
            }
        },
        props: {
            shadow: {
                type: String,
                default: ''
            },
            backgroundColor: {
                type: String,
                default: ''
            },
            rightIcon: {
                type: String,
                default: ''
            },
            rightText: {
                type: String,
                default: ''
            },
            rightColor: {
                type: String,
                default: ''
            },
            rightSize: {
                type: [Number, String],
                default: '24'
            },
            rightSrc: {
                type: String,
                default: ''
            }
        },
        mounted: function() { 
            const clickHandle = (tap) => {
                this.eventListner(tap)
            }
            document.addEventListener("lmEvent_NavgationBarEvent", clickHandle);
        },
        created: function(options) {
            
            var _this = this;
            if (LMPUtils.inLmApp) {
                var resolve = function() {}
                plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(resolve), location.href, {
                    navstyle: "walletSelect",
                    shadow: _this.shadow,
                    backgroundColor: _this.backgroundColor,
                    rightIcon: _this.rightIcon,
                    rightText: _this.rightText,
                    rightColor: _this.rightColor,
                    rightSize: _this.rightSize,
                    rightSrc: _this.rightSrc,
                }])
            }
        },
        computed: {
            isFixed() {
                return String(this.fixed) === 'true'
            },
            hasShadow() {
                var backgroundColor = this.backgroundColor
                switch (String(this.shadow)) {
                    case 'true':
                        return true
                    case 'false':
                        return false
                    default:
                        return backgroundColor !== 'transparent' && backgroundColor.indexOf('rgba') < 0
                }
            }
        },
        methods: {
            eventListner(tap) {
                if (tap && tap.name === "right") {
                    this.onClickRight()
                }
            },
            onClickRight() {
                this.$emit('rightClick')
                this.$emit('right-click')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        &>.changeWallet {
            &>text {
                font-size: 37.5rpx;
                font-weight: bold;
                color: $uni-font-white;
                margin-right: 3.472222rpx;
            }
        }
    
        &>.search {
            width: 222.222222rpx;
            height: 55.555555rpx;
            display: flex;
            align-items: center;
            position: relative;
    
            &>.iconfont {
                font-size: 13.888888rpx;
                color: $uni-font-white;
                position: absolute;
                left: 20.833333rpx;
            }
    
            &>input {
                width: 100%;
                height: 100%;
                background-color: #34374D;
                border-radius: 56.944444rpx;
                padding-left: 52.083333rpx;
                font-size: 22.222222rpx;
                font-weight: 400;
            }
        }
    }
</style>
