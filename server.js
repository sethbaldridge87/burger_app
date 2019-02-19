var express = require("express");
var app = express();
var PORT = 8000;
// Boiler plate code. Requires use of Express NPM and sets the port

app.use(express.static('public'));
// Utilizes content in folder called "public"

var exphbs = require("express-handlebars");
// Requires use of handlebars.js

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// Sets main.handlebars as the primary template for the page

app.set("view engine", "handlebars");
// Sets handlebars as the default viewing engine

app.get("/", function(req, res) {
    res.render("index");
    // Directs index.handlebars to display when the user path is '/'
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    // Listens for successful connection to server
});