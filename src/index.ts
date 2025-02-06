type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const DAYS_OF_WEEK: Day[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const isWeekend = (day: Day): boolean => {
  return day === 'Saturday' || day === 'Sunday';
};

const getWorkingDaysInWeek = (daysOfWeek: Day[]): Day[] => {
  return daysOfWeek.filter((currentDay) => !isWeekend(currentDay));
};
console.log(getWorkingDaysInWeek(DAYS_OF_WEEK));

const getWeekendDaysInWeek = (daysOfWeek: Day[]): Day[] => {
  return daysOfWeek.filter((currentDay) => isWeekend(currentDay));
};
console.log(getWeekendDaysInWeek(DAYS_OF_WEEK));
