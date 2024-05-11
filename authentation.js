const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();
const ALL_USER = [
    {
        username:"sailesh@example.com",
        password:"123",
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

};


app.listen(3000);