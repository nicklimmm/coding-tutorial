const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = app.listen(8000, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});
