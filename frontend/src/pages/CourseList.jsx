import React, { useEffect, useState } from "react";
import axios from "axios";

function CourseList({ refresh }) {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [refresh]); // refresh trigger hone par list reload

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Course List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="p-4 border rounded shadow bg-white">
            <h3 className="font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Fees: ₹{course.fees}</p>
            <button
              onClick={() => deleteCourse(course._id)}
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
