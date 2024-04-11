// Home.js
import React, { useState } from 'react';
import SidebarNavbar from '../Components/SidebarNavbar'; 
import Dashboard from '../Components/Dashboard'; 
import MaintenanceForms from '../Components/MaintenanceForms'; 
import Tasks from '../Components/Tasks'; 
import Users from '../Components/Users'; 
import CreateDevelopment from '../Components/CreateDevelopment'; 
import RolesAccess from '../Components/RolesAccess'; 
import Machines from '../Components/Machines'; 
import ApprovalProcess from '../Components/ApprovalProcess'; 
import AnalyticsReports from '../Components/AnalyticsReports'; 
import Settings from '../Components/Settings'; 
import HelpSupport from '../Components/HelpSupport'; 
import { MdGridView, MdOutlineTaskAlt, MdOutlineGroups, MdApartment, MdOutlinePeopleAlt, MdConstruction, MdOutlineVerifiedUser, MdOutlineAnalytics, MdOutlineSettings, MdHelpOutline } from "react-icons/md";
import { BsFileText } from "react-icons/bs";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const menuItems = [
    { label: 'Dashboard', component: Dashboard, icon: MdGridView },
    { label: 'Maintenance Forms', component: MaintenanceForms, icon: BsFileText },
    { label: 'Tasks', component: Tasks, icon: MdOutlineTaskAlt },
    { label: 'Users', component: Users, icon: MdOutlineGroups },
    { label: 'Create Development', component: CreateDevelopment, icon: MdApartment },
    { label: 'Roles & Access', component: RolesAccess, icon: MdOutlinePeopleAlt },
    { label: 'Machines', component: Machines, icon: MdConstruction },
    { label: 'Approval Process', component: ApprovalProcess, icon: MdOutlineVerifiedUser },
    { label: 'Analytics and Reports', component: AnalyticsReports, icon: MdOutlineAnalytics },
    { label: 'Settings', component: Settings, icon: MdOutlineSettings },
    { label: 'Help and Support', component: HelpSupport, icon: MdHelpOutline }
  ];

  const renderComponent = () => {
    const ComponentToRender = menuItems.find(item => item.label === activeComponent)?.component;
    return ComponentToRender ? <ComponentToRender /> : <h1>Select a menu item</h1>;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className=" w-[319px] pt-10 shadow-md   ">
        <div className="menu-items h-[702px]">
          {menuItems.map((item, index) => (
            <SidebarNavbar
              key={index}
              label={item.label}
              icon={item.icon}
              isActive={activeComponent === item.label}
              onClick={() => setActiveComponent(item.label)}
              className='pt-2'
            />
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1  p-8 w-[1601px] h-[948px]">  
        <div className="main-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Home;
