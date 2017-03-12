<template>
	<div id="apps">
		<div class="sidebar">
			<card></card>
			<List></List>
		</div>
		<div class="main">
			<message></message>
			<text></text>
		</div>
	</div>
</template>

<script>	
	import { actions } from './actions'

	import Card from './components/card';
	import List from './components/list';
	import Texts from './components/text';
	import Message from './components/message';

	export default {
		components: {
			Card,
			List,
			Texts,
			Message
		},
		vuex: {
			actions: actions
		},
		created() {
			actions.initData();
		}
	}
</script>

<style scoped>
	#apps {
		margin: 20px auto;
		width: 800px;
		height: 600px;
		overflow: hidden;
		border-radius: 3px;
	}
	
	#apps .sidebar,
	.main {
		height: 100%;
	}
	
	#apps .sidebar {
		float: left;
		width: 200px;
		color: #f4f4f4;
		background-color: #2e3238;
	}
	
	#apps .main {
		position: relative;
		overflow: hidden;
		background-color: #eee;
	}
	
	#apps .text {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	
	#apps .message {
		height: 160px;
	}
</style>