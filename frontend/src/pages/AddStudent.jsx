import React, { useState } from "react";
import axios from "axios";

const AddStudent = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: "",
    address: "",
    payment: "",
    remainingPayment: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://realcomputers.onrender.com/api/students", formData);
      alert("Student added successfully!");
      onStudentAdded(res.data);

      // Reset form
      setFormData({
        name: "",
        mobile: "",
        course: "",
        address: "",
        payment: "",
        remainingPayment: ""
      });
    } catch (error) {
    //   alert("Error adding student");
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-white rounded shadow">
     <h2 className="text-3xl font-bold mb-2">🙋‍♀️ Add Studentt</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 w-full" />
      <input type="number" name="payment" placeholder="Payment" value={formData.payment} onChange={handleChange} className="border p-2 w-full" />
      <input type="number" name="remainingPayment" placeholder="Remaining Payment" value={formData.remainingPayment} onChange={handleChange} className="border p-2 w-full" />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;
