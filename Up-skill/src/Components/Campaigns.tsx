import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Campaigns() {
  // Column visibility state
  const [visibleColumns, setVisibleColumns] = useState({
    campaignName: true,
    owner: true,
    type: true,
    status: true,
    timings: true,
  });

  // Toggle a column on/off
  const toggleColumn = (col) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [col]:! prev[col],
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl flex items-center gap-2 text-black">
          <span className="p-2 bg-blue-00 rounded-md text-blue-600">
            <FaSearch />
          </span>
          <span className="text-xl font-semibold text-black">
            All Active Campaigns
          </span>
        </h1>

        <div className="flex items-center gap-2">
          <input
            type="date"
            className="border rounded px-2 py-1 bg-blue-500 text-white"
          />
          <button className="bg-white text-black border px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
            Create Campaigns
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-hidden shadow-sm bg-white">
        <table className="w-full text-left border-collapse ">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="p-3 border">
                <input type="checkbox" />
              </th>
              {visibleColumns.campaignName && (
                <th className="p-3 border text-black">Campaign Name</th>
              )}
              {visibleColumns.owner && (
                <th className="p-3 border text-black">Campaign Owner</th>
              )}
              {visibleColumns.type && (
                <th className="p-3 border text-black">Type</th>
              )}
              {visibleColumns.status && (
                <th className="p-3 border text-black">Status</th>
              )}
              {visibleColumns.timings && (
                <th className="p-3 border text-black">Timings</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">
                <input type="checkbox" />
              </td>
              {visibleColumns.campaignName && (
                <td className="p-3 border text-black">
                  <Link
                    to={`/person/Sudheer`}
                    className="text-blue-600 hover:underline"
                  >
                    Sudheer
                  </Link>
                </td>
              )}
              {visibleColumns.owner && (
                <td className="p-3 border text-black">Sudheer</td>
              )}
              {visibleColumns.type && (
                <td className="p-3 border text-black">Murali</td>
              )}
              {visibleColumns.status && (
                <td className="p-3 border text-black">Email</td>
              )}
              {visibleColumns.timings && (
                <td className="p-3 border text-black">Completed</td>
              )}
            </tr>
            <tr>
              <td className="p-3 border">
                <input type="checkbox" />
              </td>
              {visibleColumns.campaignName && (
                <td className="p-3 border text-black">
                  <Link
                    to={`/person/what`}
                    className="text-blue-600 hover:underline"
                  >
                    What'sApp
                  </Link>
                </td>
              )}
              {visibleColumns.owner && (
                <td className="p-3 border text-black">What'sApp</td>
              )}
              {visibleColumns.type && (
                <td className="p-3 border text-black">Admin</td>
              )}
              {visibleColumns.status && (
                <td className="p-3 border text-black">Whatsapp</td>
              )}
              {visibleColumns.timings && (
                <td className="p-3 border text-black">Upcoming</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Edit Columns + Export */}
      <div className="flex gap-2 mt-4">
        <div className="relative">
          <details className="border px-2 py-2 rounded-md text-black cursor-pointer hover:bg-blue-500 hover:text-black ">
            <summary>✏️ Edit Columns</summary>
            <div className="absolute mt-2 bg-white border rounded shadow p-4 z-10">
              {Object.keys(visibleColumns).map((col) => (
                <label key={col} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    checked={visibleColumns[col]}
                    onChange={() => toggleColumn(col)}
                  />
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </label>
              ))}
            </div>
          </details>
        </div>

        <button className="border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
          Export
        </button>
      </div>
    </div>
  );
}

export default Campaigns;
