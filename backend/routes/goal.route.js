import express from "express";
import { Router } from "express";
import {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} from "../controllers/goal.controller.js";

const router = Router();

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(deleteGoal).put(updateGoal);
export default router;
