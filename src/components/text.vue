<script>
	import { actions } from '../actions'

	export default {
		vuex: {
			actions: actions
		},
		data() {
			return {
				content: ''
			};
		},
		methods: {
			onKeyup(e) {
				if(e.ctrlKey && e.keyCode === 13 && this.content.length) {
					actions.sendMessage(this.content);
					this.content = '';
				}
			}
		}
	};
</script>

<template>
	<div class="text">
		<textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
	</div>
</template>

<style scoped>
	.text {
		height: 160px;
		border-top: solid 1px #ddd;
	}
	
	.text textarea {
		padding: 10px;
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		font-family: "Micrsofot Yahei";
		resize: none;
	}
</style>