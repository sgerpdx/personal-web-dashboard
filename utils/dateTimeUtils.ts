// Currently functions formatting time are located in: mungeUtils.ts

import { DateDisplayItem } from "../data/interfaces";

const weekdayNamesArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const monthNamesArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const findById = (id: number, arr: Array<string>) => {
  let name: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == id) name = arr[i];
  }
  return name;
};

export const extractDateInfo = (date: Date) => {
  // Grab day by number and name:
  const day = date.getDay();
  const nameOfDay = findById(day, weekdayNamesArr);
  // Grab month by number and name:
  const month = date.getMonth();
  const nameOfMonth = findById(month, monthNamesArr);
  // Grab year by number:
  const year = date.getFullYear();
  // Grab universal time zone designation e.g. 'UTC-8':
  const offsetUTC = date.getTimezoneOffset();
  // Create and return instance of DateDisplayItem interface:
  const dateInfo: DateDisplayItem = {
    dayName: nameOfDay,
    monthName: nameOfMonth,
    monthDay: month,
    year: year,
    offsetUTC: offsetUTC,
  };
  return dateInfo;
};
