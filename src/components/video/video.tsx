import React from "react";
import Image from "next/image";
import { IoFootballSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

// Images
import Football from "../../../public/img/Football1.png";
import Football1 from "../../../public/img/Football2.png";
import Football2 from "../../../public/img/Football3.png";
import Football3 from "../../../public/img/Football4.png";

const videoData = [
  {
    img: Football,
    title: "Soccer Dribbling Skills Workshop",
    sport: "Soccer",
    date: "30 June",
  },
  {
    img: Football1,
    title: "Tennis Serve Technique Session",
    sport: "Tennis",
    date: "01 July",
  },
  {
    img: Football2,
    title: "Swimming Stroke Improvement Clinic",
    sport: "Swimming",
    date: "03 July",
  },
  {
    img: Football3,
    title: "Volleyball Team Strategy Meeting",
    sport: "Volleyball",
    date: "05 July",
  },
];

const Video = () => {
  return (
    <section className="px-4 pt-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-base">Uploaded Videos</h1>
        <div className="font-bold text-sm text-blue-600 cursor-pointer hover:underline">
          View All
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videoData.map((video, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-2">
            <Image
              src={video.img}
              alt={video.title}
              className="w-full h-44 object-cover rounded-lg"
            />
            <h2 className="font-medium mt-2 text-sm">{video.title}</h2>
            <div className="flex gap-x-4 mt-2 text-sm text-gray-700">
              <div className="flex items-center gap-x-1">
                <IoFootballSharp className="text-pink-400" />
                <span>{video.sport}</span>
              </div>
              <div className="flex items-center gap-x-1">
                <CiCalendarDate className="text-pink-400" />
                <span>{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;
