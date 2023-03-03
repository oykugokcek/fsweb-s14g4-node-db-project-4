const express = require("express");
const server = express();
const tarifRouter = require("./tarifler/tarifler-router");
server.use(express.json());

server.use("/api/tarifler", tarifRouter);

server.get("/", (req, res) => {
  res.send("Başlıyruuuz");
});

module.exports = server;
