import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  courseApplied: String,
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
