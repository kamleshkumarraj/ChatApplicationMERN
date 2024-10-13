import {Schema , Model , Types, model} from 'mongoose'

const messageSchema = new Schema({
    content : {
        type : String,
        required : [true , "Content must be required" ]
    },
    attachments : [{
        public_id : {
            type : String,
            required : true
        },
        url : {
            type : String,
            required : true
        }
    }],
    sender : {
        type : Types.ObjectId,
        ref : "usersModel",
        required : [true , "Sender must be required" ]
    },
    chat : {
        type : Types.ObjectId,
        ref : 'chatModel',
        required : [true , "Chat must be required"]
    },

} , {timestamps : true})

export const messageModel = model('Message' , messageSchema)