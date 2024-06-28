import React from 'react';
import style from './SkillBar.module.css';

const SkillBar = ({ icon, name, experience }) => {
  const progressPercentage = `${experience}%`;

  return (
    <div className="flex items-center gap-4 py-2">
      <img src={icon} alt="" className="w-10" />
      <div className="flex-grow">
        <p className="font-medium">{name}</p>
        <div className="bg-gray-800 border-2 border-blue-800 rounded-md h-2 w-32 overflow-hidden mt-2">
          <div
            className={`${style.contentInner} ${style.animateProgress}`}
            style={{ width: progressPercentage }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;

