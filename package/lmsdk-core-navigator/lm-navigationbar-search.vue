<template>
	<view v-if="!lmAPP" class="box" :style="{ width: width }">
		<view class="search">
			<uni-icons type="search"></uni-icons>
			<text>{{ placeholder }}</text>
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
			/**
			 * 搜索框宽度
			 */
			width: {
			    type: String,
			    default: '100%'
			},
			
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
			},
            focus: {
                type: Boolean,
                default: true
            },
        },
        mounted: function() {
            const eventHandle = (event) => {
                this.eventListner(event)
            }
            document.addEventListener("lmEvent_NavgationBarEvent", eventHandle);
        },
        created: function() {
            var _this = this;
            if ( LMPUtils.inLmApp ) {
                var resolve = function(){}
                plus.bridge.exec("LMNavigator", "setNavigationBarStyle", [plus.bridge.callbackId(resolve), location.href, {
                    navstyle: "search",
                    backgroundColor: _this.backgroundColor,
                    text: _this.text,
                    textSize: _this.textSize,
                    textColor: _this.textColor,
                    iconColor: _this.iconColor,
                    placeholder: _this.placeholder,
                    placeholderColor: _this.placeholderColor,
                    focus: _this.focus,
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

<style lang="scss" scoped>
	.box {
		margin: 0 auto;
	}
	.search {
		width: 100%;
		height: 69.444444rpx;
		font-size: 29.166666rpx;
		color: $uni-font-white;
		display: flex;
		align-items: center;
		justify-content: center;
		// background-color: #34374D;
		background-color: black;
		border-radius: 140.277777rpx;
		&>.iconfont {
			margin-right: 34.722222rpx;
		}
	}
</style>
