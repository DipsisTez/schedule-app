import React from 'react';

interface ActivityProps {
  time: string;
  activity: string;
  isActive: boolean;
}

const Activity: React.FC<ActivityProps> = ({ time, activity, isActive }) => {
  return (
    <li className={isActive ? 'highlight' : ''}>
      <span className="time">{time}</span> 
      <span className="activity">{activity}</span>
    </li>
  );
};

export default Activity;
