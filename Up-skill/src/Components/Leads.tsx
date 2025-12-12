import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

function Leads() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl  flex items-center gap-2 text-black">
                    <span className="p-2 bg-blue-100 rounded-md text-blue-600">
                        <FaSearch />
                    </span>
                    <span className="text-xl font-semibold text-black">All Leads</span>
                </h1>

                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md border px-4 py-2 rounded-md text-black">
                        <input type="date"></input>
                        Create Lead
                    </button>
                    <button className="border px-4 py-2 rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">Actions ▾
                       
                    </button>
                    
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-md px-3 py-2 w-64 text-black"
                />

                <div className="flex gap-2">
                    <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                        Not Contacted <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full">0</span>
                    </button>
                    <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                        Attempted <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full">2</span>
                    </button>
                    <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                        Warm Lead <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full">0</span>
                    </button>
                    <button className="px-3 py-1 border rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                        Cold Lead <span className="ml-1 bg-pink-600 text-white px-2 py-0.5 rounded-full">0</span>
                    </button>
                </div>
            </div>

            
            <div className="flex gap-2 mb-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Table
                </button>
                <button className="border px-4 py-2 rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">Kanban</button>
            </div>

         
            <div className="border rounded-md overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">
                                <input type="checkbox" />
                            </th>
                            <th className="p-3 border text-black ">Created on</th>
                            <th className="p-3 border text-black">Lead Status</th>
                            <th className="p-3 border text-black">Email</th>
                            <th className="p-3 border text-black">Phone</th>
                            <th className="p-3 border text-black">Stack</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border">
                                <input type="checkbox" />
                            </td>
                            <td className="p-3 border text-black">08 Aug, 2025, 6:32 PM</td>
                            <td className="p-3 border text-black">Attempted</td>
                            <td className="p-3 border text-black">malleswari499@gmail.com</td>
                            <td className="p-3 border text-black">+91 8309552480</td>
                            <td className="p-3 border text-black">-</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">
                                <input type="checkbox" />
                            </td>
                            <td className="p-3 border text-black">07 Aug, 2025, 10:03 PM</td>
                            <td className="p-3 border text-black">Attempted</td>
                            <td className="p-3 border text-black">ch.santhosh009@gmail.com</td>
                            <td className="p-3 border text-black">+1 6789797717</td>
                            <td className="p-3 border text-black">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

           
            <div className="flex gap-2 mt-4">
                <button className="border px-4 py-2 rounded-md flex items-center gap-1 border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                    ✏️ Edit Columns
                </button>
                <button className="border px-4 py-2 rounded-md border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">Export</button>
            </div>
        </div>
    );
}

export default Leads;