const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../model/UserModel');

signupRouter.get('/',function(req,res){

    res.render('signup',{ });
    
})

signupRouter.post("/adduser",function(req,res){
    console.log("signup route - line12 - req.body", req.body)
    
    var newuser = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email":req.body.email,
        "pwd":req.body.pwd
    };
    const user = new userdata(newuser);
    user.save((err, user) => {
        if(err) {
            if(err.code == 11000){
                console.log("SignUp attempt using an existing Email ID");
                // res.send(`<script> alert("Email ID already in use!") </script>`);
                res.json({
                    "success": false,
                    "error": "Email ID already in use!"
                });
            } else {
                // res.send(`<script> alert("Unknown Error!") </script>`);
                res.json({
                    "success": false,
                    "error": "Unknown Error!"
                });
            }    
        } else {
        console.log("signuproute - line30 - newuser", newuser, "added");
        res.json({
            "success": true,
            "error": `${newuser.first_name} ${newuser.last_name} added`
        });
        }
    });

})

module.exports = signupRouter;