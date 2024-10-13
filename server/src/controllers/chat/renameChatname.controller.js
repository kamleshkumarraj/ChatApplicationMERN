import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";

export const renameChatName = asyncHandler(async (req , res , next) => {
    const chatId = req.params.id;
    const chats  = await chatModel.findById(chatId);

    if(!chats) return next(new ErrorHandler("Invalid chat id: ",402));

    if(chats.creator != req.user.id) return next(new ErrorHandler("Only creator rename the chat !",402))

    const { name } = req.body;
    if(!name) return next(new ErrorHandler("Please provide a valid name !",400));

    chats.chatname = name;
    await chats.save({validateBeforeSave : false})

    res.status(200).json({
        success : true,
        message : "Chat rename successfully",
        data : chats.chatname
    })
})