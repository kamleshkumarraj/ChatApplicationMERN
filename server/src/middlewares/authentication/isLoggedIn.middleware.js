import { asyncHandler } from "../../error/asynErrorHandler.js";
import jwt from 'jsonwebtoken'
import { userModel } from "../../models/user.model.js";
import ErrorHandler from "../../error/serverErrorHandler.js";

export const isLoggedIn = asyncHandler(async (req , res  ,next) => {
    console.log(req.cookies)
    let {tocken} = req.cookies;
    tocken ? tocken : req.params.tocken;

    if(!tocken) return next(new ErrorHandler("Please login to access this resource ",402))

    try{
        const decodedData = jwt.verify(tocken , process.env.JWTSECRET)
        const user = await userModel.findById(decodedData.id)
        req.user = user;
        next();
    }
    catch(err){
        return next(new ErrorHandler(err.stack , 403))
    }

})