import { Router } from 'express';
import { userRegister } from '../../controllers/authentication/register.controller.js';
import { userLogin } from '../../controllers/authentication/login.controller.js';
import { forgotPassword } from '../../controllers/authentication/forgotPassword.controller.js';
import { isLoggedIn } from '../../middlewares/authentication/isLoggedIn.middleware.js';
import { userLogout } from '../../controllers/authentication/logout.controller.js';
import { resetPassword } from '../../controllers/authentication/resetPassword.controller.js';
import { updatePassword } from '../../controllers/authentication/updatePassword.js';
import { verifyEmail } from '../../controllers/authentication/verifyEmail.js';
import { verificationEmail } from '../../controllers/authentication/verificationEmail.controller.js';
import { isEmailVerified } from '../../middlewares/authentication/isVerified.middleware.js';
import { avatarUpload } from '../../middlewares/fileUpload/avatarupload.js';
import { directLogin } from '../../controllers/authentication/directLogin.controller.js';

export const authenticationRouter = Router();

authenticationRouter.route('/register').post(avatarUpload , userRegister)
authenticationRouter.route('/login').post(userLogin)
authenticationRouter.route('/logout').get(isLoggedIn,userLogout)
authenticationRouter.route('/reset-password/:tocken').post(resetPassword)
authenticationRouter.route('/update-password').post(isLoggedIn,updatePassword)
authenticationRouter.route('/forgot-password').post(forgotPassword)
authenticationRouter.route('/verify-email').get(isLoggedIn,verifyEmail)
authenticationRouter.route('/verify-email/verification/:tocken').get(verificationEmail)
authenticationRouter.route('/direct-login/:tocken').get(isLoggedIn , directLogin)
