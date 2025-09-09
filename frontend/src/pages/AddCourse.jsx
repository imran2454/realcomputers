import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseManager() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    fees: ""
  });

  const [courses, setCourses] = useState([]);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get("https://realcomputers.onrender.com/api/courses");
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit new course
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://realcomputers.onrender.com/api/courses", formData);
      alert("Course added successfully!");
      setFormData({ title: "", description: "", duration: "", fees: "" });
      fetchCourses(); // refresh course list
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Delete course
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://realcomputers.onrender.com/api/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>

      {/* Add Course Form */}
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded mb-6">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          name="fees"
          placeholder="Fees"
          value={formData.fees}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Course
        </button>
      </form>

      {/* Course List */}
      
    </div>
  );
}

export default CourseManager;
