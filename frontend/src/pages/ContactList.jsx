import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="p-4 border rounded bg-white shadow flex justify-between items-start"
            >
              <div>
                <h3 className="font-bold">{c.name}</h3>
                <p>Email: {c.email}</p>
                <p className="mt-2">{c.message}</p>
                <small className="text-gray-500">
                  {new Date(c.createdAt).toLocaleString()}
                </small>
              </div>
              <button
                onClick={() => handleDelete(c._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;
