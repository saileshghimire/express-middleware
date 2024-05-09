const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("India").or(zod.literal("Nepal")),
    kidneys: zod.array(zod.number())
});

app.use(express.json());
app.post ("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success){
        res.status(401).json({
            msg:"input is not valid"
        });
    }
    else{
        res.send({
            response
        });

    }
});

app.listen(3000);