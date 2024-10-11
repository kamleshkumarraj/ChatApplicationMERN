import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import jwt from 'jsonwebtoken'
import { userModel } from "../../models/user.model.js";
import { loginWithJWT } from "../../utils/loginAndStoreJWTCookie.js";

export const directLogin = asyncHandler(async (req , res , next) => {
    const tocken = req.params.tocken;
    if(!tocken) return next(new ErrorHandler("please provide tocken for login !",401))

    try{
        const decodedData = await jwt.verify(tocken , process.env.JWTSECRET)
        const user = await userModel.findById(decodedData.id)
        res.cookie('tocken',tocken,{httpOnly:true , expires: new Date(Date.now() + 5*60*60*1000)}).json({
            success : true,
            message : 'User logged in successfully',
            user,
            tocken
        })
    }
    catch(err){
        return next(new ErrorHandler("Invalid tocken !",401))
    }
     
    
    
})