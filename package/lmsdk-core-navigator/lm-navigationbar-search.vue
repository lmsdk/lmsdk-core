<template>
	<view v-if="!lmAPP" class="uni-navbar" :class="{'uni-navbar-fixed':isFixed,'uni-navbar-shadow':hasShadow}" :style="{'background-color':backgroundColor}">
		<view class="uni-navbar-header" :style="{backgroundColor: backgroundColor}">
			
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	
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
            /**
             * 搜索图标颜色
             */
            iconColor: {
                type: String,
                default: '0xFFFFFF'
            },
			
            /**
             * 未输入前的提示文字
             */
            placeholder: {
                type: String,
                default: ''
            },
            placeholderColor: {
                type: String,
                default: ''                
            },
            /**
             * 当前搜索框已经输入的内容
             */
            text: {
                type: String,
                default: ''
            },
            textSize: {
                type: [String, Number],
                default: '',
            },
            textColor: {
                type: String,
                default: '',
            },
			backgroundColor: {
				type: String,
				default: ''
			},
			shadow: {
				type: String,
				default: ''
			}
        },
        created: function() {
            
            var _this = this;
            
            if ( localURL.query._lm ) {

				var reject = function() {}
				
                plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(_this.eventListner, reject), location.href, {
                    navstyle: "search",
                    backgroundColor: _this.backgroundColor,
                    text: _this.text,
                    textSize: _this.textSize,
                    textColor: _this.textColor,
                    iconColor: _this.iconColor,
                    placeholder: _this.placeholder,
                    placeholderColor: _this.placeholderColor,
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
            eventListner(event) {
				switch(event.event) {
                    case "beginEdit": this.onBeginEdit(event.text); break;
                    case "textChanged": this.onTextChanged(event.text); break;
                    case "endEdit": this.onEndEdit(event.text); break;
                    case "searchButtonClicked": this.onSearchButtonClicked(event.text); break;
                }
            },
            onBeginEdit(text) {
                this.$emit('beginEdit', text)
                this.$emit('begin-edit', text)
            },
            onEndEdit(text) {
                this.$emit('endEdit', text)
                this.$emit('end-edit', text)
            },
            onTextChanged(text) {
                this.$emit('textChanged', text)
                this.$emit('text-changed', text)
            },
            onSearchButtonClicked(text) {
                this.$emit('searchButtonClicked', text)
                this.$emit('search-button-clicked', text)
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
