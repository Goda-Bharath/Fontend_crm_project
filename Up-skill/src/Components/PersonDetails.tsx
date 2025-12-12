import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function PersonDetails() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [person, setPerson] = useState({
    name: "Sudheer",
    phone: "+91-9876543210",
    email: `${name?.toLowerCase()}@gmail.com`,
    stack: "MERN",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof person
  ) => {
    setPerson({ ...person, [field]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("✅ Saved Data:", person); // Replace with API call
    alert("Data saved successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      console.log("🗑 Deleted:", person);
      alert("Person deleted!");
      navigate(-1); // go back after deleting
    }
  };

  const handleExport = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(person, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${person.name}_data.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl flex items-center gap-2 text-black">
          <span className="p-2 bg-blue-100 rounded-md text-blue-600">
            <img
              src="https://crm.skillcapital.ai/_next/static/media/employee_contact.2d215fd6.svg"
              alt="icon"
            />
          </span>
          <span className="text-xl font-semibold text-black">
            {person.name} {name}
          </span>
        </h1>

        <div className="flex gap-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Edit
            </button>
          )}

          <button
            onClick={handleBack}
            className="border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white"
          >
            Back
          </button>
        </div>
      </div>

      {/* Person Info Section */}
      <div className="border rounded-md overflow-hidden shadow-sm bg-white p-6">
        <h2 className="text-lg font-semibold mb-4 text-black">
          Personal Information
        </h2>
        <table className="w-full text-left border-collapse">
          <tbody>
            {Object.entries(person).map(([key, value]) => (
              <tr key={key}>
                <td className="p-3 border text-black font-medium capitalize">
                  {key}
                </td>
                <td className="p-3 border text-black">
                  {isEditing ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleChange(e, key as keyof typeof person)
                      }
                      className="border px-2 py-1 rounded w-full text-black"
                    />
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleExport}
          className="border px-4 py-2 rounded-md text-black hover:bg-blue-500 hover:text-white"
        >
          Export
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PersonDetails;
