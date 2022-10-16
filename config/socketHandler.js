const socketHandler = (socket) => {
  socket.on("send-message", (payload) => {
    socket.emit("send-message", payload);
  });
};

module.exports = socketHandler;
