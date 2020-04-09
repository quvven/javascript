var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')


var users = require('./services/userService')
var authors = require('./services/authorService')



var app = express()

app.use(cors())
app.use(bodyParser.json())


app.get('/', users.checkAuth, (req,res) => {
    res.end("index");
})

var dbconn = "mongodb+srv://deneme:deneme123@cluster0-1hsph.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbconn, (err) => {
   if(err) { throw err; } else { console.log('DB Connected!'); }
})

app.use('/users', users.router)
app.use('/author', authors.router)

app.listen(8899);
