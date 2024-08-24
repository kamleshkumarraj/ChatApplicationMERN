import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";

export const isAdmin = asyncHandler((async (req , res , next) => {
    const roles = req.user?.roles;
    if(roles == 'admin') next();
    else return next(new ErrorHandler("Only admin can access this resource.",403));
}))