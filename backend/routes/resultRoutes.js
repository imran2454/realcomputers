import express from "express";
import Result from "../models/Result.js";

const router = express.Router();

// 🔹 Student search result
router.post("/search", async (req, res) => {
  try {
    const { roll, dob } = req.body;
    const student = await Result.findOne({ roll, dob });

    if (!student) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// add reslut
router.post("/add", async (req, res) => {
  try {
    const { roll, name, fname, dob, course, duration, result, issueDate } =
      req.body;

    // check duplicate roll
    const exist = await Result.findOne({ roll });
    if (exist) {
      return res.status(400).json({ message: "Result already exists" });
    }

    const newResult = new Result({
      roll,
      name,
      fname,
      dob,
      course,
      duration,
      result,
      issueDate,
    });

    await newResult.save();
    res.status(201).json({ message: "Result added successfully", newResult });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// * ✅ Get All Results (Admin List)
router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// update result
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Result.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json({ message: "Result updated successfully", updated });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// delet reslut
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Result.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json({ message: "Result deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
