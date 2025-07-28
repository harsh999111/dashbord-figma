import Image from 'next/image';
import React from 'react'
import Chart from '../../../public/img/Chart.png'
import Football from '../../../public/img/Football.png'
import { IoFootballSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineFileDownloadDone } from "react-icons/md";


const performance = () => {
  return (
    <section className="grid grid-cols-2 gap-x-6 ">
      <div className="border border-gray-300 rounded-xl px-8 h-[335px]">
        <div className="flex justify-between pt-4 pb-3">
          <h1 className="font-bold">Performance Overview</h1>
          <div className="flex gap-x-2">
            <h1>Month</h1>
            <div className="mt-1">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div>
          <Image src={Chart} alt="chart" className="h-[280px]" />
        </div>
      </div>
      <div>
        <div className="pt-4 border border-gray-300  px-4 rounded-2xl h-[165px]">
          <h1 className="font-bold text-base">Latest feedback</h1>
          <div className="pt-4 flex gap-x-2   ">
            <Image src={Football} alt="Football" className="h-24 w-20" />
            <div>
              <h1 className="text-sm">Basketball Free Throw Practice</h1>
              <div className="flex gap-x-3">
                <div className="flex gap-x-2  text-sm">
                  <span className="mt-1 ">
                    <IoFootballSharp className="text-sm text-pink-500" />
                  </span>
                  <h2>Football</h2>
                </div>
                <div className="flex gap-x-2  text-sm">
                  <span className="mt-1 ">
                    <CiCalendarDate className="text-sm text-pink-500" />
                  </span>
                  <h2>28Th june</h2>
                </div>
              </div>
              <div className="flex gap-x-3.5 pt-1">
                <div className="">
                  <button className="bg-green-800 p-1 px-4 text-white rounded-2xl">
                    Good
                  </button>
                </div>
                <div className="flex ">
                  <span className="mt-1">
                    <CiStar />
                  </span>
                  <h1>(4.2/5)</h1>
                </div>
              </div>
              <div className="pt-2 py-4">
                <h1 className="text-gray-500 text-sm">
                  &quot;Good tempo overall. Let&apos;s challenge..
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-1  px-4 rounded-2xl my-4">
          <div>
            <h1 className="text-base font-bold">Recent Activity</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 text-sm">
              <span className="mt-1">
                <MdOutlineFileDownloadDone className="text-green-400" />
              </span>
              <h1>Upload new video</h1>
            </div>
            <div>28 june</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 text-sm">
              <span className="mt-1">
                <MdOutlineFileDownloadDone className="text-green-400" />
              </span>
              <h1>Received feedback from trainer</h1>
            </div>
            <div>20 june</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 text-sm">
              <span className="mt-1">
                <MdOutlineFileDownloadDone className="text-green-400" />
              </span>
              <h1>Completed project milestone</h1>
            </div>
            <div>22 june</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 text-sm">
              <span className="mt-1">
                <MdOutlineFileDownloadDone className="text-green-400" />
              </span>
              <h1>Conducted user testing sessions</h1>
            </div>
            <div>25 june</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 text-sm">
              <span className="mt-1">
                <MdOutlineFileDownloadDone className="text-green-400" />
              </span>
              <h1>Finalized design revisions</h1>
            </div>
            <div>28 june</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default performance
