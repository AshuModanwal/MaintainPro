import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CreateDevelopment = () => {
  const [selectedOption, setSelectedOption] = useState("Select the department manager");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="h-[800px] relative">
      <div className="h-[680px]">
        <h1 className="w-[348px] h-[42px] text-[32px] font-[600]">Create Department</h1>
        <p className="text-[#747474] w-[940px] h-[26px] text-[20px] mt-2">Streamline Your Operations by adding a new department to manage Machines and Users efficiently</p>
        <div className="mt-6">
          <label className="block text-[20px] font-[500] mb-2 w-[186px] h-[26px]" htmlFor="department-name">Department Name*</label>
          <input className="border bg-[#DCDCDC] w-[440px] h-[44px] rounded-lg px-4 py-3  placeholder:text-[#9C9C9C] placeholder:text-[16px]" type="text" id="department-name" placeholder="Please enter the department name" />
          <label className="block w-[110px] h-[26px] text-[20px] font-[500] mb-2 mt-4" htmlFor="department-description">Description</label>
          <textarea className="border w-[640px] h-[100px] bg-[#DCDCDC] rounded-lg px-4 py-3 placeholder:text-[#9C9C9C] placeholder:text-[16px]" id="department-description" rows="3" placeholder="Add a brief description about Department"></textarea>
          <label className="block w-[205px] h-[26px] text-[20px] font-[500] mb-2 mt-4" htmlFor="department-manager">Department Manager</label>
          <div className="relative">
            <div
              className="border w-[390px] h-[50px] rounded-lg px-4 py-3  bg-[#DCDCDC] text-[#9C9C9C] flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{selectedOption}</span>
              <IoMdArrowDropdown className="ml-auto" />
            </div>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-[387px] bg-white border border-gray-300 rounded-lg shadow-md">
                
              </div>
            )}
          </div>
          <div className="mt-4 ">
            <label className="block text-[26px] font-[600] mb-4 w-[219px] h-[34px]" htmlFor="department-name">Optional Settings</label>
            <div className="flex items-center bg-[#F0F0F0] h-[56px] rounded-lg mt-[20px]">
              <IoMdArrowDropdown className="h-5 w-5 mr-2 ml-[15px] transform rotate-270" />
              <label className="font-[500] ml-[30px]" htmlFor="assign-machines">Assign Machines</label>
            </div>
            <div className="flex items-center  bg-[#F0F0F0] h-[56px] rounded-lg mt-[20px]">
              <IoMdArrowDropdown className="h-5 w-5 mr-2 ml-[15px] transform rotate-270" />
              <label className="ml-[30px] font-[500] w-[163px] h-[26px]" htmlFor="assign-users">Assign Users</label>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[296px] h-[58px]">
        <button className="absolute left-[55px] w-[110px] h-[45px] font-[600] text-[20px] bg-[#F3F3F3] transform -translate-x-1/2 py-2 px-4   rounded-lg " style={{ zIndex: 1 }}>
          Cancel
        </button>
        <button className="absolute left-[190px] w-[110px] text-white h-[45px] font-[600] text-[20px] transform -translate-x-1/2 py-2 px-4 bg-[#FA2609] rounded-lg hover:bg-red-700" style={{ zIndex: 1 }}>
          Save  
        </button>
      </div>
    </div>
  );
};

export default CreateDevelopment;
