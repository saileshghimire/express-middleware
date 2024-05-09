const express = require("express");
const app = express();

//  // not a best way to write but work

// app.get("/health-checkup", function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username === 'sailesh' && password === 'pass'){
//         if (kidneyId == 1 || kidneyId == 2){
//             res.json({
//                 msg: "Your kidney is fine"
//             });

//         }
//     }
//     res.status(400).json({msg:"Something up with your kidney"});
// });


// // best way to write but validation code is repeated in every crud operation

// app.get("/health-checkup", function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username != 'sailesh' || password != 'pass'){
//         res.status(400).json({msg:"Something up with your kidney.."});
//         return;
//     }
//     if (kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({msg:"Something up with your kidney...."});
//         return;
//     }
//     res.json({
//         msg: "Your kidney is fine"
//     });
// });

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





app.listen(3000); 