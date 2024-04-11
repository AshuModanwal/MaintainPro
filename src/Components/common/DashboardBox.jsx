import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAddCircle } from "react-icons/io";
import { MdBolt, MdOutlineHourglassTop, MdAssignmentLate } from "react-icons/md";
import closedImage from '../../images/correct.png';

const DashboardBox = ({ data, side, title }) => {
  const getIcon = (label) => {
    const iconStyle = {
      height: '16px',
      width: '16px',
      marginRight: '8px', 
    };

    const imageStyle = {
      height: '16px',
      width: '16px',
      marginRight: '8px', 
    };
  
    switch (label) {
      case 'New':
        return (
          <div className="flex items-center space-x-2">
            <div className="rounded-full h-6 w-6 flex items-center justify-center  text-white bg-[#34A7FF]" style={iconStyle}>
              +
            </div>
            <span className='font-[600]'>{label}</span>
          </div>
        );
      case 'In Progress':
        return (
          <div className="flex items-center space-x-2">
            <div className="rounded-full h-6 w-6 flex items-center justify-center bg-blue-900 text-white" style={iconStyle}>
              <MdBolt />
            </div>
            <span className='font-[600]'>{label}</span>
          </div>
        );
      case 'Closed':
        return (
          <div className="flex items-center space-x-2">
            <img src={closedImage} alt="Closed" style={imageStyle} />
            <span className='font-[600]'>{label}</span>
          </div>
        );
      case 'Overdue':
        return (
          <div className="flex items-center space-x-2">
            <div className="rounded-full h-6 w-6 flex items-center justify-center bg-red-700 text-white" style={iconStyle}>
              <MdOutlineHourglassTop />
            </div>
            <span className='font-[600]'>{label}</span>
          </div>
        );
      case 'Upcoming':
        return (
          <div className="flex items-center space-x-2">
            <div className=" h-6 w-6 flex items-center justify-center bg-[#4563F7] text-white " style={iconStyle}>
              <MdAssignmentLate />
            </div>
            <span className='font-[600]'>{label}</span>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="p-4 rounded-lg relative shadow-md mb-10 h-[542px] "> 
      <h1 className="text-xl font-semibold mb-6 text-gray-800">{title}</h1>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-center justify-between p-4 rounded-md bg-gray-200">
            {getIcon(item.label)}
            <span className='font-[600]'>{item.value}</span>
          </li>
        ))}
      </ul>
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-700" style={{ zIndex: 1 }}>
        See More
      </button>
    </div>
  );
};

DashboardBox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      statusColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  title: PropTypes.string.isRequired,
};

export default DashboardBox;