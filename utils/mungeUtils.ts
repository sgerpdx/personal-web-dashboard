//// Functions to format date and time (TODO: move to dateTimeUtils.js)

// Returns a date in the format 'YYYY-MM-DD'
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

// Converts the hours 13...24 (24 hour clock) to 1...12 (PM)
export const formatTwelveHour = (hour: number) => {
  if (hour > 12) hour -= 12;
  return hour;
};

// Returns a string with a zero at the start for numbers < 10
export const padWithZero = (num: number) => {
  if (num < 10) return num.toString().padStart(2, "0");
  return num.toString();
};

// Returns the current time in the format 'HH:MM:SS [AM/PM]'
// All of this could have been solved alternatively with regex and string splitting on the Date object -- look into later:
export const formatTimeDisplay = (date: Date) => {
  // Format hour to twelve-hour clock and add zero to single digit:
  const newHour = date.getHours();
  const twelveHour = formatTwelveHour(newHour);
  const padZeroHour = padWithZero(twelveHour);
  // Add zero to single digit min:
  const newMin = date.getMinutes();
  const padZeroMin = padWithZero(newMin);
  // Add zero to single digit sec:
  const newSec = date.getSeconds();
  const padZeroSec = padWithZero(newSec);
  // Calculate whether to display 'AM' or 'PM':
  let morningEvening = "AM";
  if (newHour > 11) morningEvening = "PM";
  // Return an object with string values:
  return {
    hour: padZeroHour,
    minute: padZeroMin,
    second: padZeroSec,
    amPM: morningEvening,
  };
};

// Returns the number of characters in a number
function getNumStringLength(num: number) {
  return num.toString().length;
}
