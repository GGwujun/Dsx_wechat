<template>
	<div id="apps">
		<div class="sidebar">
			<card></card>
			<List></List>
		</div>
		<div class="main">
			<message></message>
			<Texts></Texts>
		</div>
	</div>
</template>

<script>	
	import { mapActions } from 'vuex'

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
		methods:mapActions([
		  'init_data'
		]),
		created() {
			this.init_data();
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
	#apps .main {
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
		bottom: -20px;
    	left: 3px;
    	right: 1px;
	}
	
	#apps .message {
		height: calc(100% - 100px);
	}
</style>