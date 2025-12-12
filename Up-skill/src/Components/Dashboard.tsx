import { FaHandshake, FaUserTimes } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function Dashboard() {
  const attemptedCount = 3;
  const notContactedCount = 22;

  const data = [
    { name: "Attempted", value: attemptedCount },
    { name: "Not Contacted", value: notContactedCount },
  ];

  const COLORS = ["#0509feff", "#f00404ff"];
  const gocolors = ["#caeb26ff", "#f026f0ff"]

  return (
    <div className="bg-gray-50 min-h-screen p-6 ">
      <div className="flex flex-wrap gap-4">
        {/* Attempted */}
        <div className="flex items-center bg-white rounded-2xl shadow p-4 w-64">
          <div className="bg-indigo-50 p-3 rounded-full">
            <FaHandshake className="text-indigo-600 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 font-medium">Attempted</p>
            <h2 className="text-2xl font-bold text-black">{attemptedCount}</h2>
          </div>
        </div>

        {/* Not Contacted */}
        <div className="flex items-center bg-white rounded-2xl shadow p-4 w-64">
          <div className="bg-indigo-50 p-3 rounded-full">
            <FaUserTimes className="text-indigo-600 text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 font-medium ">Not Contacted</p>
            <h2 className="text-2xl font-bold text-black">{notContactedCount}</h2>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl shadow p-6 mt-25 w-1/3 ">
          <h3 className="text-lg font-semibold mb-4 text-black">Leads Overview</h3>
          {/* Fixed height is important */}
          <div className="h-60  ">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={gocolors[index % gocolors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>


      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow p-6 mb-12 w-1/2 mx-140 ">
        <h3 className="text-lg font-semibold mb-4 text-black">Leads Overview</h3>
        {/* Fixed height is important */}
        <div className="h-60  ">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
