// function getNumStringLength(num: number) {
//   return num.toString().length;
// }

export const formatDate = (date: Date) => {
  // Isolate the date constituents:
  let dateDay = date.getDay().toString();
  let dateMonth = date.getMonth().toString();
  const dateYear = date.getFullYear().toString();

  // Test day and month to see if single digit:
  if (dateDay.length < 2) dateDay = `0${dateDay}`;
  if (dateMonth.length < 2) dateMonth = `0${dateMonth}`;

  // Return date in format for database entry:
  return `${dateYear}-${dateMonth}-${dateDay}`;
};

export const formatTwelveHour = (hour: number) => {
  if (hour > 12) hour -= 12;
  return hour;
};
