const mongoose = require("mongoose");

const connectdb = () => {
    mongoose
        .connect("mongodb+srv://jeelvaghani318:fiaKUeQcWHd54pCk@netflix-jeel.pd6nbrb.mongodb.net/Bcrypt")
        .then((data) => {
            if (data) {
                console.log("connected success....");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectdb;
