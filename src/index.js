require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT; // ใช้ port จากระบบเท่านั้น

app.get("/", (req, res) => {
  res.send("Ha lo");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
