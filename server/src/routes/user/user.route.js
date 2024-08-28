import { Router } from 'express';
import { updateProfile } from '../../controllers/user/updateProfile.controller.js';
import { isLoggedIn } from '../../middlewares/authentication/isLoggedIn.middleware.js';

export const userRouter  = Router();

userRouter.route('/update-profile').post(isLoggedIn  ,updateProfile)