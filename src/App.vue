<template>
	<!--<div class="contain">
		<div class="main">
			<div id="apps">
				<div class="sidebar">
					<!--<card></card>-->
					<!--<router-view  name="card"></router-view>
					<router-view  name="List"></router-view>-->
					<!--<List></List>-->
				<!--</div>
				<div class="main">-->
					<!--<message></message>
					<Texts></Texts>-->
					<!--<router-view  name="message"></router-view>
					<router-view  name="Texts"></router-view>
				</div>
			</div>
		</div>
	</div>-->-->
	<!--<Login></Login>-->
	<router-view  name="Login"></router-view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'

	import Card from './components/card';
	import List from './components/list';
	import Texts from './components/text';
	import Message from './components/message';
	import Login from './components/login';

	export default {
		components: {
			Card,
			List,
			Texts,
			Message,
			Login
		},
		methods: mapActions([
			'init_data'
		]),
		created() {
			this.init_data();
		}
	}
</script>

<style scoped>
	.contain {
		width: 100%;
		height: 100%;
	}
	
	.main {
		min-height: 600px;
		-webkit-transition: padding .3s linear;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	
	#apps {
		/*margin: 20px auto;
		width: 800px;
		height: 600px;
		overflow: hidden;
		border-radius: 3px;*/
		max-width: 1000px;
		min-width: 800px;
		height: 100%;
		margin: 0 auto;
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		overflow: hidden;
	}
	
	#apps .sidebar,
	#apps .main {
		height: 100%;
	}
	
	#apps .sidebar {
		float: left;
		/*width: 200px;*/
		color: #f4f4f4;
		background-color: #2e3238;
		position: relative;
    width: 280px;
    height: 100%;
    float: left;
    background: #2e3238;
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