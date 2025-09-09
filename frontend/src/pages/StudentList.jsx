import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StudentManager() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: "",
    address: "",
    payment: "",
    remainingPayment: ""
  });

  const [students, setStudents] = useState([]);

  // ✅ Fetch Students on page load
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("https://realcomputers.onrender.com/api/students");
      setStudents(res.data);
    } catch (error) {
      console.error("❌ Error fetching students:", error);
    }
  };

  // ✅ Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://realcomputers.onrender.com/api/students", formData);
      alert("✅ Student Added Successfully!");
      setFormData({
        name: "",
        mobile: "",
        course: "",
        address: "",
        payment: "",
        remainingPayment: ""
      });
      fetchStudents(); // Refresh list
    } catch (error) {
      console.error("❌ Error adding student:", error);
      alert("Error adding student");
    }
  };

  // ✅ Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://realcomputers.onrender.com/api/students/${id}`);
      alert("🗑️ Student Deleted");
      fetchStudents();
    } catch (error) {
      console.error("❌ Error deleting student:", error);
    }
  };

  return (
    <div className="p-4">
      {/* Add Student Form */}
      {/* <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="border p-2 w-full" />
        <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required className="border p-2 w-full" />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required className="border p-2 w-full" />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="border p-2 w-full" />
        <input type="number" name="payment" placeholder="Payment" value={formData.payment} onChange={handleChange} required className="border p-2 w-full" />
        <input type="number" name="remainingPayment" placeholder="Remaining Payment" value={formData.remainingPayment} onChange={handleChange} required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Student</button>
      </form> */}

      {/* Student List */}
      <h2 className="text-xl font-bold mb-2">📋 Student List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Payment</th>
            <th className="border p-2">Remaining</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s._id}>
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.mobile}</td>
                <td className="border p-2">{s.course}</td>
                <td className="border p-2">{s.address}</td>
                <td className="border p-2">{s.payment}</td>
                <td className="border p-2">{s.remainingPayment}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="bg-violet-600 hover:bg-red-600 radius text-white px-3 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-2">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
