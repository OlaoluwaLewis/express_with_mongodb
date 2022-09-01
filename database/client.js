const mongoose = require("mongoose");

const { DATABASE_CONNECTION } = process.env;

module.exports = mongoose
  .connect(DATABASE_CONNECTION)
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((e) => console.log(e));