const express = require('express');
const bodyParser = require('body-parser');
const pessoas = require('./routes/pessoas');
const imoveis = require('./routes/imoveis');
const aluguel = require('./routes/aluguel');

const app = express();

app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/pessoas', pessoas);
app.use('/imoveis', imoveis);
app.use('/aluguel',aluguel);

app.listen(8080);

// export the instanc of express
module.exports = app;