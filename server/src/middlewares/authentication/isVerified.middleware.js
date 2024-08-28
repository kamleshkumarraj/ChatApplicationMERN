import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";

export const isEmailVerified = asyncHandler(async (req , res , next) => {
    const user = await userModel.findById(req.user.id)
    if(!user.isEmailVerified) return next(new ErrorHandler("Please verify yourself using email for access this resource.",401))
    
    user.isEmailVerified = false;
    await user.save({validateBeforeSave : false})
    next();

})