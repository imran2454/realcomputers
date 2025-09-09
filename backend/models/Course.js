import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: String,
  fees: Number
});

export default mongoose.model("Course", courseSchema);
