import { useState } from "react";
import API from "../api/axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/admin/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      window.location.href = "/dashboard"; // redirect
    } catch (err) {
      alert(err.response?.data?.message || "Login failed!");
    }
    setLoading(false);
  };

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="text-lg" >Enter your username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <label className="text-lg" >Enter your password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded w-full mb-24"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </section>
  );
}

