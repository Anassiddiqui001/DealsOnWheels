import express from "express";
import {registerUser,loginUser, profile, getAllUser} from "../controllers/userController.js";

import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/me").get(isAuthenticatedUser, profile);
router.route("/allUsers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)

export default router;
