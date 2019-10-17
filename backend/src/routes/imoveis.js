const express = require('express');
const router = express.Router();
const db = require('../db')
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/',(req,res)=> {
    var sql = "SELECT * FROM imoveis";
    db.query(sql,(err, rows, fields) => {
        if(err){
            res.status(500).send({ error: "something failed !"})
        }
        res.json(rows);
    })
})

router.get('/:id',(req,res)=>{
    var id = req.params.id;
    var sql = `SELECT * FROM imoveis WHERE id_casa=${id}`;
    db.query(sql,(err, rows, fields) => {
        if(err) {
            res.status(500).send({ error: "something failed !"})
        }
        res.json(rows);
    })
})

module.exports = router;