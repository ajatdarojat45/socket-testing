const io = require("socket.io")();

io.on("connection", (socket) => {
  // all socket listener here
  socket.on("send-message", (payload) => {
    socket.emit("send-message", payload);
  });
});

module.exports = io;
