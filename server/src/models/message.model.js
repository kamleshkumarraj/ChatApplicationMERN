import {Schema , Model , Types, model} from 'mongoose'

const messageSchema = new Schema({
    constent : {
        type : String,
        required : [true , "Content must be required" ]
    },
    attachment : [{
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
        required : [true , "Chat must be required" ]
    },

} , {timestamps : true})

export const mesageModel = model('Message' , messageSchema)