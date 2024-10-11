import { asyncHandler } from "../../error/asynErrorHandler.js";
import ErrorHandler from "../../error/serverErrorHandler.js";
import {initClient} from 'messagebird';


//code for initialize the message bird.
const messagebird = initClient(process.env.MESSAGEBIRD_KEY)

// export const sendOTPInNumber = asyncHandler(async (req , res , next) =>{
//     const {mobileNumber} = req.body
//     if(!mobileNumber) return next(new ErrorHandler("Please enter mobile number !",402))
//     const validNumber = '+91'+mobileNumber;
//     const params = {
//         originator: 'YourName'
//       };
      
//       messagebird.verify.create(validNumber, params, function (err, response) {
//         if (err) {
//           return console.log(err);
//         }
//         console.log(response);
//       });
// })