// This is the server.js file, hub of all the app's operations
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Boiler plate code. Requires use of Express NPM and sets the port

app.use(express.static('public'));
// Utilizes content in folder called "public"

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
// Requires use of handlebars.js

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// Sets main.handlebars as the primary template for the page

app.set("view engine", "handlebars");
// Sets handlebars as the default viewing engine

var routes = require('./controllers/burgerController.js');
app.use(routes);
// Imports the routes in the controller file and gives server access to them

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    // Listens for successful connection to server
});