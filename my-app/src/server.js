const server = require("http").createServer();
var http = require('http').createServer(server);
const io = require("socket.io")(server, {
    transports: ["websocket", "polling"]
});
const users = {};
io.on("connection", client => {
    client.on("username", username => {
        const user = {
            name: username,
            id: client.id
        };
        users[client.id] = user;
        io.emit("connected", user);
        io.emit("users", Object.values(users));
    });

    client.on("send", message => {
        io.emit("message", {
            text: message,
            date: new Date().toISOString(),
            user: users[client.id]
        });
        console.log("orferg");
    });

    client.on("disconnect", () => {
        const username = users[client.id];
        delete users[client.id];
        io.emit("disconnected", client.id);
    });
});
server.listen(3000);
console.log('listening on *:3000');

// http.listen(3000, () => {
//     console.log('listening on *:3000');
// });