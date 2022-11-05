import express from "express";
import {
  deleteUser,
  getAllTheUsers,
  updateUserProfile,
  userLogin,
  userProfile,
  userRegister,
} from "../controller/userController.js";
// middleware for auth
import { authUser, authAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/register").post(userRegister);
router.route("/").get(authUser, authAdmin, getAllTheUsers);
router.route("/:id").delete(authUser, authAdmin, deleteUser);
router.post("/login", userLogin);
router
  .route("/profile")
  .get(authUser, userProfile)
  .put(authUser, updateUserProfile);

export default router;
