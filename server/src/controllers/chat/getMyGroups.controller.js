import { asyncHandler } from "../../error/asynErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";

export const getMyCreatedGroups = asyncHandler(async (req , res , next) => {
    const groups = await chatModel.find({groupChat : true , members : req.user.id , creator : req.user.id }).populate('members' , 'firstname avatar')

    const transformedChat = groups.map(({chatname , members , id , groupChat , creator}) => {
        return {
            id,
            creator,
            chatname,
            groupChat,
            members : members.reduce((prev , curr) => {
                if(curr.id !== req.user.id) prev.push(curr.id)
                return prev
            },[]),
            avatar : members.map((member) => member.avatar.url)
        }
    })

    res.status(200).json({
        success: true,
        message : "You get all groups successfully that is created by you",
        data : transformedChat
    })
})