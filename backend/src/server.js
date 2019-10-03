const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistackmongo@omnistack-pagrn.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

// console.log('Sistema sendo disponibilizado na porta 3333')

app.listen(3333)
