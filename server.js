const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("pong");
});



app.use(express.static(path.join(__dirname, "client/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public", "index.html"));
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
