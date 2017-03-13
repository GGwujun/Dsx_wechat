<script>
	import { mapActions } from 'vuex'
	
	import {mapState} from 'vuex'

	export default {
		methods: {
			onKeyup(e) {
				this.$store.dispatch('search',e.target.value);
			}
		},
		computed: mapState({
			user: (state) => {
				return state.user
			}
		})
	};
</script>

<template>
	<div class="card">
		<header>
			<img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
			<p class="name">{{user.name}}</p>
		</header>
		<footer>
			<input class="search" type="text" placeholder="search user..." @keyup="onKeyup">
		</footer>
	</div>
</template>

<style scoped>
	.card {
		padding: 12px;
		border-bottom: solid 1px #24272C;
	}
	
	.card footer {
		margin-top: 10px;
	}
	
	.card .avatar,
	.card .name {
		vertical-align: middle;
	}
	
	.card .avatar {
		border-radius: 2px;
	}
	
	.card .name {
		display: inline-block;
		margin: 0 0 0 15px;
		font-size: 16px;
	}
	
	.card .search {
		padding: 0 10px;
		width: 100%;
		font-size: 12px;
		color: #fff;
		height: 30px;
		line-height: 30px;
		border: solid 1px #3a3a3a;
		border-radius: 4px;
		outline: none;
		background-color: #26292E;
	}
</style>