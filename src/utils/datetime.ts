export const calculateDisplayableDates = (currDate: Date): number[] => {
  const lastDay = getLastDayOfMonth(currDate).getUTCDate();

  const start = getFirstSunday(currDate);
  const monthSpan = Array.from(Array(lastDay), (_, id) => id + 1);
  const end = getLastSaturday(currDate);

  return [...start, ...monthSpan, ...end];
};

const getFirstSunday = (utcDate: Date): number[] => {
  const year = utcDate.getUTCFullYear();
  const month = utcDate.getUTCMonth();

  const firstWeekdayMonth = getFirstDayOfMonth(utcDate).getUTCDay();
  const interval = firstWeekdayMonth - 1;

  const firstSunday = new Date(year, month, -interval);

  return Array.from(
    Array(interval + 1),
    (_, id) => id + firstSunday.getUTCDate()
  );
};

const getLastSaturday = (utcDate: Date): number[] => {
  const lastDatetimeMonth = getLastDayOfMonth(utcDate);

  const lastWeekdayMonth = lastDatetimeMonth.getUTCDay();
  const interval = 6 - lastWeekdayMonth;

  return Array.from(Array(interval), (_, id) => id + 1);
};

const getFirstDayOfMonth = (date: Date): Date => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  return new Date(year, month, 1);
};

const getLastDayOfMonth = (date: Date): Date => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();

  return new Date(year, month + 1, 0);
};
