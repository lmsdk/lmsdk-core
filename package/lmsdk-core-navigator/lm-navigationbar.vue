<template>
	<view v-if="!lmAPP" class="uni-navbar" :class="{'uni-navbar-fixed':isFixed,'uni-navbar-shadow':hasShadow}" :style="{'background-color':backgroundColor}">
		<uni-status-bar v-if="insertStatusBar"></uni-status-bar>
		<view class="uni-navbar-header" :style="{color:color}">
			<view class="uni-navbar-header-btns" @tap="onClickLeft">
				<view v-if="leftIcon.length">
					<uni-icons :style="{'font-weight': leftWeight}" :type="leftIcon" :color="color" :size="leftSize"></uni-icons>
				</view>
				<view v-if="leftText.length" class="uni-navbar-btn-text" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}">{{leftText}}</view>
				<slot name="left"></slot>
			</view>
			<view class="uni-navbar-container">
				<view v-if="title.length" class="uni-navbar-container-title">{{title}}</view>
				<!-- 标题插槽 -->
				<slot></slot>
			</view>
			<view class="uni-navbar-header-btns" @tap="onClickRight">
                <view v-if="rightIcon.length">
                    <uni-icons :style="{'font-weight': rightWeight}" :type="rightIcon" :color="color" :size="rightSize"></uni-icons>
                </view>
                <!-- 优先显示图标 -->
                <view v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text">{{rightText}}</view>
                <slot name="right"></slot>
            </view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	
	import LMPUtils from '../lmsdk-core-utils'
   
    export default {
        components: { uniIcons },
		data() {
			return {
				lmAPP: LMPUtils.inLmApp
			}
		},
        props: {
            title: {
                type: String,
                default: ''
            },
            fixed: {
                type: [Boolean, String],
                default: false
            },
            color: {
                type: String,
                default: '#FFFFFF'
            },
            backgroundColor: {
                type: String,
                default: ''
            },
            statusBar: {
                type: [Boolean, String],
                default: ''
            },
            shadow: {
                type: String,
                default: ''
            },
            leftText: {
                type: String,
                default: ''
            },
            leftColor: {
                type: String,
                default: ''
            },
            leftSize: {
            	type: [Number, String],
            	default: '24'
            },
            leftSrc: {
            	type: String,
            	default: ''
            },
            leftIcon: {
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
        created: function() {
            var _this = this;
            if ( LMPUtils.inLmApp ) {
				var reject = function() {}
                plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(_this.onClick, reject), location.href, {
                    
                    navstyle: "custom",
                    title: _this.title,
                    color: _this.color,
                    backgroundColor: _this.backgroundColor,
                    shadow: _this.shadow,
                    
                    leftText: _this.leftText,
                    leftIcon: _this.leftIcon,
                    leftSize: _this.leftSize,
                    leftSrc: _this.rightSrc,
                    leftColor: _this.leftColor,
                    
                    rightText: _this.rightText,
                    rightIcon: _this.rightIcon,
                    rightSize: _this.rightSize,
                    rightSrc: _this.rightSrc,
                    rightColor: _this.rightColor,
                }])
            }
        },
        computed: {
            isFixed() {
                return String(this.fixed) === 'true'
            },
            insertStatusBar() {
                switch (String(this.statusBar)) {
                    case 'true':
                        return true
                    case 'false':
                        return false
                    default:
                        return this.isFixed
                }
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
            onClick(tap) {
				if (tap && tap.index === 0) {
					this.onClickLeft()
				} else if (tap && tap.index === 1) {
					this.onClickRight()
				}
            },
            /**
             * 左侧按钮点击事件
             */
            onClickLeft() {
                this.$emit('leftClick')
                this.$emit('left-click')
            },
            /**
             * 右侧按钮点击事件
             */
            onClickRight() {
                this.$emit('rightClick')
                this.$emit('right-click')
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
