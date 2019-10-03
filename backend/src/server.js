const express = require("express");
const mongoose = require("mongoose");
const routes = require("./config/routes");

const app = express();

mongoose.connect(
  //Mongo Local Trabalho
  "mongodb://127.0.0.1:8081/aircnc?retryWrites=true&w=majority",
  {
    //MongoDB Atlas
    // 'mongodb+srv://omnistack:omnistackmongo@omnistack-pagrn.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
