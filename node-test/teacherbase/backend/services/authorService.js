var express = require('express')
var router = express.Router();
var Author = require('../models/author')
var users = require('./userService')


router.post('/author', users.checkAuth, (req,res) => {
    var author = new Author(req.body)
    author.save((req,err) => {
        if(err) { 
            console.log(err)
            return res.sendStatus(500).send({message:error})
        }
        Response.sendStatus(201).send({message:"Loggedin"})
    })
})

router.get('/author', users.checkAuth, async (req,res) => {
    //var authors = await Author.find({},'-__v', '-_id')
    var authors = await Author.find({},'-__v')
    res.send(authors)
})


var authors = { router, checkAuth:(req,res,next) => {
    if(!req.header('authorization')) {
        return res.status(401).send("Token required!")
    }

    var token = req.header('authorization').split(' ')[1]
    // check valid token code here ...
    
    next();
}}

module.exports = authors
