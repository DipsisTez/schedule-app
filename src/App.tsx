import React from 'react';
import './styles/App.css';
import Schedule from './components/Schedule';
import ProgressBar from './components/ProgressBar';
import Tabs from './components/Tabs';
import useScheduleHighlight from './hooks/useScheduleHighlight';
import FinanceStats from './components/FinanceStats';
import { formatMoney } from './utils/helpers';

interface ScheduleItem {
  time: string;
  activity: string;
}

const income = 90000;
const exp = 38000;
const dd = income - exp;

const weekdaySchedule: ScheduleItem[] = [
  { time: "8:00", activity: "Start of university classes" },
  { time: "16:00", activity: "End of classes" },
];

const weekendScheduleDay1: ScheduleItem[] = [
  { time: "12:00", activity: "Studying new material" },
];

const weekendScheduleDay2: ScheduleItem[] = [
  { time: "12:00", activity: "Lunch" },
];

const App: React.FC = () => {
  const { activeIndex, progress } = useScheduleHighlight(weekdaySchedule, weekendScheduleDay1, weekendScheduleDay2);

  const tabs = [
    {
      label: 'Weekdays',
      content: (
        <div className="schedule weekdays">
          <h2>Weekdays</h2>
          <h3>Standard schedule</h3>
          <Schedule schedule={weekdaySchedule} activeIndex={activeIndex} />
        </div>
      )
    },
    {
      label: 'Weekend',
      content: (
        <div className="schedule weekend">
          <h2>Weekend</h2>
          <h3>First Day</h3>
          <Schedule schedule={weekendScheduleDay1} activeIndex={activeIndex} />
          <h3>Second Day</h3>
          <Schedule schedule={weekendScheduleDay2} activeIndex={activeIndex} />
        </div>
      )
    }
  ];

  return (
    <div className="container">
      <h1>Schedule</h1>
      <Tabs tabs={tabs} />
      <ProgressBar percentage={progress} />
      <FinanceStats income={income} exp={exp} dd={dd} formatMoney={formatMoney} />
    </div>
  );
};

export default App;
