const express = require("express");
const app = express();

// // creating middleware function for validation so code is not repeated

function userMiddleware(req,res,next){
    const username = req.header.username;
    const password = req.header.password;
    if (username != "sailesh" || password != "pass"){
        res.status(403).json({
            msg:"invalid input.."
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req,res, next){
    const kidneyId = req.query.kidneyId;
    if (kidneyId !=1 && kidneyId !=2){
        res.status(403).json({
            msg:"invalid input...."
        });  
    }
    else{
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res){
    // do something
});

app.use(express.json());
app.post ("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLenght = kidneys.length;

    res.send("you have "+ kidneyLenght + " kidneys");
});


// // global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"somethings is up with our server."
    });
});


app.listen(3000); 