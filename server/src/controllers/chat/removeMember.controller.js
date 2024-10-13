import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";
import { userModel } from "../../models/user.model.js";

export const removeMembers = asyncHandler(async (req , res , next) => {
    const { chatId, memberId } = req.body;

    if(!chatId || !memberId ) return next(new ErrorHandler("Please provide chatId or memberId !",400))

    const [chats , userWillBeRemoved] = await Promise.all([chatModel.findById(chatId) , userModel.findById(memberId , 'firstname')])

    if(!chats) return next(new ErrorHandler("Invalid chatId not found chat !",404));

    chats.members = chats.members.filter((member) => member != userWillBeRemoved.id) 

    await chats.save({validateBeforeSave : false})

    res.status(200).json({
        success : true,
        message : "Members removed successfully !",
    })

})