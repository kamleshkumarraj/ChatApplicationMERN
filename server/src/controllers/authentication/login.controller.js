import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";
import { loginWithJWT } from "../../utils/loginAndStoreJWTCookie.js";

export const userLogin = asyncHandler(async (req , res , next) => {
    //extracting data from sending by client.
    const {email , password} = req.body;
    //check email or password is available or not.
    if(!email || !password) return next(new ErrorHandler("Please enter email and password",402))

    const user = await userModel.findOne({email}).select("+password")
    //if user not found then send error.
    if(!user) return next(new ErrorHandler("Invalid email or password!",402))
    //code for comparing the password and if not matched then send error.
    if(!(await user.comparePassword(password))) return next(new ErrorHandler("Invalid emial or password !",402))
    //code for if everything is ok then send the response and also save tocken in our cookie.
    loginWithJWT(res,user);
    
})