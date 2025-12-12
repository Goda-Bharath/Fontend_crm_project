import React from "react";
import { FaSearch,FaTable,FaThLarge,FaEdit,FaFileExport , FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
function Courses() {
    const courses = [
        { name: "Azure Data Engineer", content: "fundamentals", date: "29-03-2025" },
        { name: "Node JS", content: "fundamentals", date: "29-03-2025" },
        { name: "Next JS", content: "fundamentals", date: "29-03-2025" },
        { name: "Power BI", content: "Excel", date: "29-03-2025" },
        { name: "Automation Testing", content: "fundamentals", date: "29-03-2025" },
        { name: "Azure Data Factory", content: "fundamentals", date: "29-03-2025" },
        { name: "Excel", content: "dev-ops", date: "29-03-2025" },
    ];
    return (
        <div>
            <div className="p-6 p-6 bg-gray-50 min-h-screen">
                <h1 className="text-xl flex items-center gap-1 text-black">
                    <span className="p-2 bg-blue-100 rounded-md  text-blue-600">
                        <FaSearch />
                    </span>

                    <span className="text-xl font-semibold text-black">All Courses </span>
                    
                </h1>
                 <div className="flex items-center justify-between mb-4">
                          <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-lg px-3 py-2 w-60 text-black"
                          />
                          <div className="flex gap-2">
                            <button className="bg-pink-600 text-white px-3 py-1 rounded-full">
                              Active 1
                            </button>
                            <button className="bg-pink-600 text-white px-3 py-1 rounded-full">
                              NotActive 0
                            </button>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-1">
                              <FaTable /> Table
                            </button>
                            <button className="border px-3 py-1 rounded-lg flex items-center gap-1  border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                              <FaThLarge /> Kanban
                            </button>
                          </div>
                          <div className="flex gap-2">
                            <button className="border px-3 py-1 rounded-lg flex items-center gap-1  border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                              <FaEdit /> Edit Columns
                            </button>
                            <button className="border px-3border px-4 py-2 rounded-md text-black py-1 rounded-lg flex items-center gap-1  hover:bg-blue-500 hover:text-white">
                              <FaFileExport /> Export
                            </button>
                          </div>
                        </div>


                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border text-black">Course Name</th>
                            <th className="px-4 py-2 border text-black">Course Duration</th>
                            <th className="px-4 py-2 border text-black">Total Learners</th>
                            <th className="px-4 py-2 border text-black">Content</th>
                            <th className="px-4 py-2 border text-black">
                                <div className="flex items-center gap-2 justify-center">
                                    <FaCalendarAlt className=" text-black" />
                                    Uploaded Date
                                </div>
                            </th>
                            <th className="px-4 py-2 border text-black">Trainer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, date) => (
                            <tr key={date} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border text-black text-center">{course.name}</td>
                                <td className="px-4 py-2 border text-black text-center">-</td>
                                <td className="px-4 py-2 border text-black text-center">1</td>
                                <td className="px-4 py-2 border text-black text-center">{course.content}</td>
                                <td className="px-4 py-2 border text-black text-center">
                                    <div className="flex items-center gap-2 justify-center">
                                        <FaCalendarAlt className="text-gray-500 text-black" />
                                        {course.date}
                                    </div>
                                </td>
                                <td className="px-4 py-2 border text-black text-center">-</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Courses;