const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(8080);
console.log("app listening on port 8080");
