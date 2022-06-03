const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../model/UserModel');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.post("/adduser",function(req,res){
    // console.log("signup route - line12 - req.body", req.body)
    
    var newuser = {
        "first_name": req.body.fname,
        "last_name": req.body.lname,
        "email":req.body.email,
        "pwd":req.body.pwd
    };
    console.log("signup route - line18 - newuser", newuser);
    // user.push(newuser);
    // console.log("signup route - line20",user);
    const user = new userdata(newuser);
    user.save();

    res.redirect("/login");
})

module.exports = signupRouter;