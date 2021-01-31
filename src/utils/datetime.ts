export const calculateDisplayableDates = (currDate: Date): Date[] => {
  const lastDay = getLastDayOfMonth(currDate).getUTCDate();
  const year = currDate.getUTCFullYear();
  const month = currDate.getUTCMonth();

  const start = getFirstSunday(currDate);
  const end = getLastSaturday(currDate);

  const monthSpan = Array.from(
    Array(lastDay),
    (_, id) => new Date(year, month, id + 1)
  );

  return [...start, ...monthSpan, ...end];
};

const getFirstSunday = (utcDate: Date): Date[] => {
  const dates: Date[] = [];

  const year = utcDate.getUTCFullYear();
  const month = utcDate.getUTCMonth();

  const firstWeekdayMonth = getFirstDayOfMonth(utcDate).getUTCDay();
  const interval = firstWeekdayMonth - 1;

  for (let i = interval; i >= 0; i--) {
    dates.push(new Date(year, month, -i));
  }

  return dates;
};

const getLastSaturday = (utcDate: Date): Date[] => {
  const dates: Date[] = [];
  const lastDatetimeMonth = getLastDayOfMonth(utcDate);
  const year = utcDate.getUTCFullYear();
  const month = utcDate.getUTCMonth();

  const lastWeekdayMonth = lastDatetimeMonth.getUTCDay();
  const interval = 6 - lastWeekdayMonth;

  for (let i = 1; i <= interval; i++) {
    dates.push(new Date(year, month, lastDatetimeMonth.getUTCDate() + i));
  }

  return dates;
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

export const today = () => {
  return new Date(Date.now());
};
