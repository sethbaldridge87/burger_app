// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// create the object burgerProtocol
var burgerProtocol = {
    // this function will display all current entries in the database
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    // 'create' is the key of the first key value pair, and the following function is the value. The parameters cols and vals are arrays. 
    create: function(cols, vals, cb) {
        // These object functions are found in the orm.js
        // WHAT IS THE cb FOR? //////////////////////////////////////////////
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, meal, cb) {
        orm.update("burgers", objColVals, meal, function(res) {
            console.log("Meal in burger.js: " + meal);
            cb(res);
        });
    }
};

module.exports = burgerProtocol;