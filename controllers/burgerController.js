// This file handles all of the routes taken by the user

var express = require("express");
// requires Node Express to use its features

var router = express.Router();
// sets up the Express function Router

var burgerProtocol = require('../models/burger.js')
// imports the model burger.js to use its unique database functions

router.get("/", function(req, res) {
    burgerProtocol.all(function(data) {
        // This api call gets all the data from the table
        var hbsObject = {
            burgers: data
        };
        // The data is then return as an object, which is used in the index.handlebars file
        console.log("Handlebars data start");
        console.log(hbsObject);
        console.log("Handlebars data end");
        res.render("index", hbsObject);
    });
    // Directs index.handlebars to display when the user path is '/'
});

router.post('/api/burgers', function(req, res) {
    // These api calls can be found at burger.js
    // This api call will start changing the burger status
    burgerProtocol.create([
        "burger","eaten"
    ], [
        // body is defined and parsed out by express.urlencoded
        req.body.burger, req.body.eaten
    ], function(result) {
        res.json ({ id: result.insertId });
    });
});

router.put('/api/gnosh/:id', function(req, res) {
    var meal = "id = " + req.params.id;

    console.log("Meal to be eaten is ", meal);

    burgerProtocol.update({
        eaten: req.body.eaten
    }, meal, function(result) {
        console.log(req.body.eaten);
        ////////////////////////// WHERE IS changedRows being defined?
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
// Exports routes for server.js to use