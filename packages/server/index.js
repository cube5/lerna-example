const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("hey dude");
});

app.listen(PORT, () => {
  console.log(`Server listening in ${PORT}`);
});
