const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../model/UserModel');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.post("/adduser",function(req,res){
    // console.log("signup route - line12 - req.body", req.body)
    
    var newuser = {
        "first_name": req.body.fname.trim(),
        "last_name": req.body.lname.trim(),
        "email":req.body.email.trim(),
        "pwd":req.body.pwd.trim()
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
        console.log("signuproute - line30 - newuser", newuser, "added");
        res.redirect("/login");
        }
    });

})

module.exports = signupRouter;