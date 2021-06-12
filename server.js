// Loads my express module
const express = require("express");
// Imports my routeHTML file
const routeHtml = require("./routes/routeHtml");
// Imports my routeAPI file
const routeApi = require("./routes/routeApi");
// Creates my express application
const app = express();
// App registers a function that parses JSON
app.use(express.json())
// App register a function that parses urlencoded bodies
app.use(express.urlencoded({ extended: true }))
// registers a function that serves images, CSS files, and javascript files
app.use(express.static("public"))
// registers the api route
app.use(routeApi);
// registers the html route
app.use(routeHtml);
// ensures that the web server is starting with a dynamic port
var port = process.env.PORT || 3000;
// listens on port 3000 for connections
app.listen(port, function () {
    console.log("Server is running")
})