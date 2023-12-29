const express = require("express");
const cors = require("cors");
const connect = require("./connections/mongo");

const app = express();

const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  imagePath: String,
  locationText: String,
  title: String,
  description: String,
});
const Model = mongoose.model("posts", schema);

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();

app.get("/", (req, res) => {
  res.status(200).json("hilol");
});

app.put("/create", (req, res) => {
  const { imagePath, locationText, title, description } = req.body;
  Model.collection.insertOne({
    imagePath: imagePath,
    locationText: locationText,
    title: title,
    description: description,
  });
  res.status(200).json({ imagePath, locationText, title, description });
});

app.get("/test", async (req, res) => {
  const allData = await Model.find({});
  res.send(allData);
});

app.delete("/delete", (req, res) => {
  Model.collection.deleteOne({});
  res.status(200).json({ success: "Ok!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
