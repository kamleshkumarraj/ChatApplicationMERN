import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";

export const getChatDetails = asyncHandler(async (req , res , next) => {
    const chatId = req.params.id 
    const chats = await chatModel.findById(chatId);
    if(!chats) return next(new ErrorHandler("Invalid chat id !",401))

    if(req.query.populate == "true"){
        console.log("populate")
        const chats = await chatModel.findById(chatId).populate('members' , 'firstname lastname avatar').lean();
        if(!chats) return next(new ErrorHandler("Invalid chat id !",401))

        chats.members = chats.members.map(({_id , firstname , lastname , avatar}) => {
            return {_id , name : firstname + " " +lastname , avatar : avatar.url}
        })
        res.status(200).json({
            success : true,
            message : "You get chat successfully .",
            data : chats
        })
    }else{
        const chats = await chatModel.findById(chatId).lean();
        if(!chats) return next(new ErrorHandler("Invalid chat id !",401))
        
        return res.status(200).json({
            success : true,
            message : "You get chat successfully .",
            data : chats
        })
    }
})