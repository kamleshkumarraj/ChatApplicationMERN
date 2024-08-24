import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";


export const userRegister = asyncHandler(async (req , res , next) => {
    //code for extracting all data that is passed from client.
    const {firstname ,middlename, lastname,username,email,password} = req.body;
    const isUser = await userModel.findOne({email})
    //code for checking the user is already registered or not.
    if(isUser) return next(new ErrorHandler('User already registered',401))
    //code for creating a new user.
    const user = await userModel.create({firstname,middlename,lastname,username,email,password})
    //code for sending error if usercreated failed.
    if(!user) return next(new ErrorHandler("User registration failed !",400))
    //code for send response if user successfully registered.
    res.status(200).json({
        success : true,
        message : "User registered successfully",
    })
})