import { useMemo } from "react";
import { endOfMonth, startOfMonth, isSameDay } from "date-fns";

const getDatesInRange = (startDate, endDate) => {
  const today = new Date();
  const date = new Date(startDate);
  const dates = [];

  while (date <= endDate) {
    const updatedDate = new Date(date);
    dates.push({
      id: updatedDate.valueOf(),
      date: updatedDate.valueOf(),
      dateNumber: updatedDate.getDate(),
      isActive: isSameDay(today, updatedDate),
    });
    date.setDate(date.getDate() + 1);
  }
  return dates;
};
const useMonth = ({ activeDate }) => {
  function getWeeksInMonth(year, month) {
    const weeks = [],
      firstDate = new Date(year, month, 1),
      lastDate = new Date(year, month + 1, 0),
      numDays = lastDate.getDate();

    let dayOfWeekCounter = firstDate.getDay();

    for (let index = 1; index <= numDays; index++) {
      if (dayOfWeekCounter === 0 || weeks.length === 0) {
        weeks.push([]);
      }
      weeks[weeks.length - 1].push(new Date(year, month, index));
      dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }

    const updatedWeeks = weeks.filter((w) => !!w.length);

    if (updatedWeeks[0].length < 7) {
      const emptyDays = 7 - updatedWeeks[0].length;
      updatedWeeks[0] = [...Array(emptyDays).fill(null), ...updatedWeeks[0]];
    }

    if (updatedWeeks[updatedWeeks.length - 1].length < 7) {
      const emptyDays = 7 - updatedWeeks[updatedWeeks.length - 1].length;
      updatedWeeks[updatedWeeks.length - 1] = [
        ...updatedWeeks[updatedWeeks.length - 1],
        ...Array(emptyDays).fill(null),
      ];
    }

    return updatedWeeks.map((w) => {
      return {
        start: w[0],
        end: w[w.length - 1],
        dates: w,
      };
    });
  }

  const { daysList, weekWiseData } = useMemo(() => {
    const start = startOfMonth(activeDate);
    const end = endOfMonth(activeDate);
    const daysList = getDatesInRange(start, end);
    const actDate = new Date(activeDate);
    const weekWiseData = getWeeksInMonth(
      actDate.getFullYear(),
      actDate.getMonth()
    );

    return { daysList, weekWiseData };
  }, [activeDate]);

  return {
    activeDate,
    daysList,
    weekWiseData,
  };
};

export default useMonth;
