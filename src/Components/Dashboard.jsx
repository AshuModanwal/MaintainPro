import React from 'react';
import DashboardBox from './common/DashboardBox';
import { MdSupportAgent } from "react-icons/md";

const Dashboard = () => {

  const leftData = [
    { label: 'New', value: 24 },
    { label: 'In Progress', value: 26 },
    { label: 'Closed', value: 48 },
    { label: 'Overdue', value: 12 },
    { label: 'Upcoming', value: 2 },
  ];

  const rightData = [
    { label: 'New', value: 14 },
    { label: 'In Progress', value: 9 },
    { label: 'Closed', value: 32 },
    { label: 'Overdue', value: 12 },
    { label: 'Upcoming', value: 38 },
  ];

  return (
    <div className=' h-[700px] w-[1120px] relative'>
      <h1 className='text-3xl font-bold'>Welcome to 
        <span className='text-[#FA2609]'> MaintainPro</span>  
      </h1>
      <p className='text-xl'>Hello, Austin Robertson ( Maintenance Manager )</p>
      <div className="flex mt-10 gap-4 ">
        {/* leftBox */}
        <div className="w-[500px] h-[552px]">
          <DashboardBox
            data={leftData} 
            side='left'
            title='Reactive Tickets'
          />
        </div>
        
        {/* rightBox */}
        <div className="w-[500px] h-[542px] relative">
          <DashboardBox
            data={rightData}
            side='right'
            title='PPM'
          />
          <div className="absolute  right-10">
            <div className="w-16 h-16 flex items-center justify-center bg-[#FA2609] rounded-full">
              <MdSupportAgent size={36} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
