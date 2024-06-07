const express = require("express");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.get("/", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "What do you know about the future";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  res.send(text);
});



const port = 4000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
