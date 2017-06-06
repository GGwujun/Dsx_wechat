/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import CHAT from './api/client';
import io from 'socket.io-client';
Vue.use(VueResource);

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
	state: {
		url: 'http://119.23.245.101:3000/',
		login: false,
		err: false,
		errMession: '',
		lpmune: false,

		//切换左边菜单
		Switch: {
			list: true
		},
		// 当前用户
		user: {
			name: 'coffce',
			img: '../static/dsx.jpg',
			id: 0
		},
		// 会话列表
		sessions: CHAT.changeinfo,
		friends: [],
		// 当前选中的会话
		currentSessionId: 1,
		// 过滤出只包含这个key的会话
		filterKey: ''
	},
	mutations: {
		INIT_DATA(state) {
			let data = localStorage.getItem('vue-chat-session');
			let login = localStorage.getItem('islogin');
			let username = localStorage.getItem('username');

			if (data) {
				state.sessions = JSON.parse(data);
			}

			if (username) {
				state.login = JSON.parse(login);
				state.user.name = JSON.parse(username);
			}

			Vue.http.options.emulateJSON = true;
			Vue.http.post(state.url + 'friend', { UserID: 1 }).then(function (res) {
				state.friends = res.body;
			}, function () {
				alert('请求失败处理');   //失败处理
			});
		},
		// 发送消息
		SEND_MESSAGE(state, content) {
			let session = state.sessions.find(item => item.id === state.currentSessionId);
			session.messages.push({
				content: content,
				date: new Date(),
				self: true
			});

			let params = {
				fromid: state.user.id,
				toid: state.currentSessionId,
				messages: content
			}
			CHAT.changeInfo(params);
		},
		// 选择会话
		SELECT_SESSION(state, id) {
			state.currentSessionId = id;
			console.log(state)
		},
		SELECT_FRIEND(state, info) {
			let flag = state.sessions.find(function (item) {
				return item.id == info.id;
			})

			if (flag) {
				state.currentSessionId = flag.id;
			} else {
				state.sessions.push(info)
			}
		},
		// 搜索
		SET_FILTER_KEY(state, value) {
			state.filterKey = value;
			console.log(state.filterKey)
		},
		Login_err(state, value) {
			state.err = true;
			state.errMession = value;
		},
		//登录
		Is_Login(state, logininfo) {
			state.login = logininfo.login;
			state.user.name = logininfo.user.NickName;
			state.user.id = logininfo.user.ID;
			if (logininfo.user.Photo)
				state.user.img = logininfo.user.Photo;
		},
		//左边菜单切换
		Switch(state, attrs) {
			switch (attrs) {
				case 'list':
					state.Switch.list = true;
					state.Switch.friendlist = false;
					break;
				case 'friendlist':
					state.Switch.friendlist = true;
					state.Switch.list = false;
					break;
				default:
					break;
			}
		},
		//顶部按钮菜单
		IS_LPMENUSHOW(state, lpmune) {
			state.lpmune = lpmune;
		}
	},
	actions: {
		init_data({ commit }) {
			commit('INIT_DATA')
		},
		sendMessage({ commit }, content) {
			commit('SEND_MESSAGE', content)
		},
		selectSession({ commit }, id) {
			commit('SELECT_SESSION', id)
		},
		search({ commit }, value) {
			commit('SET_FILTER_KEY', value)
		},
		err({ commit }, value) {
			commit('Login_err', value)
		},
		login({ commit }, logininfo) {
			commit('Is_Login', logininfo)
		},
		switchs({ commit }, info) {
			commit('Switch', info)
		},
		lpMenu({ commit }, lpmune) {
			commit('IS_LPMENUSHOW', lpmune)
		}
	}
});

store.watch(
	(state) => state.sessions,
	(val) => {
		console.log('CHANGE: ', val);
		localStorage.setItem('vue-chat-session', JSON.stringify(val));
		localStorage.setItem('islogin', JSON.stringify(val));
	}, {
		deep: true
	}
);

store.watch(
	(state) => state.login,
	(val) => {
		localStorage.setItem('islogin', JSON.stringify(val));
	}, {
		deep: true
	}
);

store.watch(
	(state) => state.user.name,
	(val) => {
		localStorage.setItem('username', JSON.stringify(val));
	}, {
		deep: true
	}
);

export default store;