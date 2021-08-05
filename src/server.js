const express = require("express");

const app = express();

const webhook = require("./routes/webhook");

app.use(express.json());

app.use("/webhook", webhook);

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;