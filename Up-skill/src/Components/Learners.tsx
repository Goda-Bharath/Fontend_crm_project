import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
function Learners() {
  const learners = [
    {
      id: 1,
      name: "-",
      registeredDate: "07/08/2025",
      course: "-",
      phone: "678979717",
    },
  ];
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
     
      <div className="flex items-center justify-between mb-4">
          <span className="p-2 bg-blue-100 rounded-md text-blue-600">  <FaSearch /> </span>
        <h2 className="text-xl font-semibold text-black mr-195">All Learners</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md border px-4 py-2 rounded-md text-black "> 
          
            Create Learner ▾
          </button>
          <button className="border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            Actions ▾
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md px-3 py-1 text-black"
        />
        <div className="flex gap-2">
          <button className="border px-4 py-1  rounded-md flex items-center gap-1border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            Upcoming<span className="bg-pink-600 text-white  text-xs rounded-full px-2 border px-4 py-2 rounded-md text-black">1</span>
          </button>
          <button className="border px-4 py-1 rounded-md flex items-center gap-1 border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            Ongoing <span className="bg-pink-600 text-white text-xs rounded-full px-2 border px-4 py-2 rounded-md text-black">0</span>
          </button>
          <button className="border px-4 py-1 rounded-md flex items-center gap-1 border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            On Hold <span className="bg-pink-600 text-white text-xs rounded-full px-2 border px-4 py-2 rounded-md text-black">0</span>
          </button>
          <button className="border px-4 py-1 rounded-md flex items-center gap-1  border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            Completed <span className="bg-pink-600 text-white text-xs rounded-full px-2 border px-4 py-2 rounded-md text-black">0</span>
          </button>
        </div>
      </div>

     
      <div className="border rounded-md shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2 border">
                <input type="checkbox" />
              </th>
              <th className="p-2 border text-black">Name</th>
              <th className="p-2 border text-black">Registered Date</th>
              <th className="p-2 border text-black">Course</th>
              <th className="p-2 border text-black">Phone</th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr key={learner.id} className="hover:bg-gray-50">
                <td className="p-2 border">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border text-black text-center">{learner.name}</td>
                <td className="p-2 border text-black text-center">{learner.registeredDate}</td>
                <td className="p-2 border text-black text-center">{learner.course}</td>
                <td className="p-2 border text-black  text-center">{learner.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button className="border px-4 py-2 rounded-md hover:bg-gray-100 hover:bg-blue-500 hover:text-white">
          Edit Columns
        </button>
        <button className="border px-4 py-2 rounded-md hover:bg-gray-100 hover:bg-blue-500 hover:text-white">
          Export
        </button>
      </div>
    </div>
  )
}
export default Learners;