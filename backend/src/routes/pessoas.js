const express = require('express');
const router = express.Router();
const db = require('../database/db')
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Dados



//////////////////q

router.get('/',(req,res)=> {
    var sql = "SELECT * FROM pessoa";
    db.query(sql,(err, rows, fields) => {
        if(err){
            res.status(500).send({ error: "something failed !"})
        }
        res.json(rows);
    })
})

router.get('/:id',(req,res)=>{
    var id = req.params.id;
    var sql = `SELECT * FROM pessoa WHERE ID_Pessoa=${id}`;
    db.query(sql,(err, rows, fields) => {
        if(err) {
            res.status(500).send({ error: "something failed !"})
        }
        res.json(rows);
    })
})

router.post('/usuario',(req,res)=> {
    var sql = "SELECT * FROM usuario";
    db.query(sql,(err, rows, fields) => {
        if(err){
            res.status(500).send({ error: "something failed !"})
        }
        res.render('usuario.ejs');
    })
})

module.exports = router;