import React, { useState } from "react";
import axios from "axios";


function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://realcomputers.onrender.com/api/contacts", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
   

   <>

    <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-6 bg-white shadow-md rounded-lg mt-10 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Addmition Form</h2>
      <label className="text-xl">Enter Your Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
        required
      />
       <label className="text-xl">Enter Your Course Name</label>
      <input
        type="text"
        name="email"
        placeholder="Enter your Course Name"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
        required
      />
       <label className="text-xl">Enter Your Message</label>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded pointer cursor-pointer"
      >
        Send
      </button>
    </form>
   </>
  );
}

export default AdmissionForm
