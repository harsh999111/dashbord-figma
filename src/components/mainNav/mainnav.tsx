import Image from "next/image";
import React from "react";
import Profile from "../../../public/img/profile.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const MainNav = () => {
  return (
    <section className="pt-2 px-4">
      <div className="flex flex-wrap justify-between items-center gap-y-3">
        {/* Left Text Section */}
        <div>
          <h1 className="font-bold text-base">Good morning, Lincoln! 👋</h1>
          <h2 className="text-[10px] text-gray-500">
            Here&apos;s your performance overview
          </h2>
        </div>

        {/* Right Profile Section */}
        <div className="flex items-center gap-x-5">
          {/* Notification Icon */}
          <IoMdNotificationsOutline className="text-2xl text-gray-700 cursor-pointer" />

          {/* Profile Info */}
          <div className="flex items-center gap-x-3">
            <Image
              src={Profile}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-right">
              <h1 className="font-semibold text-sm">Lincoln Herwitz</h1>
              <h2 className="text-red-500 text-xs">Athlete</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
