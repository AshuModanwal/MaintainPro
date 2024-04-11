import React from 'react';
import { MdPersonAddAlt } from "react-icons/md";
const RolesAccess = () => {
  return (
    <div className="bg-white  p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Roles & Access</h2>
        <button className="bg-[#FA2609] text-white font-bold py-2 px-4 rounded-xl">
          + <span className='ml-[7px]'>Create new Role</span>
        </button>
      </div>
      <p className="text-gray-600   ">Configure roles to define the different groups of authorities</p>
      <div className="flex flex-col justify-between ml-[2px] mt-[35px] border  shadow-md rounded-lg ">
        <div className='ml-[20px]'>
          <h2 className="text-2xl font-bold mt-4 ">Roles</h2>
          <p className="text-gray-600 mb-2">These roles have been configured with access and permissions for each specific role.</p>
        </div>
        <div className=' border '>
          <div className='ml-[20px] flex flex-row '>
            <h2 className="text-[22px]  text-[#747474] mt-2 mb-4 ">Roles</h2>
            <h2 className="text-[22px] ml-[490px] text-[#747474] mt-2 mb-4 ">Members</h2>
          </div>
        </div>
        <div className='border'>
          <div className='ml-[20px] flex '>
            <div className='mt-[20px] w-[494px]  '>
              <h2 className='text-[20px] font-[600]'>Maintenance Technician</h2>
              <p className='text-[16px] text-[#747474]'>Maintenance Technicians/Engineers have access to create and view maintenance tasks, update task status and add notes, and view machine maintenance history and schedule.</p>
            </div>
            <div className='mt-[45px] ml-[50px] w-[145px]'>
              <p className='text-[18px] font-[600] text-[#FA2609]'>12 Members</p>
            </div>
            <div className=' w-[210px] h-[40px] mt-[35px] ml-[150px]'>
              <button className='flex flex-row mt-[6px]  '>
                <div className='flex flex-row border rounded-lg bg-[#FA26092E] text-[#FA2609] h-[35px]'>
                  <MdPersonAddAlt className='mt-[7px] ml-[10px] text-[18px]' />
                  <p className='ml-[10px] mt-[5px] mr-[8px] text-[16px]'>Add members</p>
                </div>
                <div className=' mt-[1px] bg-[#E0E0E0] justify border rounded-lg ml-[15px] w-[34px] h-[33px] '><p className="font-[800] p-auto" >...</p></div>
              </button>
            </div>
          </div>
        </div>

        {/* =============================================== 2nd list ============================ */}
        

        <div className='border'>
          <div className='ml-[20px] flex '>
            <div className='mt-[20px] w-[494px]  '>
              <h2 className='text-[20px] font-[600]'>Maintenance Manager</h2>
              <p className='text-[16px] text-[#747474]'>
                Maintenance Supervisors/Managers have all the access of a Maintenance Technician/Engineer,
                along with the ability to assign tasks to technicians/engineers and access analytics 
                and reports on maintenance performance.
              </p>
            </div>
            <div className='mt-[45px] ml-[50px] w-[145px]'>
              <p className='text-[18px] font-[600] text-[#FA2609]'>4 Members</p>
            </div>
            <div className=' w-[210px] h-[40px] mt-[35px] ml-[150px]'>
              <button className='flex flex-row mt-[6px]  '>
                <div className='flex flex-row border rounded-lg bg-[#FA26092E] text-[#FA2609] h-[35px]'>
                  <MdPersonAddAlt className='mt-[7px] ml-[10px] text-[18px]' />
                  <p className='ml-[10px] mt-[5px] mr-[8px] text-[16px]'>Add members</p>
                </div>
                <div className=' mt-[1px] bg-[#E0E0E0] justify border rounded-lg ml-[15px] w-[34px] h-[33px] '><p className="font-[800] p-auto" >...</p></div>
              </button>
            </div>
          </div>
        </div>


        {/* =============================================== 3rd list ============================ */}
        

        <div className='border'>
          <div className='ml-[20px] flex '>
            <div className='mt-[20px] w-[494px]  '>
              <h2 className='text-[20px] font-[600]'>Facility Manager</h2>
              <p className='text-[16px] text-[#747474]'>
                Facility Managers have all the access of a Maintenance Supervisor/Manager, 
                with the additional ability to create and manage departments and machines, 
                and have approval authority for maintenance tasks and forms.
              </p>
            </div>
            <div className='mt-[45px] ml-[50px] w-[145px]'>
              <p className='text-[18px] font-[600] text-[#FA2609]'>2 Members</p>
            </div>
            <div className=' w-[210px] h-[40px] mt-[35px] ml-[150px]'>
              <button className='flex flex-row mt-[6px]  '>
                <div className='flex flex-row border rounded-lg bg-[#FA26092E] text-[#FA2609] h-[35px]'>
                  <MdPersonAddAlt className='mt-[7px] ml-[10px] text-[18px]' />
                  <p className='ml-[10px] mt-[5px] mr-[8px] text-[16px]'>Add members</p>
                </div>
                <div className=' mt-[1px] bg-[#E0E0E0] justify border rounded-lg ml-[15px] w-[34px] h-[33px] '><p className="font-[800] p-auto" >...</p></div>
              </button>
            </div>
          </div>
        </div>



        {/* =============================================== 4th list ============================ */}
        

        <div className='border'>
          <div className='ml-[20px] flex '>
            <div className='mt-[20px] w-[494px]  '>
              <h2 className='text-[20px] font-[600]'>Administrator</h2>
              <p className='text-[16px] text-[#747474]'>
                Administrators have all the access of a Facility Manager, with
                the additional ability to manage user profiles and permissions,
                and configure system settings and workflows.
              </p>  
            </div>
            <div className='mt-[45px] ml-[50px] w-[145px]'>
              <p className='text-[18px] font-[600] text-[#FA2609]'>12 Members</p>
            </div>
            <div className=' w-[210px] h-[40px] mt-[35px] ml-[150px]'>
              <button className='flex flex-row mt-[6px]  '>
                <div className='flex flex-row border rounded-lg bg-[#FA26092E] text-[#FA2609] h-[35px]'>
                  <MdPersonAddAlt className='mt-[7px] ml-[10px] text-[18px]' />
                  <p className='ml-[10px] mt-[5px] mr-[8px] text-[16px]'>Add members</p>
                </div>
                <div className=' mt-[1px] bg-[#E0E0E0] justify border rounded-lg ml-[15px] w-[34px] h-[33px] '><p className="font-[800] p-auto" >...</p></div>
              </button>
            </div>
          </div>
        </div>

        {/* =============================================== 5th list ============================ */}
        

        <div className='border'>
          <div className='ml-[20px] flex '>
            <div className='mt-[20px] w-[494px]  '>
              <h2 className='text-[20px] font-[600]'>Quality Control Inspector</h2>
              <p className='text-[16px] text-[#747474]'>
                Quality Control Inspectors have access to view maintenance tasks and schedules, 
                create and manage maintenance forms for quality control purposes, and 
                view reports on machine performance and maintenance activities.
              </p>
            </div>
            <div className='mt-[45px] ml-[50px] w-[145px]'>
              <p className='text-[18px] font-[600] text-[#FA2609]'>6 Members</p>
            </div>
            <div className=' w-[210px] h-[40px] mt-[35px] ml-[150px]'>
              <button className='flex flex-row mt-[6px]  '>
                <div className='flex flex-row border rounded-lg bg-[#FA26092E] text-[#FA2609] h-[35px]'>
                  <MdPersonAddAlt className='mt-[7px] ml-[10px] text-[18px]' />
                  <p className='ml-[10px] mt-[5px] mr-[8px] text-[16px]'>Add members</p>
                </div>
                <div className=' mt-[1px] bg-[#E0E0E0] justify border rounded-lg ml-[15px] w-[34px] h-[33px] '><p className="font-[800] p-auto" >...</p></div>
              </button>
            </div>
          </div>
        </div>
       

      </div>


    </div>
  );
};

export default RolesAccess;


//