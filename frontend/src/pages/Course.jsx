import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state

  const fetchCourses = async () => {
    try {
      const res = await axios.get("https://realcomputers.onrender.com/api/courses");
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false); // 👈 chahe error ho ya success, loading false
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Course Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="p-4 border rounded shadow">
            <h1 className="text-xl font-bold">{course.title}</h1>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <h3>Fees: ₹{course.fees}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
