<script>
	import {
		mapState
	} from 'vuex'
const now = new Date();
	export default {
		methods: {
			selectSession(id) {
				// this.$store.dispatch('selectSession', id);
				this.$store.commit('SELECT_SESSION', id);
			}
		},
		computed: mapState({
			currentId: (state) => {
				return state.currentSessionId
			},
			sessions: (state) => {
				let result = state.sessions.filter(session => session.user.name.includes(state.filterKey));
				return result;
			}
		})
	};
</script>

<template>
	<div class="list">
		<ul>
			<li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
				<img class="avatar" width="30" height="30" :alt="item.user.name" :src="item.user.img">
				<p class="name">{{item.user.name}}</p>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.list ul {
		padding: 0;
	}
	.list li {
		padding: 12px 30px;
		border-bottom: 1px solid #292C33;
		cursor: pointer;
		transition: background-color .1s;
		list-style: none;
	}
	
	.list li:hover {
		background-color: rgba(255, 255, 255, 0.03);
	}
	
	.list li.active {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.list .avatar,
	.list .name {
		vertical-align: middle;
	}
	
	.list .avatar {
		border-radius: 2px;
	}
	
	.list .name {
		display: inline-block;
		margin: 0 0 0 15px;
	}
</style>