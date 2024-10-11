import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";

export const getAllUser = asyncHandler(async (req , res , next) => {
    const users = await userModel.find();

    if(!users) return next(new ErrorHandler("Users not found",400))

    res.status(200).json({
        success : true,
        message : "All users get successfully",
        users
    })
})