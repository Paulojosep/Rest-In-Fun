const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());

function execSQLQuert(sqlQry, res){
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'rest_in_fun' 
    });

    // Conecsao ao Mysql
    connection.query(sqlQry, function(error, results, fields){
        if(error)
            res.json(error)
        else
            res.json(results)
        connection.end();
        console.log('executou');
    })
}

app.get('/', (req, res) => {
    res.send('Hello Wolrd');
});

app.get('/pessoas',(req, res)=> {
    execSQLQuert('SELECT * FROM pessoa', res);
});

app.get('/pessoas/:id?',(req, res)=> {
    let filter = ''
    if(req.param.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuert('SELECT * FROM pessoa' + filter, res);
});



//app.use(router);
app.listen(8080);

// export the instanc of express
module.exports = app;