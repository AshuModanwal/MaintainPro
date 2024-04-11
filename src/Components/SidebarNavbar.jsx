// SidebarNavbar.js
import React from 'react';

const SidebarNavbar = ({ label, icon: Icon, onClick, isActive }) => {
  return (
    <div className={`menu-item py-7 px-4 cursor-pointer flex items-center w-fill h-[42px] gap-2 ${isActive ? 'bg-[#FA2609] text-[#FFFFFF] font-bold' : ''}`} onClick={onClick}>
      {Icon && <Icon className="mr-2 w-[24px] h-[24px] " />} 
      <span className='text-[20px] '>{label}</span>
    </div>
  );
};

export default SidebarNavbar;
