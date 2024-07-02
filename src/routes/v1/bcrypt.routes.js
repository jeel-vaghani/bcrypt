const express = require("express")

const { bcrypt_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/hash-generate",
    //cb => controller
    bcrypt_controller.create_bcrypt
    
)

router.post(
    "/hash-compare/:password",
    //cb => controller
    bcrypt_controller.check_hash
    
)

module.exports = router