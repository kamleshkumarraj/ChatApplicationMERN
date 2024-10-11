import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    status : {
        type: String,
        required: true,
        default: "pending",
        enum : ['pending','accepted','rejected']
    },
    sender : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usersModel",
        required: true
    },
    receiver : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usersModel",
        required: true
    }
    
},{timestamps: true})

export const requestModel = mongoose.model('requestModels',requestSchema);