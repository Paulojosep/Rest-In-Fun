const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'rest_in_fun' 
});

// Conecsao ao Mysql
connection.connect();

module.exports = connection;