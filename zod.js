const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5)
    });
    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"sailesh@example.com",
    password:"121345"
});