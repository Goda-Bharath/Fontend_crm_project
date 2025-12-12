import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
function Opportunities() {
  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen">
     
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl flex items-center gap-2 text-black">
            <span className="p-2 bg-blue-100 rounded-md text-blue-600">
              <FaSearch />
            </span>
            
            <span className="text-xl font-semibold text-black">All Opportunities Hear only</span>
          </h1>
          <div className="flex gap-2">
            
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              <input type="date"></input>
              Create Opportunities
            </button>
            <button className=" border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">Actions ▾</button>
          </div>
        </div>

           <span><input
            type="text"
            placeholder="Search"
            className="border rounded-md px-6 py-2   w-64 text-black"
          />  </span>
        <div className="flex items-center justify-between mb-10 m-5 ">
          <div className="flex gap-2">
            
            <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
              Visisting  <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full border px-4 py-2 rounded-md text-black">0</span>
            </button>
            <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
              Visited <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full border px-4 py-2 rounded-md text-black ">2</span>
            </button>
            <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
              Demo Attended <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full border px-4 py-2 rounded-md text-black">0</span>
            </button>
            <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
              Lost Opportunity <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full border px-4 py-2 rounded-md text-black">0</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Table
          </button>
          <button className="border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">Kanban</button>
        </div>

      
        <div className="border rounded-md overflow-hidden shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">
                  <input type="checkbox" />
                </th>
                <th className="p-3 border text-black ">Created on</th>
                <th className="p-3 border text-black">Opportunity Status</th>
                <th className="p-3 border text-black">Name</th>
                <th className="p-3 border text-black">Phone</th>
                <th className="p-3 border text-black">Stack</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="border px-4 py-2 rounded-md flex items-center gap-1 border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            ✏️ Edit Columns
          </button>
          <button className="border px-4 py-2 rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">Export</button>
        </div>
      </div>
    </div>
  )
}
export default Opportunities;