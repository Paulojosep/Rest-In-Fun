const express = require('express');
const bodyParser = require('body-parser');
const pessoa = require('./routes/pessoas');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/pessoas', pessoa);

app.listen(8080);

// export the instanc of express
module.exports = app;