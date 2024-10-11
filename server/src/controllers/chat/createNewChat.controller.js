import { event } from "../../constant.js";
import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import { chatModel } from "../../models/chat.model.js";
import { emitEvent } from "../../utils/emitEvent.js";

export const createNewGroupChat = asyncHandler(async (req, res, next) => {
    const {chatname , members} = req.body;
    if(!members || !chatname) return next(new ErrorHandler("Please send member and group name ."))
    if(members.length < 2) return next(new ErrorHandler("Altest 2 members is required !",400))

    const allMembers = [...members , req.user.id]

    await chatModel.create({chatname , members :  allMembers , groupChat : true , creator : req.user.id})

    emitEvent(req , event.ALERT , members , `Welcome to all users in ${chatname} group.`)
    emitEvent(req , event.REFETCH , members )

    return res.status(201).json({
        success : true,
        message : "Group chat created successfully"
    })
}) 