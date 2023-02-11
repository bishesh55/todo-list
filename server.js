const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Slash route");
});
app.get("/product", (req, res) => {
  // database bata product nikalyo

  const product = {
    id: 1,
    name: "Portable sewing machine.",
  };
  res.send(product);
});
app.get("/hero", (req, res) => {
  const monkeyking = {
    id: 2,
    type: "carry",
    lane: "mid",
    ss: "jungu mastery",
  };
  res.send(monkeyking);
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
