import React, { useState } from "react";

function CreateCampaign() {
  const [form, setForm] = useState({
    name: "",
    owner: "",
    type: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Campaign Created:", form);
  alert("Campaign Created Successfully ✅");
};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-black">Create Campaign</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow">
        <input
          type="text"
          name="name"
          placeholder="Campaign Name"
          value={form.name}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded text-black"
        />
        <input
          type="text"
          name="owner"
          placeholder="Campaign Owner"
          value={form.owner}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded text-black"
        />
        <input
          type="text"
          name="type"
          placeholder="Campaign Type"
          value={form.type}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded text-black"
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={form.status}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded text-black"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Save Campaign
        </button>
      </form>
    </div>
  );
}

export default CreateCampaign;
