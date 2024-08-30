import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required  :[true , "please enter firstname"],
        minlength : [3 , "firstname must be at least 3 characters"]
    },
    middlename : {
        type : String,
    },
    lastname : {
        type : String,
        required :   [true , "please enter lastname"],
        minlength : [3 , "lastname must be at least 3 characters"]
    },
    username : {
        type  :String,
        required : [true , "please enter username"],
        unique : [true , "username must be unique"],
        minlength : [3 , "username must be at least 3 characters"]
    },
    email : {
        type: String,
        required: true,
        unique: [true,"email must be unique"],
        match: /^\S+@\S+\.\S+$/,
        lowercase: true, 
        
    },
    password : {
        type : String,
        minlength : [8 , "password must be at least 8 characters"],
        required : [true , "password must be required"],
        select : false
    },
    avatar : {
        public_id : {
            type : String,
            required : ['true' , "please enter public_id"],
            
        },
        url : {
            type : String,
            required : ['true' , "please enter url"],
           
        }
    },
    roles : {
        type : String,
        default : 'user'
    },
    resetPasswordTocken : String,
    resetPasswordExpiry : Date,
    verifyEmailTocken : String,
    verifyEmailExpiry : Date,
    
    isEmailVerified : {
        type : Boolean,
        default : false
    }
},{timestamps : true})

//middleware for saving the password in hash form before saving the data in database.
userSchema.pre('save' , async function(next){
    if(!this.isModified('password')){
       next()
    }
    this.password = await bcrypt.hash(this.password , 10)
})

//method for comparing password for login the user.
userSchema.methods.comparePassword = async function(password){
    const res = await bcrypt.compare(password , this.password)
    return res;
}

//code for generating jwt tocken for login.
userSchema.methods.generateJWTTocken = async function(){
    const tocken = await jwt.sign({id : this.id} , process.env.JWTSECRET , {
        expiresIn : Date.now() + process.env.TOCKEN_EXPIRY*60*60*1000
    })
    return tocken;
}

//now we write method for generating tocken for forgot password using crypto.
userSchema.methods.generateresetPasswordTocken = async function(){
    const resetTocken = crypto.randomBytes(20).toString('hex')
    const hashResetTocken = crypto.createHash('sha256').update(resetTocken).digest('hex');

    this.resetPasswordTocken = hashResetTocken;
    this.resetPasswordExpiry = Date.now() + 15*60*1000;

    return resetTocken
}
userSchema.methods.generateEmailVerifyTocken = async function(){
    const resetTocken = crypto.randomBytes(20).toString('hex')
    const hashResetTocken = crypto.createHash('sha256').update(resetTocken).digest('hex');

    this.verifyEmailTocken = hashResetTocken;
    this.verifyEmailExpiry = Date.now() + 5*60*1000;

    return resetTocken
}

export const userModel = mongoose.model('User' , userSchema);