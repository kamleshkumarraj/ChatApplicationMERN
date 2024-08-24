import { asyncHandler } from "../../error/asynErrorHandler.js";

export const userLogout = asyncHandler(async (req , res , next) => {
    const option = {
        expires : new Date(Date.now()),
        httpOnly : true,
    }
    res.cookie('tocken',undefined ,option)
    .json({
        success : true,
        message : "User logged out successfully "
    })
})