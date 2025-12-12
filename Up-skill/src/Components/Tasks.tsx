import React from "react";
import { FaUserTie, FaPhone, FaEnvelope, FaLaptopCode, FaCalendarAlt,FaSearch , FaMapMarkerAlt, FaTable, FaThLarge, FaPlus, FaEdit, FaFileExport } from "react-icons/fa";
function Tasks() {
    const trainers = [
        {
            id: 1,
            name: "Admin",
            assign:"Sudheer",
            tasktyoe:"-",
            subject:"Pyton",
            freeslot:"24-06-2025",
            status:"NOT STARTED",
        },
    ];
    return (
        <div>
            <div className="p-6 bg-gray-50 min-h-screen ">
               
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl flex items-center gap-2 text-black">
                        <span className="p-2 bg-blue-100 rounded-md text-blue-600">
                            <FaSearch />
                        </span>

                        <span className="text-xl font-semibold text-black">All Task's</span>
                    </h1>
                    <div className="flex gap-3">
                        <button className="  px-4 py-1 rounded-lg flex items-center gap-2  border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white ">
                             Create Trainer
                        </button>
                        <button className="border px-4 py-2 rounded-lg flex items-center gap-2  border px-4 py-2 hover:bg-blue-500 text-black">
                            Actions ▼  
                        </button>
                    </div>
                </div>

                
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded-lg px-3 py-2 w-60 text-black"
                    />
                    <div className="flex gap-2">
                        <button className="bg-pink-600 text-white px-3 py-1 rounded-full ">
                            Active 0
                        </button>
                        <button className="bg-pink-600 text-white px-3 py-1 rounded-full">
                            NotActive 1
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 border px-4 py-2 rounded-md text-black">
                            <FaTable /> Table
                        </button>
                        <button className="border px-3 py-1 rounded-lg flex items-center gap-1  border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
                            <FaThLarge /> Kanban
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="border px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-500 hover:text-white border px-4 py-2 rounded-md text-black">
                            <FaEdit /> Edit Columns
                        </button>
                        <button className="border px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-500 hover:text-white border px-4 py-2 rounded-md text-black">
                            <FaFileExport /> Export
                        </button>
                    </div>
                </div>

              
                <div className="overflow-x-auto bg-white rounded-lg shadow ">
                    <table className="w-full border-collapse ">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-3 border text-black">Task Tower</th>
                                <th className="p-3 border text-black">Assign to</th>
                                <th className="p-3 border text-black">Task Type</th>
                                <th className="p-3 border text-black">Subject</th>
                                <th className="p-3 border text-black">Due Date</th>
                                <th className="p-3 border text-black">satus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainers.map((trainer) => (
                                <tr key={trainer.id} className="hover:bg-gray-50">
                                    <td className="p-3 border">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-3 border text-black text-center">{trainer.name}</td>
                                    <td className="p-3 border text-black text-center">{trainer.assign}</td>
                                    <td className="p-3 border text-black text-center">{trainer.tasktyoe}</td>
                                    <td className="p-3 border text-black text-center">{trainer.subject}</td>
                                    <td className="p-3 border text-black text-center">{trainer.freeslot}</td>
                                    <td className="p-3 border text-black text-center">{trainer.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Tasks;