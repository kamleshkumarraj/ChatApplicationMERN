import { Router } from "express";
import { isLoggedIn } from "../../middlewares/authentication/isLoggedIn.middleware.js";
import { isAdmin } from "../../middlewares/authentication/isAdmin.middleware.js";
import { getAllUser } from "../../controllers/admin/getAllUser.controller.js";

export const userHandleByAdminRoute = Router();

userHandleByAdminRoute.get('/all-users',isLoggedIn , getAllUser)