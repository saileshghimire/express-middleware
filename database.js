const mongoose = require("mongoose");
const express = require("express");
const app = express();


mongoose.connect(
    'mongodb+srv://sailesh:1234@cluster0.vm8tuzu.mongodb.net/userappnew',
);

const User = mongoose.model("users",{
    name: String,
    email: String,
    password: String,
});

// const user = new User({
//     name:'sailesh Ghimire',
//     email:'sailesh@gmail.com',
//     password:'123456'
// });
app.use(express.json());
app.post("/signin", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const exitUser = await User.findOne({email: email });
    
    if(exitUser){
        return res.status(404).send("user already exit");
    }

    const user = new User({
        name: username,
        email: email,
        password: password
    });
    user.save();
    return res.json({
        msg:"user is created"
    })
})

app.listen(3000);
