const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://sailesh:1234@cluster0.vm8tuzu.mongodb.net/userappnew',
);

const User = mongoose.model("users",{
    name: String,
    username: String,
    password: String,
});

const user = new User({
    name:'sailesh Ghimire',
    email:'sailesh@gmail.com',
    password:'123456'
});
user.save();

