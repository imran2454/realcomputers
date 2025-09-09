import React, { useState } from "react";
import axios from "axios";
import ContactDetails from "./ContactDetails";
import GoogleMapEmbed from "./GoogleMapEmbed";

function ContactForm() {
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
      await axios.post("http://localhost:5000/api/contacts", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
   

   <>
   <ContactDetails/>
   <GoogleMapEmbed/>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10 ">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
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
       <label className="text-xl">Enter Your Email</label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
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
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded  cursor-pointer"
      >
        Send
      </button>
    </form>
   </>
  );
}

export default ContactForm;
