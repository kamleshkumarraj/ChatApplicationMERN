import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";
import { sendMail } from "../../utils/sendMail.js";

export const forgotPassword = asyncHandler(async (req , res , next) => {
    const {email} = req.body;
    if(!email) return next(new ErrorHandler("Please enter email" , 401))
    
    const user = await userModel.findOne({email})

    if(!user) return next(new ErrorHandler("please enter valid email user not found!",402))

    const resetTocken = await user.generateresetPasswordTocken();
    await user.save({validateBeforeSave : false})

    const messageUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/reset-password/${resetTocken}`
    const message = `you reset your password on click this link below :  \n\n ${messageUrl} \n\n If you don't want to reset your password then ignore them.`

    try{
        await sendMail({email : user.email , message , subject : "Reset password for chat application "})

        res.status(200).json({
            success : true,
            message : "Forgot password link successfully send on your email."
        })
    }
    catch(err){
        user.resetPasswordExpiry = undefined;
        user.resetPasswordTocken=undefined;
        user.save({validateBeforeSave : true})

        res.status(403).json({
            success : false,
            message : "Message sent failed on email !"
        })
    }
})