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
					this.$store.dispatch('sendMessage',this.content);
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
		height: 100px;
		border: none;
	}
	
	.text textarea {
		padding: 0px;
		height: 100%;
		width: 100%;
		outline: none;
		font-family: "Micrsofot Yahei";
		resize: none;
		border: none;
	}
</style>