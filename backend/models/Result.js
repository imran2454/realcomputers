import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  roll: { type: String, required: true },
  name: { type: String, required: true },
  fname: { type: String, required: true },
  dob: { type: String, required: true },
  course: { type: String, required: true },
  duration: { type: String, required: true },
  result: { type: String, required: true },
  issueDate: { type: String, required: true },
});

export default mongoose.model("Result", resultSchema);
