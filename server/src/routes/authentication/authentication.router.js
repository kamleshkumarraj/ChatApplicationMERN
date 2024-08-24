import { Router } from 'express';
import { userRegister } from '../../controllers/authentication/register.controller.js';
import { userLogin } from '../../controllers/authentication/login.controller.js';
import { forgotPassword } from '../../controllers/authentication/forgotPassword.controller.js';
import { isLoggedIn } from '../../middlewares/authentication/isLoggedIn.middleware.js';
import { userLogout } from '../../controllers/authentication/logout.controller.js';
import { resetPassword } from '../../controllers/authentication/resetPassword.controller.js';
import { updatePassword } from '../../controllers/authentication/updatePassword.js';

export const authenticationRouter = Router();

authenticationRouter.route('/register').post(userRegister)
authenticationRouter.route('/login').post(userLogin)
authenticationRouter.route('/logout').get(userLogout)
authenticationRouter.route('/reset-password/:tocken').post(resetPassword)
authenticationRouter.route('/update-password').post(isLoggedIn,updatePassword)
authenticationRouter.route('/forgot-password').post(isLoggedIn,forgotPassword)

