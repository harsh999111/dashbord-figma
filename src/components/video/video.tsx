import React from 'react'
import Football from '../../../public/img/Football1.png'
import Football1 from '../../../public/img/Football2.png'
import Football2 from '../../../public/img/Football3.png'
import Football3 from '../../../public/img/Football4.png'
import Image from 'next/image';
import { IoFootballSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

const video = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold">Uploaded Videos</h1>
        <div className="font-bold">View All</div>
      </div>
      <div className="flex gap-x-3.5">
        <div className="py-1">
          <div>
            <Image src={Football} alt="Football" className="h-44 w-[340px]" />
          </div>
          <div>
            <h1>Soccer Dribbling Skills Workshop</h1>
          </div>
          <div className="flex gap-x-3">
            <div className="flex gap-x-2">
              <span className="mt-1">
                <IoFootballSharp className="text-pink-400" />
              </span>
              <h1>Soccer</h1>
            </div>
            <div className="flex gap-x-2">
              <span className="mt-1">
                <CiCalendarDate className="text-pink-400" />
              </span>
              <h1>30 june</h1>
            </div>
          </div>
        </div>
        <div className="py-1">
          <div>
            <Image src={Football1} alt="Football" className="h-44 w-[340px]" />
          </div>
          <div>
            <h1>Tennis Serve Technique Session</h1>
          </div>
          <div className="flex gap-x-3">
            <div className="flex gap-x-2">
              <span className="mt-1">
                <IoFootballSharp className="text-pink-400" />
              </span>
              <h1>tennis</h1>
            </div>
            <div className="flex gap-x-2">
              <span className="mt-1">
                <CiCalendarDate className="text-pink-400" />
              </span>
              <h1>01 july</h1>
            </div>
          </div>
        </div>
        <div className="py-1">
          <div>
            <Image src={Football2} alt="Football" className="h-44 w-[340px]" />
          </div>
          <div>
            <h1>Swimming Stroke Improvement Clinic</h1>
          </div>
          <div className="flex gap-x-3">
            <div className="flex gap-x-2">
              <span className="mt-1">
                <IoFootballSharp className="text-pink-400" />
              </span>
              <h1>Swimming</h1>
            </div>
            <div className="flex gap-x-2">
              <span className="mt-1">
                <CiCalendarDate className="text-pink-400" />
              </span>
              <h1>03 july</h1>
            </div>
          </div>
        </div>
        <div className="py-1">
          <div>
            <Image src={Football3} alt="Football" className="h-44 w-[340px]" />
          </div>
          <div>
            <h1>Volleyball Team Strategy Meeting</h1>
          </div>
          <div className="flex gap-x-3">
            <div className="flex gap-x-2">
              <span className="mt-1">
                <IoFootballSharp className="text-pink-400" />
              </span>
              <h1>Volleyball</h1>
            </div>
            <div className="flex gap-x-2">
              <span className="mt-1">
                <CiCalendarDate className="text-pink-400" />
              </span>
              <h1>05 july</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default video
