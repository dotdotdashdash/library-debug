const express = require('express'); 
const loginRouter = express.Router();
// const user = require('../data/user');
const userdata = require('../model/UserModel');



loginRouter.get('/',function(req,res){
    res.render('login',{});
})

// loginRouter.get('/error', (req,res)=> {
//     res.render('login',{})
// });

loginRouter.post('/check',function(req,res){

    // console.log("loginroute - line16 - req.body", req.body)
    var email = req.body.email;
    var pwd = req.body.pwd;

    userdata.find({"email": email, "pwd": pwd}, (err, user) => {
        if(err) {
            res.send(err)
        } else if(user.length == 0) {
            console.log("Invalid Login!");
            res.send(`<script> alert("User not found!") </script>`);    
        } else {
            console.log("Logging in", email);
            res.redirect("/home")
        }
    })
});


module.exports = loginRouter;