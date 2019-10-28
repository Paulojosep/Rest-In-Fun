const mysql = require('mysql');

const connection = mysql.createConnection({
    host : '',
    user : '',
    password : '',
    database : ''
});

// Conecsao ao Mysql
connection.connect();

module.exports = connection;