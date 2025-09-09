import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// Add Course
router.post("/", async (req, res) => {
  try {
    const { title, description, duration, fees } = req.body;
    const course = new Course({ title, description, duration, fees });
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Courses (for public side)
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Course
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
