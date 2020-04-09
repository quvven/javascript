var exp = require('express')
var router = exp.Router();
var jwt = require('jwt-simple')

var Users = require('../models/user')

router.post('', (req,res) => {
    var user = new Users(req.body);
    user.save((err,data) => {
        if(err) { 
            return res.sendStatus(500).send({message:error});
        } else {
            return res.sendStatus(200).send({message:"Created"});
        }
    })
    
    // res.end("index");
})

router.post('/login',async (req,res) => {
    var form = req.body;
    var user = await Users.findOne({email:form.email});
    if(!user) {
        return res.status(401).send({
            message: "Authorize Fail!"
        })
    }

    if(form.password !== user.password) {
        return res.status(401).send({
            message: "Authorize Fail!"
        })
    }
    
    var payload = {}
    var token = jwt.encode(payload,'12345')
    
    return res.status(200).send({
        token: token
    });
    // res.end("index");
})


router.get('', async (req,res) => {
    var users = await Users.find({}, '-__v')
    res.send(users);
})

var users = { router, checkAuth:(req,res,next) => {
    if(!req.header('authorization')) {
        return res.status(401).send("Token required!")
    }

    var token = req.header('authorization').split(' ')[1]
    // check valid token code here ...
    
    next();
}}

module.exports = users
