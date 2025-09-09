import { useState } from "react";

export default function ResultSearch() {
  const [roll, setRoll] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/results/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roll, dob }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data);
      } else {
        setError(data.message || "Result not found");
      }
    } catch (err) {
      setError("Server error, try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Check Your Result</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="text-xl" >Enter Your Enrollment Number</label>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <label className="text-xl"  >Enter Your Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-5 cursor-pointer"
        >
          Submit
        </button>
      </form>

      {/* Show Result */}
      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Student Result</h3>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Father's Name:</strong> {result.fname}</p>
          <p><strong>Course:</strong> {result.course}</p>
          <p><strong>Duration:</strong> {result.duration}</p>
          <p><strong>Result:</strong> {result.result}</p>
          <p><strong>Issued On:</strong> {result.issueDate}</p>
        </div>
      )}

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
}
