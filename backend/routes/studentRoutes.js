import express from "express";
import addStudent from "../models/addStudent.js";

const router = express.Router();

// ✅ Add Student (POST)
router.post("/", async (req, res) => {
  try {
    const { name, mobile, course, address, payment, remainingPayment } = req.body;

    // Validation
    if (!name || !mobile || !course || !address || payment == null || remainingPayment == null) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const student = new addStudent({
      name,
      mobile,
      course,
      address,
      payment,
      remainingPayment,
    });

    await student.save();
    res.status(201).json({ message: "Student added successfully", student });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ error: "Server error while adding student" });
  }
});
// ✅ Get All Students (Student List)
router.get("/", async (req, res) => {
  try {
    const students = await addStudent.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update Student
router.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id,req.body);
    
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete Student
router.delete("/:id", async (req, res) => {
  try {
    await addStudent.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
