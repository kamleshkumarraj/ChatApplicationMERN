import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";
import { userModel } from "../../models/user.model.js";
import { emitEvent } from "../../utils/emitEvent.js";

export const addGroupMembers = asyncHandler(async (req , res , next) => {
    const {members , chatId} = req.body;

    if(!members || !chatId || members.length < 1) return next(new ErrorHandler("Please provide chatId and members for adding in group !",400))
        
    const chats = await chatModel.findById(chatId)

    if(!chats) return next(new ErrorHandler("No chat found with this id !",404));

    if(!(chats.groupChat)) return next(new ErrorHandler("This chat is not group chat !",404))

    if(chats.creator != req.user.id) return next(new ErrorHandler("You are not allowed to add members in this group !",403));

    if(chats.members.length > 100) return next(new ErrorHandler("Group can have maximum 100 members !",400))

    const uniqueMember = members.filter((member) => {
        return !chats.members.includes(member)
    })

    if(uniqueMember.length < 1) return next(new ErrorHandler("These all members are alredy added in this group !",400))

    const allMembersPromise = uniqueMember.map((member) => userModel.findById(member , 'firstname'))

    const allNewMembers = await Promise.all(allMembersPromise)

    chats.members.push(...allNewMembers.map((member) => member.id))

    await chats.save();

    const allMembersName = allNewMembers.map((member) => member.firstname).join(", ")

    res.status(200).json({
        success : true,
        message  : "Members added successfully in group chat."
    })


   

})