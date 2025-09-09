import React, { useState } from "react";
import axios from "axios";

const AddResult = ({ onResultAdded }) => {
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
    fname: "",
    dob: "",
    course: "",
    duration: "",
    result: "",
    issueDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://realcomputers.onrender.com/api/results/add", formData);

      setMessage("Result added successfully!");
      onResultAdded(res.data); // 👈 naya result list me add hoga

      setFormData({
        roll: "",
        name: "",
        fname: "",
        dob: "",
        course: "",
        duration: "",
        result: "",
        issueDate: "",
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Result Added Successully✅");
      
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Add Result</h2>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="roll" placeholder="Roll Number" value={formData.roll} onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="fname" placeholder="Father Name" value={formData.fname} onChange={handleChange} className="w-full border p-2" required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="result" placeholder="Result (Pass/Fail)" value={formData.result} onChange={handleChange} className="w-full border p-2" required />
        <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} className="w-full border p-2" required />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddResult;
