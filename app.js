const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// all your express middleware here

app.get("/", (_, res) => res.status(201).json({ msg: "running" }));

module.exports = app;
