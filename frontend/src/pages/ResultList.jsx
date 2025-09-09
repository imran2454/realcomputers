import React, { useEffect, useState } from "react";
import axios from "axios";

const ResultList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await axios.get("http://localhost:5000/api/results");
      setResults(res.data);
    };
    fetchResults();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/results/${id}`);
     alert("Result deleted successfully!");
    setResults(results.filter((r) => r._id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Result List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Roll</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Result</th>
            <th className="p-2 border">Issue Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res) => (
            <tr key={res._id}>
              <td className="border p-2">{res.roll}</td>
              <td className="border p-2">{res.name}</td>
              <td className="border p-2">{res.course}</td>
              <td className="border p-2">{res.duration}</td>
              <td className="border p-2">{res.result}</td>
              <td className="border p-2">{res.issueDate?.substring(0,10)}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(res._id)}
                  className="bg-violet-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {results.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center p-4 text-gray-500">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
