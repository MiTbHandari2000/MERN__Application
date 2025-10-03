import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Goal = mongoose.model("Goal", goalSchema);
