<script>
import {
	mapState
} from 'vuex'
import Vue from 'vue';
const now = new Date();
export default {
	data() {
		return {
			friends: []
		}
	},
	methods: {
		selectFriend(info) {
			this.$store.commit('SELECT_FRIEND', info);
			// this.$store.dispatch('switchs', 'list');
			this.$store.commit('Switch', 'list');
		}
	},
	computed: mapState({
		url: (state) => {
			return state.url;
		},
		user: (state) => {
			return state.user;
		}
	}),
	created() {
		let self = this;
		Vue.http.options.emulateJSON = true;
		let username = localStorage.getItem('userinfo');
		username = JSON.parse(username);
		Vue.http.post(self.url + 'friend', { UserID: username.id }).then(function (res) {
			self.friends = res.body;
			console.log(self.friends)
		}, function () {
			alert('请求失败处理');   //失败处理
		});
	}
}
</script>

<template>
	<div class="list">
		<ul>
			<li v-for="item in friends" @click="selectFriend(item)">
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