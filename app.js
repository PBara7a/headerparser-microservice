const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const ipaddress = req.headers.referer;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({ ipaddress, language, software });
});

module.exports = app;
