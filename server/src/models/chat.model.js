import mongoose, { Types } from 'mongoose';

const chatSchema = new mongoose.Schema({
    chatname : {
        type : String,
        required : [true , "Chat is required !"]
    },
    groupChat : {
        type : Boolean,
        default : false
    },
    creator : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    members : [{
        type : mongoose.Schema.ObjectId,
        ref : "User"
    }]
},{timestamps : true})

export const chatModel = mongoose.model('Chat',chatSchema)