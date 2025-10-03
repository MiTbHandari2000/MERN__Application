import asyncHandler from "express-async-handler";
import { Goal } from "../models/goal.model.js";
import { User } from "../models/user.model.js";

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error(`user not found`);
  }

  //make sure logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error(`User not Authorized`);
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error(`user not found`);
  }

  //make sure logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error(`User not Authorized`);
  }

  await Goal.deleteOne(goal);
  res
    .status(200)
    .json({ msg: `goal with the id ${req.params.id} is deleted successfully` });
});

export { getGoals, setGoals, updateGoal, deleteGoal };
