var express = require("express"),
app = express(),
server = require("http").createServer(app),
io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

io.of('/canal').on("connection", function(socket) {
	console.log('Connected!!');
	console.log('Sending news...');

	socket.on("users:list",(data) => {
		console.log('users lists',data);
	});

	socket.on("users:get", (data) => {
		console.log('get user',data);
	});

	socket.on('users:create', (data) => {
		console.log('users create',data);
	});

	socket.on('disconnect', function(data) {
		console.log('disconnect:',data);
	});
});

server.listen(3000);