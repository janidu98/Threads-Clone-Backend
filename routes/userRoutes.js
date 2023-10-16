import express from 'express';
import {signupUser} from '../controller/userController.js';
import {loginUser} from '../controller/userController.js';
import {logoutUser} from '../controller/userController.js';
import {followUnFollowUser} from '../controller/userController.js';
import protectRoute from '../middleware/protectRoute.js';
import {updateUser} from '../controller/userController.js';
import { getUserProfile } from '../controller/userController.js';

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser);

  
export default router;