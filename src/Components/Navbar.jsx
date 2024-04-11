import React from 'react';
import { MdNotificationsNone, MdUpdate } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import AustinImage from '../images/Austin.jpeg';

const Navbar = () => {
  return (
    <div className='navbar-container w-full h-[76px] p-4 text-white flex justify-between items-center shadow-lg z-10'>
      {/* Div for MaintainPro and Search */}
      <div className='flex items-center'>
        <span className='text-[36px] font-extrabold ml-[36px] text-[#FA2609]'>MaintainPro</span>
        {/* Search bar with icon and text input */}
        <div className='relative ml-20'>
          <CiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-[#747474]' style={{ fontSize: '24px' }} />
          <input 
            type="search" 
            placeholder="Search..." 
            className='pl-10 w-[400px] h-[36px]  pr-4 py-1 rounded bg-white text-black border border-gray-300'
            style={{ maxWidth: '400px' }} // Adjust the max-width to maintain the search bar size
          />
        </div>
      </div>
      
      {/* Div for Bell, Clock, Image, and User info */}
      <div className="flex items-center  mr-10">
        <MdNotificationsNone className='text-[#232D42] ml-4 w-[24px] h-[29.5px] ' />
        <MdUpdate className='text-[#232D42] ml-4 w-[24px] h-[29.5px]' style={{ backgroundColor: 'transparent' }} />
        <img src={AustinImage} alt="Austin" className='w-12 h-12 rounded-full ml-4 border border-gray-300' />
        <div className='flex flex-col ml-4'>
          <span className='text-[#232D42] font-bold'>Austin Robertson</span>
          <span className='text-sm text-[#747474]'>Maintenance Manager</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
