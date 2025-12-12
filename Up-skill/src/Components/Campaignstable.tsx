import { Link } from "react-router-dom";

const campaigns = [
  {
    id: 1,
    owner: "murali",
    name: "Sudheer",
    type: "Email",
    status: "Completed",
    startDate: "2025-08-20",
    endDate: "2025-08-31",
    description:
      "A demo campaign for testing automation script functionality.",
  },
];

function CampaignTable() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 hover:bg-blue">Campaigns</h2>
      <table className="table-auto border border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Owner</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((camp) => (
            <tr key={camp.id}>
              <td className="border px-4 py-2">
                <Link to={`/Campaignstable/${camp.id}`} className="text-blue-600 underline">
                  {camp.owner}
                </Link>
              </td>
              <td className="border px-4 py-2">
                <Link to={`/Campaignstable/${camp.id}`} className="text-blue-600 underline">
                  {camp.name}
                </Link>
              </td>
              <td className="border px-4 py-2">{camp.type}</td>
              <td className="border px-4 py-2">{camp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignTable;
