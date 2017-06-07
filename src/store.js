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
		// 当前选中的会话
		currentSessionId: 1,
		// 过滤出只包含这个key的会话
		filterKey: ''
	},
	mutations: {
		INIT_DATA(state) {
			let data = localStorage.getItem('vue-chat-session');
			let username = localStorage.getItem('userinfo');

			if (data) {
				state.sessions = JSON.parse(data);
			}

			if (username) {
				state.login = true;
				state.user.name = JSON.parse(username).username;
			}
		},
		// 发送消息
		SEND_MESSAGE(state, content) {
			state.sessions.forEach(function (item) {
				if (item.id === state.currentSessionId) {
					let username = localStorage.getItem('userinfo');
					username = JSON.parse(username);
					item.messages.push({
						content: content,
						date: new Date(),
						self: true
					});

					let params = {
						fromid: username.id,
						toid: state.currentSessionId,
						messages: content
					}
					console.log(params);
					CHAT.changeInfo(params);
				}
			})
		},
		// 选择会话
		SELECT_SESSION(state, id) {
			state.currentSessionId = id;
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
		},
		Login_err(state, value) {
			state.err = true;
			state.errMession = value;
		},
		//登录
		Is_Login(state, logininfo) {
			state.login = logininfo.login;
			state.user.name = logininfo.user.username;
			state.user.id = logininfo.user.id;
			if (logininfo.user.avatar_url)
				state.user.img = logininfo.user.avatar_url;

			localStorage.setItem('userinfo', JSON.stringify(logininfo.user));
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
		// selectSession({ commit }, id) {
		// 	commit('SELECT_SESSION', id)
		// },
		err({ commit }, value) {
			commit('Login_err', value)
		},
		login({ commit }, logininfo) {
			commit('Is_Login', logininfo)
		}
		// switchs({ commit }, info) {
		// 	commit('Switch', info)
		// }
		// lpMenu({ commit }, lpmune) {
		// 	commit('IS_LPMENUSHOW', lpmune)
		// }
	}
});

store.watch(
	(state) => state.sessions,
	(val) => {
		localStorage.setItem('vue-chat-session', JSON.stringify(val));
	}, {
		deep: true
	}
);
export default store;