const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { getByClassification, getByName, getAll } = require("./src/service.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("pong, server is alive!");
});

app.get("/charities", async (req, res) => {
  try {
    const charities = await getAll();
    res.send(charities);
  } catch (error) {
    console.log(error);
  }
});

app.get("/charities/category/:classification", async (req, res) => {
  try {
    const charities = await getByClassification(req.params.classification);
    res.send(charities);
  } catch (error) {
    console.log(error);
  }
});

app.get("/charities/name/:name", async (req, res) => {
  try {
    const charities = await getByName(req.params.name);
    res.send(charities);
  } catch (error) {
    console.log(error);
  }
});

app.use(express.static(path.join(__dirname, "client/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public", "index.html"));
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
