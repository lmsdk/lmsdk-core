<template>
	<view v-if="!lmAPP" class="uni-navbar" :class="{'uni-navbar-fixed':isFixed,'uni-navbar-shadow':hasShadow}" :style="{'background-color':backgroundColor}">
		<view class="uni-navbar-header" :style="{backgroundColor: backgroundColor}">
			
		</view>
	</view>
</template>

<script>
	const url = require('url');
	const localURL = url.parse(location.href, true);
    
    export default {
        components: { uniIcons },
		data() {
			return {
				lmAPP: localURL.query._lm
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
            rightWeight: {
            	type: String,
            	default: ''
            }
        },
        created: function() {
            
            var _this = this;
            if ( localURL.query._lm ) {
				var reject = function() {}
                plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(_this.eventListner, reject), location.href, {
                    navstyle: "walletSelect",
                    shadow: _this.shadow,
                    backgroundColor: _this.backgroundColor,
                    rightIcon: _this.rightIcon,
                    rightText: _this.rightText,
                    rightColor: _this.rightColor,
                    rightSize: _this.rightSize,
                    rightWeight: _this.rightWeight
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
            eventListner(event) {
				
            }
        }
    }
</script>

<style>
    .uni-navbar {
        display: block;
        position: relative;
        width: 100%;
        background-color: #313345;
        overflow: hidden;
    }

	.uni-navbar view{
		line-height:44px;
	}

    .uni-navbar-shadow {
        box-shadow: 0 0px 0px #ccc;
    }

    .uni-navbar.uni-navbar-fixed {
        position: fixed;
        z-index: 998;
    }

    .uni-navbar-header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height:44px;
        line-height:44px;
        font-size: 18px;
    }

	.uni-navbar-header .uni-navbar-header-btns{
		display:inline-flex;
		flex-wrap:nowrap;
		flex-shrink:0;
		width: 120rpx;
		padding: 0 25rpx;
		box-sizing: border-box;
	}

	.uni-navbar-header .uni-navbar-header-btns:last-child {
		display: flex;
		justify-content: flex-end;
	}

	.uni-navbar-container{
		width:100%;
		margin:0 10rpx;
	}
	.uni-navbar-container-title{
		font-size: 37.5rpx;
		font-weight: bold;
		text-align: center;
	}
</style>
