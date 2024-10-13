import { asyncHandler } from "../../error/asynErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";

export const getMyChats = asyncHandler(async (req , res , next) => {
    const chat = await chatModel.find({members : req.user.id}).populate('members' , 'firstname lastname email avatar');

    const transformedChats = chat.map(({id , groupChat , chatname , members}) => {
        const otherMember = members.find((member) => member.id !== req.user.id)

       return { id , 
        groupChat,
        chatname : groupChat ? chatname : otherMember.firstname,
        members : members.reduce((prev , curr) => {
            if(curr.id !== req.user.id) prev.push(curr.id)
            return prev
        },[]),
        avatar : groupChat ? members.slice(0,3).map((member) => member.avatar.url) : [otherMember.avatar.url]
       }
    })

    return res.status(200).json({
        success: true,
        message : "You get your all chats successfully !",
        data : transformedChats
    })


})