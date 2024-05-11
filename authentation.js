const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();
const ALL_USER = [
    {
        username:"sailesh@example.com",
        password:"1234",
        name:"sailesh ghimire"
    },
    {
        username:"anwesha@gmail.com",
        password:"123123",
        name:"anwesha ghimire"
    },
    {
        username:"abc@example.com",
        password:"123321",
        name:"abc nepal"
    },  
];

function userExists(username,password){
    let userExists = false;
    for(let i=0;i<ALL_USER.length;i++){
        if(ALL_USER[i].username == username && ALL_USER[i].password == password){
            userExists = true;
        }
    }
    return userExists;
};
app.use(express.json());
app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesnot exist in our memory db"
        });
    }
    var token = jwt.sign({username:username},jwtpassword);
    return res.json({
        token
    });
});

app.get("/user", function(req,res){
    const token = req.header.token;
    try{
        const decoded = jwt.verify(token, jwtpassword);
        const username = decoded.username;
        return res.json({
            users:ALL_USER
        });
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid token"
        });
    }
});




app.listen(3000);