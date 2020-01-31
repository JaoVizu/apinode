const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://joaovizu:joaovizu2020@cluster0-q7iue.gcp.mongodb.net/gamesinfo?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

//body parser para receber json
app.use(express.json());
app.use(routes);

app.listen('3333');