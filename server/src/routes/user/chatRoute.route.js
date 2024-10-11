import {Router} from 'express'
import { isLoggedIn } from '../../middlewares/authentication/isLoggedIn.middleware.js';
import { createNewGroupChat } from '../../controllers/chat/createNewChat.controller.js';

export const chatHandleRoute = Router();

chatHandleRoute.route('/create-group-chat').post(isLoggedIn , createNewGroupChat)