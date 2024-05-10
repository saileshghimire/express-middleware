const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5)
    });
    const response = schema.safeParse(obj);
    console.log(response);
    // output is { success: false, error: [Getter] } if error

    // const response = schema.parse(obj);
    // console.log(response);
    // while error occurs output is errors: [
    // {
    //     validation: 'email',
    //     code: 'invalid_string',
    //     message: 'Invalid email',
    //     path: [ 'email' ]
    //   }
    // ]
}

validateInput({
    email:"saieshexample.com",
    password:"121345"
});