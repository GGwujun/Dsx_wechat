<template>
	<div class="contain">
		<div class="main">
			<div id="apps" v-if='login'>
				<div class="sidebar">
					<router-view name="Card"></router-view>
					<router-view name="Menu"></router-view>
					<router-view name="List" v-if="Switch.list"></router-view>
					<router-view name="FriendList" v-if="Switch.friendlist"></router-view>
				</div>
				<div class="main">
					<router-view name="Message"></router-view>
					<router-view name="Texts"></router-view>
				</div>
			</div>
			<router-view v-if='!login'></router-view>
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
			if(!this.login) {
				this.$router.push('/');
			}
		},
		computed: mapState({
			login: (state) => {
				return state.login
			},
			Switch: (state) => {
				return state.Switch
			}
		})
	}
</script>

<style scoped>
	.contain {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: url(../static/2zrdI1g.jpg) no-repeat 50%;
		overflow: hidden;
		background-size: cover;
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
		margin-left: -500px;
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