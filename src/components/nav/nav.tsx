import React from "react";
import Company from "../../../public/img/company.png";
import Image from "next/image";
import { MdApps } from "react-icons/md";
import { GoUpload } from "react-icons/go";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
const nav = () => {
  return (
    <div className="border border-gray-400 rounded-2xl h-[840px]">
      <div className="flex justify-center">
        <Image src={Company} alt="company" className="h-26 w-26" />
      </div>
      <div className=" grid gap-y-[400px] ">
        <div>
          <div className="py-3 flex flex-col gap-y-10">
            <div className="px-4 ">
              <div className="bg-orange-800 text-lg text-white flex p-2 rounded-xl gap-x-2 ">
                <span className="mt-1">
                  <MdApps />
                </span>
                <h1 className="text-base">Dashboard</h1>
              </div>
            </div>

            <div className="px-4 ">
              <div className=" text-lg  flex p-2 rounded-xl gap-x-2 ">
                <span className="mt-1">
                  <GoUpload />
                </span>
                <h1 className="text-base">Upload video</h1>
              </div>
            </div>

            <div className="px-4 ">
              <div className=" text-lg  flex p-2 rounded-xl gap-x-2 ">
                <span className="mt-1">
                  <MdOutlineWorkHistory />
                </span>
                <h1 className="text-base">History</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-3">
            <div className="px-4 ">
              <div className=" text-lg flex p-2 rounded-xl gap-x-2 ">
                <span className="mt-1">
                  <IoMdSettings />
                </span>
                <h1 className="text-base">Setting</h1>
              </div>
            </div>
            <div className="px-4 ">
              <div className=" text-lg  flex p-2 rounded-xl gap-x-2 ">
                <span className="mt-1">
                  <CiLogout className="text-red-500" />
                </span>
                <h1 className="text-base">Log Out</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
