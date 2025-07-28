import React from 'react'
import { FiYoutube } from "react-icons/fi";
import { LuBicepsFlexed } from "react-icons/lu";
import { LiaHotjar } from "react-icons/lia";
import { MdOutlineUpload } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";

const dashbord = () => {
  return (
    <section className="pt-1">
      <div className="flex justify-between py-2">
        <h1 className="text-xl font-bold">Dashbord</h1>
        <div className="bg-orange-400 text-white p-2 flex  rounded-xl ">
          <span className="mt-1">
            <MdOutlineUpload className="text-xl" />
          </span>
          <h1 className="text-base">Upload video</h1>
        </div>
      </div>
      <div className="flex gap-x-6 py-2">
        <div className="bg-orange-700 p-4 px-5  rounded-xl text-white w-[332px]">
          <h1>Total Videos upload</h1>
          <div className="flex justify-between">
            <span className="text-3xl font-bold">80</span>
            <span>
              <FiYoutube className="text-5xl" />
            </span>
          </div>
          <h2>+12 from last month</h2>
        </div>

        <div className=" border border-gray-300 p-4 px-5  rounded-xl  w-[332px]">
          <h1>Strength gain </h1>
          <div className="flex justify-between">
            <span className="text-3xl font-bold">8%</span>
            <span>
              <LuBicepsFlexed className="text-5xl text-pink-500" />
            </span>
          </div>
          <h2>+0.3 This Week</h2>
        </div>
        <div className=" border border-gray-300 p-4 px-5  rounded-xl  w-[332px]">
          <h1>Workouts/week</h1>
          <div className="flex justify-between">
            <span className="text-3xl font-bold">04</span>
            <span>
              <LuDumbbell className="text-5xl text-blue-500" />
            </span>
          </div>
          <h2>+0.3 this week</h2>
        </div>
        <div className="border border-gray-300  p-4 px-5  rounded-xl  w-[332px]">
          <h1>Arg.calories</h1>
          <div className="flex justify-between">
            <span className="text-3xl font-bold">180</span>
            <span>
              <LiaHotjar className="text-5xl text-yellow-400" />
            </span>
          </div>
          <h2>Last 30 days</h2>
        </div>
      </div>
    </section>
  );
}

export default dashbord
