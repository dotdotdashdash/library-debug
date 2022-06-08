const express = require('express'); 
const loginRouter = express.Router();
// const user = require('../data/user');
const userdata = require('../model/UserModel');



loginRouter.get('/',function(req,res){
    res.render('login',{});
})

loginRouter.post('/check',function(req,res){

    // console.log("loginroute - line16 - req.body", req.body)
    var email = req.body.email.trim();
    var pwd = req.body.pwd.trim();


    userdata.find({"email": email}, (err, user) => {
        
        // console.log(`entered pass: ${pwd}, user: ${user[0]['pwd']}`);

        if(err) {
            res.send(err)
        } else if(user.length == 0) {
            console.log("User not found!");
            res.send(`<script> alert("User not found!") </script>`);    
        } else if(pwd != user[0]['pwd']){
            console.log("Wrong Password!");
            res.send(`<script> alert("Email ID and Password doesn't match!") </script>`);  
        } else {
            console.log("Logging in");
            res.redirect("/home");
        }
    })
});

module.exports = loginRouter;