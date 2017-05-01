import io from 'socket.io-client'
const CHAT = {
	msgObj: document.getElementsByClassName("body-wrapper")[0],
	username: null,
	userid: null,
	color: null,
	socket: null,
	onlineCount: 0,
	onlineUsers: null,
	msgArr: [],

	//退出，本例只是一个简单的刷新
	logout: function() {
		this.socket.disconnect();
		// location.reload();
	},
	//提交聊天消息内容
	submit: function(msg) {
		if(msg != '') {
			let obj = {
				userid: this.userid,
				username: this.username,
				msg: msg,
				color: this.color
			};
			this.socket.emit('message', obj);
		} else {
			console.log('msg is null')
		}

		return false;
	},
	genUid: function() {
		return new Date().getTime() + "" + Math.floor(Math.random() * 899 + 100);
	},
	//更新系统消息，本例中在用户加入、退出的时候调用
	updateSysMsg: function(o, action) {
		//当前在线用户列表
		this.onlineUsers = o.onlineUsers;
		//当前在线人数
		this.onlineParent = o.onlineCount;
		//新加入用户的信息
		var user = o.user;

		//更新在线人数
		var userhtml = '';
		var separator = '';
	},
	changeInfo() {
		this.userid = localStorage.getItem('userid');
		this.username = localStorage.getItem('name');
		this.color = localStorage.getItem('color');
		this.weichat = localStorage.getItem('weichat');
		this.socket.emit('changeInfo', {
			userid: this.userid,
			username: this.username,
			color: this.color,
			weichat: this.weichat
		});
	},

	init: function(data,handle) {
		/*
		客户端根据时间和随机数生成uid,这样使得聊天室用户名称可以重复。
		实际项目中，如果是需要用户登录，那么直接采用用户的uid来做标识就可以
		*/
		this.userid = localStorage.getItem('userid');
		this.username = localStorage.getItem('username');
		this.color = localStorage.getItem('color');
		this.weichat = localStorage.getItem('weichat');

//		if(!this.userid) {
//			return
//		}

		//连接websocket后端服务器
		this.socket = io.connect('http://119.23.245.101:3000/');
		//告诉服务器端有用户登录
		this.socket.emit('login', data);

		//心跳包，30s左右无数据浏览器会断开连接Heartbeat
		setInterval(() => {
			this.socket.emit('heartbeat', 1);
		}, 10000)

		//监听新用户登录
		this.socket.on('login', function(obj) {
			//console.log(obj)
			//CHAT.updateSysMsg(obj, 'logout');
			//CHAT.msgArr.push(obj)
			handle&&handle(obj)
		});

		this.socket.on('changeInfo', function(o) {
			CHAT.onlineUsers[o.userid] = o
			console.log(o)
		});
		//监听用户退出
		this.socket.on('logout', function(o) {
			CHAT.updateSysMsg(o, 'logout');
		});

		//监听消息发送
		this.socket.on('message', function(obj) {
			CHAT.msgArr.push(obj)
		});

	}
}
export default CHAT