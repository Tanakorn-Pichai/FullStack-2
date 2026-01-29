require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("ไ'''ง");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
