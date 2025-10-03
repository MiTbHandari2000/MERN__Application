import express, { Router } from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/user.controller.js";
import protect from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
