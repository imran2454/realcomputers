import { useState } from "react";

import AddResult from "./AddResult";
import ResultList from "./ResultList";
import AddStudent from "./AddStudent";
import AddCourse from "./AddCourse";
import CourseList from "./CourseList";
import StudentList from "./StudentList";
import ContactList from "./ContactList";

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "addResult":
        return <AddResult />;
      case "resultList":
        return <ResultList />;
      case "addCourse":
        return <AddCourse />;
      case "courseList":
        return <CourseList />;
      case "student":
        return <StudentList />;
         case "addstudents":
         return <AddStudent />;
          case "contactlist":
            return <ContactList/>
      default:
        return <h2 className="text-5xl font-bold text-center mt-[5%]">Welcome to Admin Dashboard</h2>;
    }
  };

  return (
    <div className="flex  min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveSection("addResult")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              ➕ Add Result
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("resultList")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              📑 Result List
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("addCourse")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              ➕ Add Course
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("courseList")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              📘 Course List
            </button>
          </li>
          <li>
                <button
              onClick={() => setActiveSection("addstudents")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
             ➕ Add Student
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("student")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              👨‍🎓 Student List
            </button>
            </li>
           
           <li>
             <button
              onClick={() => setActiveSection("contactlist")}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              📱 Contact Form
            </button>
           </li>
          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderSection()}</main>
    </div>
  );
}
