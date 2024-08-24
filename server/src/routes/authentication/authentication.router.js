import { Router } from 'express';
import { userRegister } from '../../controllers/authentication/register.controller.js';
import { userLogin } from '../../controllers/authentication/login.controller.js';

export const authenticationRouter = Router();

authenticationRouter.route('/register').post(userRegister)
authenticationRouter.route('/login').post(userLogin)

