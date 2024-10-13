import {Router} from 'express'
import { isLoggedIn } from '../../middlewares/authentication/isLoggedIn.middleware.js';
import { createNewGroupChat } from '../../controllers/chat/createNewChat.controller.js';
import { getMyChats } from '../../controllers/chat/getMyChat.controller.js';
import { addGroupMembers } from '../../controllers/chat/addMembers.controller.js';
import { getMyCreatedGroups } from '../../controllers/chat/getMyGroups.controller.js';
import { removeMembers } from '../../controllers/chat/removeMember.controller.js';
import { leaveGroup } from '../../controllers/chat/leaveGroup.controller.js';
import { renameGroupName } from '../../controllers/chat/renameChatname.controller.js';
import { getChatDetails } from '../../controllers/chat/getChatDetails.controller.js';
import { sendAttachments } from '../../controllers/chat/sendAttachment.controller.js';

export const chatHandleRoute = Router();

chatHandleRoute.route('/create-group-chat').post(isLoggedIn , createNewGroupChat)
chatHandleRoute.route('/get-my-chats').get(isLoggedIn , getMyChats)
chatHandleRoute.route('/get-my-created-group').get(isLoggedIn , getMyCreatedGroups)
chatHandleRoute.route('/add-members').put(isLoggedIn , addGroupMembers)
chatHandleRoute.route('/remove-members').delete(isLoggedIn , removeMembers)
chatHandleRoute.route('/leave-groups/:id').delete(isLoggedIn , leaveGroup)
chatHandleRoute.route('/rename-group/:id').post(isLoggedIn , renameGroupName)
chatHandleRoute.route('/get-chatdetails/:id').get(isLoggedIn , getChatDetails)
chatHandleRoute.route('/send-attachments').post(isLoggedIn , sendAttachments)