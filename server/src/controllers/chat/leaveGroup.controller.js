import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";

export const leaveGroup = asyncHandler(async (req , res , next) => {
    const chatId = req.params.id 

    const chats = await chatModel.findById(chatId);

    if(!chats) return next(new ErrorHandler("Invalid chat id ",401))

    chats.members = chats.members.filter((member) => member != req.user.id)

    if(chats.creator == req.user.id) chats.creator = chats.members[0];

    await chats.save({validateBeforeSave : false})

    res.status(200).json({
        success : true,
        message : "User left the group successfully"
    })

  
    

})