const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
