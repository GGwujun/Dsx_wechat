<script>
	export default {
		data() {
				return {
					content: ''
				};
			},
			methods: {
				onKeyup(e) {
					if(e.ctrlKey && e.keyCode === 13 && this.content.length) {
						this.$store.dispatch('sendMessage', this.content);
						this.content = '';
					}
				},
				send () {
					this.$store.dispatch('sendMessage', this.content);
					this.content = '';
				}
			}
	};
</script>

<template>
		<div class="box_ft ng-scope">
			<div class="toolbar" id="tool_bar">
				<a class="web_wechat_face" ng-clicks="showEmojiPanel($event)" href="javascript:;" title="表情"></a>
				<a class="web_wechat_screencut ng-isolate-scope" ng-clicks="screenShot()" href="javascript:;" title="截屏"></a>
				<a ng-click="sendClick($event)" class="web_wechat_pic js_fileupload ng-isolate-scope webuploader-container" href="javascript:;" title="图片和文件">
					<div class="webuploader-pick"></div>
					<div style="position: absolute; top: 0px; left: 0px; width: 30px; height: 30px; overflow: hidden; bottom: auto; right: auto;">
						<input type="file" name="file" class="webuploader-element-invisible">
						<label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);">
						</label>
					</div>
				</a>
			</div>
			<div class="content ng-isolate-scope">
				<textarea id="editArea"  placeholder="按 Ctrl + Enter 发送"  class="flex edit_area ng-isolate-scope ng-pristine ng-valid" v-model="content" @keyup="onKeyup"></textarea>
				<span class="caret_pos_helper" id="caretPosHelper"></span>
			</div>

			<div class="action">
				<span ng-if="!isMacOS" class="desc ng-scope">按下Enter换行</span>
				<a class="btn btn_send" href="javascript:;" v-on:click="send">发送</a>
			</div>
		</div>
</template>

<style scoped>	
	.box_ft {
		height: 180px;
		border-top: 1px solid #d6d6d6;
	}
	
	.box_ft {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	.box_ft .toolbar {
		height: 30px;
		padding: 5px 17px;
	}
	
	.web_wechat_face {
		width: 30px;
		height: 30px;
		background: url(../../static/icons.png) no-repeat;
		background-position: -404px -398px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.web_wechat_down_icon,
	.web_wechat_face {
		display: inline-block;
		vertical-align: middle;
	}
	
	.web_wechat_face {
		background: url(../../static/1OvE4o2.png) 0 -805px;
		width: 30px;
		height: 30px;
	}
	
	.web_wechat_down_icon,
	.web_wechat_face {
		vertical-align: middle;
		display: inline-block;
	}
	
	.web_wechat_screencut,
	.web_wechat_search {
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		height: 30px;
	}
	
	.web_wechat_screencut {
		background: url(../../static/icons.png) no-repeat;
		background-position: -30px -432px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.web_wechat_screencut,
	.web_wechat_search {
		width: 30px;
		height: 30px;
		vertical-align: middle;
		display: inline-block;
	}
	
	.web_wechat_screencut {
		background: url(../../static/1OvE4o2.png) 0 -1916px;
	}
	
	.web_wechat_pic,
	.web_wechat_profile_loc {
		display: inline-block;
		vertical-align: middle;
	}
	
	.web_wechat_pic {
		width: 30px;
		height: 30px;
		background: url(../../static/icons.png) no-repeat;
		background-position: -120px -432px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.webuploader-container {
		position: relative;
	}
	
	.web_wechat_pic,
	.web_wechat_profile_loc {
		vertical-align: middle;
		display: inline-block;
	}
	
	.web_wechat_pic {
		background: url(../../static/1OvE4o2.png) 0 -1638px;
		width: 30px;
		height: 30px;
	}
	
	.webuploader-pick {
		position: relative;
		display: inline-block;
		width: 30px;
		height: 30px;
		filter: alpha(opacity=0);
		-moz-opacity: 0;
		-khtml-opacity: 0;
		opacity: 0;
		overflow: hidden;
	}
	
	.webuploader-element-invisible {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
	}
	
	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		margin: 0;
	}
	
	fieldset,
	input,
	legend,
	textarea {
		padding: 0;
	}
	
	.box_ft .content .flex {
		height: 6em;
		overflow-y: auto;
		overflow-x: hidden;
		padding-left: 20px;
		outline: none;
		border: 0;
		font-size: 14px;
		display: inline-block;
		background: #eee;
		resize: none;
		width: 93%;
		margin: 0 auto;
	}
	
	textarea {
		margin: 0;
		font-family: inherit;
		font-size: inherit;
		white-space: pre-wrap;
		word-break: normal;
	}
	
	.box_ft .action {
		text-align: right;
		margin-top: 5px;
		margin-right: 19px;
	}
	
	.box_ft .desc {
		color: #888;
		font-size: 12px;
		margin-left: 10px;
		margin-right: 7px;
	}
	
	a.btn {
		text-decoration: none;
	}
	
	.btn_send {
		background-color: #fff;
		color: #222;
		padding-left: 30px;
		padding-right: 30px;
	}
	
	.btn {
		display: inline-block;
		border: 1px solid #c1c1c1;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		padding: 3px 20px;
		font-size: 14px;
	}
	
	a,
	button,
	input,
	textarea {
		outline: 0;
	}
</style>