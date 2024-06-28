import React from 'react';
import style from './SkillBar.module.css'
const SkillBar = ({ icon, name, experience }) => {
  const progressPercentage = `${experience}%`;

  return (
    <div className="flex items-center gap-4 py-2">
      <img src={icon} alt="" className='w-10'/>
      <div className="flex-grow">
        <p className="font-medium">{name}</p>
        <div className="bg-gray-200 rounded-md h-2 overflow-hidden mt-2">
          <div className={`${style.contentInner} h-full rounded-sm bg-gradient-to-r from-stone-200 via-cyan-300 to-blue-500`} style={{ width: progressPercentage,}} animation="slideBar 1s ease"></div>
        </div>
        
      </div>
    </div>
  );
};

export default SkillBar;
