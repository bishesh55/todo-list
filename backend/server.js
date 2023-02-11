const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize } = require("sequelize");

app.use(express.json()); //add this before any route or before using req.body
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
app.post("/hero", (req, res) => {
  console.log("Hero");
  console.log(req.body);
  res.send("body");
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("todo", "root", "mysql12345", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
