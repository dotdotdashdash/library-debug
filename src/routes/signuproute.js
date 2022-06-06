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
    const user = new userdata(newuser);
    user.save((err, user) => {
        if(err) {
            if(err.code == 11000){
                console.log("SignUp attempt using an existing Email ID");
                res.send(`<script> alert("Email ID already in use!") </script>`);
            } else {
                res.send(`<script> alert("Unknown Error!") </script>`);
            }    
        } else {
        console.log("signuproute - line20 - newuser", newuser, "added");
        res.redirect("/login");
        }
    });

})

module.exports = signupRouter;