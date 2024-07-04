import React from 'react';

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ScheduleProps {
  schedule: ScheduleItem[];
  activeIndex: number;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule, activeIndex }) => {
  return (
    <div className="schedule">
    <ul>
      {schedule.map((item, index) => (
        <li key={index} className={index === activeIndex ? 'highlight' : ''}>
          <span className="time">{item.time}</span><span className="activity">
          <i className="fas fa-utensils activity-icon">
          {item.activity}
          </i>
          </span>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Schedule;
