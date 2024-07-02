const mongoose = require("mongoose")

const bcrypt_Schema = mongoose.Schema(
    {
        // key
        bcrypt_name: {
            type:String,
            trim:true
        },
        password:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const bcrypt = mongoose.model("Bcrypt",bcrypt_Schema)

module.exports = bcrypt