// This file allows for a connection to the database

var mysql = require('mysql');
// Requires mysql NPM

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "frnk_st7",
    database: "burgers_db",
    port: 3306
});
// Necessary code to connect to the SQL Database

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Listens for a successful connection to the database, otherwise throws an error

module.exports = connection;