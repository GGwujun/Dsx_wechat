var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = [];
    
    
app.use('/', express.static(__dirname + '/'));



server.listen(3000,function(){
	console.log('listening on *:3000');
});




//连接 socket
io.on('connection', function(socket) {
	console.log('新连接已创建 !');
	
    //用户登录
    socket.on('login', function(nickname) {
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted');
        } else {
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system', nickname, users.length, 'login');
        };
    });
    
    
    
    //用户退出
    socket.on('disconnect', function() {
        if (socket.nickname != null) {
            users.splice(users.indexOf(socket.nickname), 1);
            socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
        }
    });
   
});
