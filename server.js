var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	users = [];

//静态资源文件夹
app.use('/', express.static(__dirname + '/dist'));

server.listen(process.env.PORT || 9898); //端口9999

io.sockets.on('connection', function(socket) {

	//用户登录
	socket.on('login', function(nickname) {
		if(users.indexOf(nickname) > -1) {
			socket.emit('nickExisted');
		} else {
			socket.nickname = nickname;
			users.push(nickname);
			socket.emit('loginSuccess');
			io.sockets.emit('system', nickname, users.length, 'login');
		};
	});

	//用户离开
	socket.on('disconnect', function() {
		if(socket.nickname != null) {
			//users.splice(socket.userIndex, 1);
			users.splice(users.indexOf(socket.nickname), 1);
			socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
		}
	});

	//发送新消息
	socket.on('postMsg', function(msg, color) {
		socket.broadcast.emit('newMsg', socket.nickname, msg, color);
	});

	//new image get
	socket.on('img', function(imgData, color) {
		socket.broadcast.emit('newImg', socket.nickname, imgData, color);
	});
});