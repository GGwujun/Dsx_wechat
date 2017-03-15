<template>
	<div class="contain">
		<div class="main">
			<div id="apps" v-if='login'>
				<div class="sidebar">
					<router-view  name="Card"></router-view>
					<router-view  name="Menu"></router-view>
					<router-view  name="List"></router-view>
				</div>
				<div class="main">
					<router-view  name="Message"></router-view>
					<router-view  name="Texts"></router-view>
				</div>
			</div>
			<router-view  v-if='!login'></router-view>
		</div>
	</div>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import {
		mapState
	} from 'vuex'


	export default {
		name: 'app',
		methods: mapActions([
			'init_data'
		]),
		created() {
			this.init_data();
			if(!this.login){
				this.$router.push('/');
			}
			console.log(this.login)
		},
		computed: mapState({
			login: (state) => {
				return state.login
			}
		})
	}
</script>

<style scoped>
	.contain {
		width: 100%;
		height: 100%;
	}
	
	.main {
		-webkit-transition: padding .3s linear;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	
	#apps {
		width: 1000px;
		margin: 0 auto;
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		overflow: hidden;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left:-500px;
	}
	
	#apps .sidebar,
	#apps .main {
		height: 100%;
	}
	
	#apps .sidebar {
		float: left;
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
		height: calc(100% - 245px);
	}
</style>