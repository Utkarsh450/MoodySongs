const express = require("express");
const app = express();
const songRoutes = require("./routes/songs.routes")
app.use(express.json());
app.use("/", songRoutes) // tell express about our api which is songs api

module.exports = app;