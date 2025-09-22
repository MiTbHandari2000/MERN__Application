import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  { timestamps: true }
);

export const Goal = mongoose.model("Goal", goalSchema);
