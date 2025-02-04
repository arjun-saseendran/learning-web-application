import { Router } from "express";
import { upload } from "../../middlewares/multer.js";
import { userLogin, userSignup } from "../../controllers/userControllers.js";

// Config router
export const userRouter = Router();

// Register user
userRouter.post("/signup", upload.single("profilePicture"), userSignup);

// Login user
userRouter.post("/login", userLogin);
