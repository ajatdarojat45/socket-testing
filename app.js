const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const socketHandler = require("./config/socketHandler");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", socketHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => res.status(201).json({ msg: "running" }));

module.exports = { server, io };
