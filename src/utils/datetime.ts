export const calculateDisplayableDates = (currDate: Date): Date[] => {
  const lastDay = getLastDayOfMonth(currDate).getDate();
  const year = currDate.getFullYear();
  const month = currDate.getMonth();

  const start = getFirstSunday(currDate);
  const end = getLastSaturday(currDate);

  const monthSpan = Array.from(
    Array(lastDay),
    (_, id) => new Date(year, month, id + 1)
  );

  return [...start, ...monthSpan, ...end];
};

const getFirstSunday = (date: Date): Date[] => {
  const dates: Date[] = [];

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstWeekdayMonth = getFirstDayOfMonth(date).getDay();
  const interval = firstWeekdayMonth - 1;

  for (let i = interval; i >= 0; i--) {
    dates.push(new Date(year, month, -i));
  }

  return dates;
};

const getLastSaturday = (date: Date): Date[] => {
  const dates: Date[] = [];
  const lastDatetimeMonth = getLastDayOfMonth(date);
  const year = date.getFullYear();
  const month = date.getMonth();

  const lastWeekdayMonth = lastDatetimeMonth.getDay();
  const interval = 6 - lastWeekdayMonth;

  for (let i = 1; i <= interval; i++) {
    dates.push(new Date(year, month, lastDatetimeMonth.getDate() + i));
  }

  return dates;
};

const getFirstDayOfMonth = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, 1);
};

const getLastDayOfMonth = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month + 1, 0);
};

export const today = () => {
  return new Date(Date.now());
};
