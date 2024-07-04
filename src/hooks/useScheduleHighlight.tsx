import { useState, useEffect } from 'react';

interface ScheduleItem {
  time: string;
  activity: string;
}

const useScheduleHighlight = (
  weekdaySchedule: ScheduleItem[],
  weekendScheduleDay1: ScheduleItem[],
  weekendScheduleDay2: ScheduleItem[]
) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [progress, setProgress] = useState<number>(0);

  const getCurrentMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  useEffect(() => {
    const updateActivityHighlight = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentTime = getCurrentMinutes();
      let scheduleToCheck: ScheduleItem[] = [];

      if (currentDay >= 1 && currentDay <= 5) {
        scheduleToCheck = weekdaySchedule;
      } else if (currentDay === 6) {
        scheduleToCheck = weekendScheduleDay1;
      } else if (currentDay === 0) {
        scheduleToCheck = weekendScheduleDay2;
      }

      let newActiveIndex = -1;
      for (let i = 0; i < scheduleToCheck.length; i++) {
        const [startHour, startMinute] = scheduleToCheck[i].time.split(':').map(Number);
        const start = startHour * 60 + startMinute;
        const end = i < scheduleToCheck.length - 1
          ? scheduleToCheck[i + 1].time.split(':').map(Number).reduce((h, m) => h * 60 + m)
          : 24 * 60;

        if (currentTime >= start && currentTime < end) {
          newActiveIndex = i;
          break;
        }
      }
      setActiveIndex(newActiveIndex);
      setProgress((currentTime / (24 * 60)) * 100);
    };

    updateActivityHighlight();
    const interval = setInterval(updateActivityHighlight, 60000);
    return () => clearInterval(interval);
  }, [weekdaySchedule, weekendScheduleDay1, weekendScheduleDay2]);

  return { activeIndex, progress };
};

export default useScheduleHighlight;
