const mysql = require('mysql');

const connection = mysql.createConnection({
    host : '35.247.207.136',
    user : 'paulojosep',
    password : '123',
    database : 'Rest_In_Fun' 
});

// Conecsao ao Mysql
connection.connect();

module.exports = connection;