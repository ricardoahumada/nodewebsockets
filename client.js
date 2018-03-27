io = require("socket.io-client");

var socket = io.connect("http://localhost:3000/canal");
socket.on("news", function(data) {
	socket.emit("pong");
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});	

socket.on('disconnect', function(event) {
	console.log("Disconnected!");
	socket.disconnect();
});