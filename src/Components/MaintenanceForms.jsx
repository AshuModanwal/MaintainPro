import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const MaintenanceForm = () => {
  const [selectedOption, setSelectedOption] = useState("Select the department");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  return (
    <div>
      <h1 className="w-[600px] h-[42px] text-[32px] font-[600]">Create Maintenance Form</h1>
      <p className="text-[#747474] w-[655px] h-[26px] text-[20px] mt-2">Effortlessly Create Tailored Maintenance Forms for Every Department</p>
      <label className="block w-[180px] h-[26px] text-[20px] font-[500] mb-2 mt-8" htmlFor="department-manager">Select Department</label>
          <div className="relative ">
            <div
              className="border w-[390px]  h-[50px] rounded-lg px-4 py-3  bg-[#DCDCDC] text-[16px] text-[#9C9C9C] flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{selectedOption}</span>
              <IoMdArrowDropdown className="ml-auto" />
            </div>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1  bg-white border border-gray-300 rounded-lg shadow-md">
                
              </div>
            )}
          </div>
    </div>
  )
}

export default MaintenanceForm