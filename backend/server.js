const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use("/", (req, res) => {
  res.send("<h1>heelooo world</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`server is running on ${PORT}`);
});
