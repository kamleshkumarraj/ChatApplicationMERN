import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { userModel } from "../../models/user.model.js";
import cloudinary from 'cloudinary'
import fs from 'fs';

export const userRegister = asyncHandler(async (req , res , next) => {
    
    //code for extracting all data that is passed from client.
    const {firstname ,middlename, lastname,username,email,password} = req.body;
    const isUser = await userModel.findOne({email})
    //code for checking the user is already registered or not.
    if(isUser) return next(new ErrorHandler('User already registered',401))
    //code for creating a new user.
    //now we write code for uploading our avatar on the cloudinary
    const avatar = {public_id : '' , url : ''}
    try{
        const response = await cloudinary.uploader.upload(req.file.path)
        avatar.public_id = response.public_id
        avatar.url = response.secure_url
        fs.unlink(req.file.path , (err) => {
            if(err) return next(new ErrorHandler("file uploaded failed.",402))
        })
        
    }
    catch(err){
        fs.unlink(req.file.path , (err) => {
            if(err) return next(new ErrorHandler("file uploaded failed.",402))
        })
        return next(new ErrorHandler("file upload failed ",402))
    }
    const user = await userModel.create({avatar , firstname,middlename,lastname,username,email,password})
    //code for sending error if usercreated failed.
    if(!user)
       return next(new ErrorHandler("User creation failed",402))
    
    //code for send response if user successfully registered.
    res.status(200).json({
        success : true,
        message : "User registered successfully",
    })
})