import express from "express";
import {registerUser,loginUser, profile, getAllUser} from "../controllers/userController.js";

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/me").put(isAuthenticatedUser, profile);
router.route("/allUsers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)
export default router;
