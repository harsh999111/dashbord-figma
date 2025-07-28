import Image from "next/image";
import React from "react";
import Chart from "../../../public/img/Chart.png";
import Football from "../../../public/img/Football.png";
import { IoFootballSharp } from "react-icons/io5";
import { CiStar, CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownloadDone } from "react-icons/md";

const activities = [
  { text: "Upload new video", date: "28 June" },
  { text: "Received feedback from trainer", date: "20 June" },
  { text: "Completed project milestone", date: "22 June" },
  { text: "Conducted user testing sessions", date: "25 June" },
  { text: "Finalized design revisions", date: "28 June" },
];

const Performance = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 sm:px-6 ">
      {/* Performance Overview */}
      <div className="border border-gray-300 rounded-xl  p-4">
        <div className="flex justify-between items-center pb-3">
          <h1 className="font-bold text-base sm:text-lg">
            Performance Overview
          </h1>
          <div className="flex items-center gap-x-1 text-sm text-gray-600">
            <span>Month</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="w-full h-[200px] sm:h-[250px] relative">
          <Image
            src={Chart}
            alt="Chart"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-y-4">
        {/* Latest Feedback */}
        <div className="border border-gray-300 rounded-2xl p-2">
          <h1 className="font-bold text-base sm:text-xs">Latest Feedback</h1>
          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 pt-3">
            <div className="relative w-full sm:w-20 h-28 sm:h-24 rounded-lg overflow-hidden">
              <Image
                src={Football}
                alt="Football"
                fill
                className="object-cover "
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xs font-medium">
                Basketball Free Throw Practice
              </h2>
              <div className="flex flex-wrap gap-x-4 text-xs text-gray-700 ">
                <div className="flex items-center gap-x-1">
                  <IoFootballSharp className="text-pink-500" />
                  <span>Football</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <CiCalendarDate className="text-pink-500" />
                  <span>28th June</span>
                </div>
              </div>
              <div className="flex gap-x-4 items-center mt-1">
                <button className="bg-green-700 text-white text-xs px-3  rounded-2xl">
                  Good
                </button>
                <div className="flex items-center gap-x-1 text-sm">
                  <CiStar />
                  <span>(4.2/5)</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">
                &quot;Good tempo overall. Let&apos;s challenge...&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border border-gray-300 rounded-2xl p-2">
          <h1 className="text-base sm:text-sm font-bold mb-3">
            Recent Activity
          </h1>
          <div className="flex flex-col gap-y-2 text-sm">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center flex-wrap gap-y-1"
              >
                <div className="flex items-center gap-x-2">
                  <MdOutlineFileDownloadDone className="text-green-500" />
                  <span className="text-xs">{activity.text}</span>
                </div>
                <span className="text-gray-500 text-xs">{activity.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
