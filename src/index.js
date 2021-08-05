require('dotenv').config();

const server = require("./server");

server.listen(process.env.PORT || 1337, () => {
  console.log("Webhook is listening");
});

