const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.status(200).json({
       message: "Everyday is a good day to learn" 
    });
});

console.log("The server is listened to 4000 ...");
module.exports = app;