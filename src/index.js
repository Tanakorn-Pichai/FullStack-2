require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("Ha lo");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
