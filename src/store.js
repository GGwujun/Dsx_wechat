/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
    	login:false,
    	err:false,
    	errMession:'',
        // 当前用户
        user: {
            name: 'coffce',
            img: '../static/dsx.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: '猪八戒',
                    img: '../static/bj.jpg'
                },
                messages: [
                    {
                        content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                        date: now
                    }, {
                        content: '项目地址: https://github.com/GGwujun/chat.git',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: '沙师弟',
                    img: '../static/ssd.jpg'
                },
                messages: []
            },
            {
                id: 3,
                user: {
                    name: '师傅',
                    img: '../static/qrcode.jpg'
                },
                messages: [
                	{
                        content: '师傅就是如此六',
                        date: now
                    }, {
                        content: '大师兄公众号：‘web前端大师兄’',
                        date: now
                    }
                ]
            }
        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            let login = localStorage.getItem('islogin');
            let username = localStorage.getItem('username');
            if (data) {
                state.sessions = JSON.parse(data);
            }
            if(username){
            	state.login = JSON.parse(login);
            	state.user.name = JSON.parse(username);
            }
            
        },
        // 发送消息
        SEND_MESSAGE (state, content) {
            let session = state.sessions.find(item => item.id === state.currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        // 搜索
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
            console.log(state.filterKey)
        },
        Login_err (state,value) {
            state.err = true;
            state.errMession = value;
        },
        Is_Login (state, username,password) {
            state.login = true;
            state.user.name = username;
        }
    },
    actions: {
	    init_data ({ commit }) {
	      commit('INIT_DATA')
	    },
	    sendMessage ({ commit },content) {
	      commit('SEND_MESSAGE',content)
	    },
	    selectSession ({ commit },id) {
	    	commit('SELECT_SESSION',id)
	    },
	    search ({ commit },value) {
	      commit('SET_FILTER_KEY',value)
	    },
	    err({ commit },value){
    	  commit('Login_err',value)
	    },
	    login({ commit },username,password){
	    	commit('Is_Login',username,password)
	    }
  	}
});

store.watch(
    (state) => state.sessions,
    (val) => {
        //console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
        localStorage.setItem('islogin', JSON.stringify(val));
    },
    {
        deep: true
    }
);

store.watch(
    (state) => state.login,
    (val) => {
        localStorage.setItem('islogin', JSON.stringify(val));
    },
    {
        deep: true
    }
);

store.watch(
    (state) => state.user.name,
    (val) => {
        localStorage.setItem('username', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
