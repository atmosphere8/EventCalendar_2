const mongoose = require("mongoose");

const mongo = {
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD,
  port: process.env.MONGO_PORT,
  db: process.env.MONGO_DATABASE,
};

module.exports = () => {
  mongoose
    .connect(
      `mongodb://${mongo.user}:${mongo.pass}@mongo:${mongo.port}/${mongo.db}?authMechanism=DEFAULT&authSource=admin`
    )
    .then(() => console.log("Connected!"));
};
