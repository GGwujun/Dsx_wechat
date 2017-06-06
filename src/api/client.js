import io from 'socket.io-client';
const now = new Date();
const CHAT = {
	username: null,
	userid: null,
	socket: null,
	msgArr: [],
	changeinfo: [],


	//退出，本例只是一个简单的刷新
	logout: function () {
		this.socket.disconnect();
	},


	genUid: function () {
		return new Date().getTime() + "" + Math.floor(Math.random() * 899 + 100);
	},

	//发送消息给后台
	changeInfo(obj) {
		//连接websocket后端服务器
		this.socket = io.connect('http://119.23.245.101:3000/');
		this.socket.emit('changeInfo', obj);
	},

	init: function (data, handle) {
		let self = this;

		//连接websocket后端服务器
		this.socket = io.connect('http://119.23.245.101:3000/');

		//告诉服务器端有用户登录
		this.socket.emit('login', data);

		//监听新用户登录
		this.socket.on('login', function (obj) {
			handle && handle(obj)
		});

		//心跳包，30s左右无数据浏览器会断开连接Heartbeat
		setInterval(() => {
			this.socket.emit('heartbeat', 1);
		}, 10000)

		//监听消息
		this.socket.on('changeInfo', function (o) {
			let flag = self.changeinfo.find(function (data) {
				return data.id == o.fromid;
			})

			if (flag) {
				flag.messages.push({
					content: o.messages,
					date: now
				})
			} else {
				self.changeinfo.push({
					id: o.fromid,
					user: {
						name: '猪八戒',
						img: '../static/bj.jpg'
					},
					messages: [{
						content: o.messages,
						date: now
					}]
				})
			}
		});


		//监听用户退出
		// this.socket.on('logout', function (o) {
		// 	CHAT.updateSysMsg(o, 'logout');
		// });
	}
}
export default CHAT