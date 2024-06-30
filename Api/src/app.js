const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const livroRoute =  require('./routes/livroRoute.js');
const cors =  require('cors');



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/livros', livroRoute);


module.exports = app;