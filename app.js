const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.put('/signup', (req, res, next) => {
    const signup = [
        {
        id: 1,
        email: 'signup@signup.com',
        First_name: "Sign",
        last_name: "up",
        password: "password",
        phone_number: "+250 784403223",
        address: "Kigali",
        is_admin: true,
       message: "Everyday is a good day to learn" 
    },
];
res.status(200).json(signup);
});

console.log("The server is listened to 4000 ...");
module.exports = app;