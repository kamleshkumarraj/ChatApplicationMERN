import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { messageModel } from "../../models/message.model.js";

export const sendAttachments = asyncHandler(async (req , res , next) => {
    const {id} = req.body;
    if(!id ) return next(new ErrorHandler("Please provide valid chatId !",400))

    const files = req.files || [];
    if(files.length < 1) return next(new ErrorHandler("Please provide at least one attachment !",400))

    if(files.length > 5) return next(new ErrorHandler("Please provide attachments less than 5 !",400))

    //? Implement function for sending our attachments on cloudinary

    const attachmentsUrl = [{public_id : 'attachments-1' , url : "https://res.cloudinary.com/demo/image/upload/v1631622423/attachments-1.jpg"},{public_id : 'attachments-1' , url : "https://res.cloudinary.com/demo/image/upload/v1631622423/attachments-1.jpg"},{public_id : 'attachments-1' , url : "https://res.cloudinary.com/demo/image/upload/v1631622423/attachments-1.jpg"}]

    const mongoDBMessage = {content : "" , attachments : attachmentsUrl , sender : req.user.id , chat : id}

    const message = await messageModel.create(mongoDBMessage)

    res.status(201).json({
        success : true,
        message : "Attachments sent successfully !",
        data : message
    })
    
})