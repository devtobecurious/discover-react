"use server";

const mysql = require('mysql');

// configurations for creating mysql connection
const connection = mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'devtobecurious.database.dev',      // database from which we want to connect our node application
    user: 'thecat',          // username of the mysql connection
    password: 'DevToBeCurious!'       // password of the mysql connection
});

export async function connectToDb() {
    connection.connect(function (err: unknown) {
        if (err) {
            console.log("error occurred while connecting");
        } else {
            console.log("connection created with mysql successfully");
        }
    });
}
// Server=localhost;Port=3306;Database=devtobecurious.database.dev;Uid=thecat;Pwd=DevToBeCurious!;