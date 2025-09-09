import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  course: { type: String, required: true },
  address: { type: String, required: true },
  payment: { type: Number, required: true },
  remainingPayment: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("addStudent", studentSchema);
