const bcrypt = require("bcrypt")

const create_bcrypt = async(req,res) => {
    try {
        const password = req.body.password
        const hash_password = await bcrypt.hash(password,10)
        if(!hash_password){
            throw new Error("somthing went wrong...")
        }
        res.status(200).json({
            success:true,
            message:"it's true....",
            data:hash_password
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
           
        }) 
    }
} 

const check_hash = async(req,res) => {
    try {
        const try_password = req.params.password
        const hash_to_check_with =  "$2b$10$L/TGvzgT6XASum99lPSHMem70Muo7hWSSABl/cLnlutSbMR5sjPq."
        const result = await bcrypt.compare(try_password,hash_to_check_with)
        console.log(result);
        if(!result){
            throw new Error("somthing went wrong.....")
        }
      res.status(200).json({
            success:true,
            message:"it's true....",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
           
        }) 
    }
} 

module.exports = {
    create_bcrypt,
    check_hash
}