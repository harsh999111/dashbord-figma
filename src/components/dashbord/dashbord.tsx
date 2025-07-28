import React from "react";
import { FiYoutube } from "react-icons/fi";
import { LuBicepsFlexed, LuDumbbell } from "react-icons/lu";
import { LiaHotjar } from "react-icons/lia";
import { MdOutlineUpload } from "react-icons/md";

const dashboardData = [
  {
    title: "Total Videos upload",
    value: "80",
    icon: <FiYoutube className="text-4xl sm:text-5xl" />,
    subtext: "+12 from last month",
    bgColor: "bg-orange-700 text-white",
  },
  {
    title: "Strength gain",
    value: "8%",
    icon: <LuBicepsFlexed className="text-4xl sm:text-5xl text-pink-500" />,
    subtext: "+0.3 This Week",
    border: true,
  },
  {
    title: "Workouts/week",
    value: "04",
    icon: <LuDumbbell className="text-4xl sm:text-5xl text-blue-500" />,
    subtext: "+0.3 this week",
    border: true,
  },
  {
    title: "Avg. calories",
    value: "180",
    icon: <LiaHotjar className="text-4xl sm:text-5xl text-yellow-400" />,
    subtext: "Last 30 days",
    border: true,
  },
];

const Dashboard = () => {
  return (
    <section className=" px-4 sm:px-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-1">
        <h1 className="text-lg sm:text-xl font-bold">Dashboard</h1>
        <div className="bg-orange-500 text-white px-3 py-2 flex items-center gap-2 rounded-xl cursor-pointer hover:bg-orange-600 transition">
          <MdOutlineUpload className="text-xl" />
          <span className="text-sm sm:text-base font-medium">Upload Video</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {dashboardData.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl ${card.bgColor || "bg-white"} ${
              card.border ? "border border-gray-300" : ""
            } shadow-sm`}
          >
            <h1 className="mb-2 text-sm sm:text-base font-medium">
              {card.title}
            </h1>
            <div className="flex justify-between items-center">
              <span className="text-2xl sm:text-3xl font-bold">
                {card.value}
              </span>
              <div>{card.icon}</div>
            </div>
            <h2 className="mt-2 text-xs sm:text-sm text-gray-600">
              {card.subtext}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
