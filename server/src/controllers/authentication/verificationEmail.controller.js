import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";
import crypto from 'crypto'
export const verificationEmail = asyncHandler(async (req , res , next) => {
    const tocken = req.params.tocken
    const verifyEmailTocken = crypto.createHash('sha256').update(tocken).digest('hex')
    const user = await userModel.findOne({verifyEmailTocken , verifyEmailExpiry : {$gt : Date.now()}})

    if(!user) return next(new ErrorHandler("verification link is expired or invalid !",402))
    
    user.verifyEmailExpiry = undefined
    user.verifyEmailTocken = undefined
    user.isEmailVerified = true;
    await user.save({validateBeforeSave  :false})
    
    res.status(200).json({
        success : true,
        message : "User verified successfully"
    })
})