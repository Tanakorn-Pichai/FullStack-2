require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("อ่ะฮิๆ");
});

app.listen(port,() => {
    console.log(`app listening at http://localhost:${port}`);
  },
);
