import express from "express";
import { Router } from "express";
import {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} from "../controllers/goal.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);
export default router;
