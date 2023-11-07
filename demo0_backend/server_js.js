const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/login", (req, res) => {
  res.json({ result: "login", echo: req.query });
});

app.listen(8085, () => console.log("Server is  running..."));
