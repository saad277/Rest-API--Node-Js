const express = require("express");

const app = express();

const routes = require("./api")

const bodyParser = require("body-parser");

//mongo db connection
const mongoose = require("mongoose");

const { mongoUrl } = require("./config")

mongoose.connect(mongoUrl);

mongoose.Promise = global.Promise;


app.use(bodyParser.json())

//initialize routes
app.use("/api", routes)


//error handling middle-ware
app.use(function (error, req, res, next) {

    res.send({ error: error.message })

})


app.get("/api", (req, res) => {


    res.end("This is response");


})







app.listen(process.env.port || 4000, function () {


    console.log("running");

})