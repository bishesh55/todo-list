const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
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
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect:
      "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();

// Openai stuff
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function openAiTest() {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
}

app.get("/generate-image", function (req, res) {
  const receivedPrompt = req.query.prompt;
  console.log(receivedPrompt)
  if (receivedPrompt == null || receivedPrompt === "undefined") {
    res.send("Invalid prompt");
  }

  openai
    .createImage({
      prompt: req.query.prompt ?? "Nothing",
      n: 1,
      size: "1024x1024",
    })
    .then((response) => {
      const image_url = response.data.data[0].url;
      res.send(image_url);
    });
});
