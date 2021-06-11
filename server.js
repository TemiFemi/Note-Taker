const express = require("express");

const routeHtml = require("./routes/routeHtml");

const routeApi = require("./routes/routeApi");

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use(routeApi);

app.use(routeHtml);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server is running")
})