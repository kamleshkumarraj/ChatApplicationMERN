import { asyncHandler } from "../../error/asynErrorHandler.js";
import crypto from 'crypto';
import { userModel } from "../../models/user.model.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { loginWithJWT } from "../../utils/loginAndStoreJWTCookie.js";

export const resetPassword = asyncHandler(async (req , res , next) => {
    const {password , confirmPassword} = req.body;
    if(!password || !confirmPassword) return next(new ErrorHandler("Please enter password and confirm password ",403))
    const resetPasswordTocken = crypto.createHash('sha256').update(req.params.tocken).digest('hex');

    if(password != confirmPassword) return next(new ErrorHandler("password and confirm passwod doesn't matched !",401))

    const user = await userModel.findOne({resetPasswordTocken , resetPasswordExpiry : {$gt : Date.now()}})

    if(!user) return next(new ErrorHandler("Forgot passwork link is expire or invalid !",400))
    
    user.password = password;
    await user.save({validateBeforeSave : false})
    loginWithJWT(res,user)
    
    user.resetPasswordExpiry = undefined;
    user.resetPasswordTocken = undefined;
    await user.save({validateBeforeSave : false})
})