import Image from 'next/image';
import React from 'react'
import Profile from '../../../public/img/profile.png'
import { IoMdNotificationsOutline } from "react-icons/io";

const mainnav = () => {
  return (
    <section className='pt-2'>

    <div className='flex justify-between '>
      <div>
        <h1 className='font-bold text-base'>Good morning, Lincoln!👋</h1>
        <h2 className='text-[10px] text-gray-400'>Here&apos;s your performance overview</h2>
      </div>
      <div className='md:flex md:gap-x-9 '>
        <div className='mt-3'>
          <IoMdNotificationsOutline height={10} width={10} className='text-xl' />
        </div>
        <div className='md:flex md:justify-end md:gap-x-3'>
          <div>
            <Image src={Profile} alt="profile" />
          </div>
          <div>
            <h1 className='font-bold'>Lincoln Herwitz</h1>
            <h2 className='text-red-500 text-xs'>Athlete</h2>
          </div>
        </div>
      </div>
  
    </div>
    </section>
  );
}

export default mainnav
