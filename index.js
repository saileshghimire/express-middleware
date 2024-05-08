const express = require("express");
const app = express();

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

app.get("/health-checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != 'sailesh' || password != 'pass'){
        res.status(400).json({msg:"Something up with your kidney.."});
        return;
    }
    if (kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg:"Something up with your kidney...."});
        return;
    }
    res.json({
        msg: "Your kidney is fine"
    });
});

app.listen(3000); 