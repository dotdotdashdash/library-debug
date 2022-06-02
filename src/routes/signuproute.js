const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.post("/adduser",function(req,res){
    // console.log("signup route - line12", req.body)
    
    var newuser = {
        "id":req.body.uid,
        "pwd":req.body.pwd
    };
    console.log("signup route - line18", newuser);
    user.push(newuser);
    console.log("signup route - line20",user);
    res.redirect("/login");
})

module.exports = signupRouter;