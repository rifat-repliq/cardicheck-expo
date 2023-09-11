import { format } from "date-fns";

export const sortListByAsc = (list) => list.sort((a, b) => a.value - b.value);

export const sortListByName = (list) =>
  list.sort((a, b) => a.value.localeCompare(b.value));

export const removeFalsy = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (Array.isArray(obj[prop]) && obj[prop].length > 0) {
      newObj[prop] = obj[prop];
    }
    if (!Array.isArray(obj[prop]) && obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

export const titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

export function deferred() {
  let _deferred = {};
  _deferred.promise = new Promise(function (resolve, reject) {
    _deferred.resolve = resolve;
    _deferred.reject = reject;
  });
  return _deferred;
}

export function processCommaFromDoctorDegreeArray(arr) {
  return arr.map((item) => item.name).join(", ");
}

export function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function formatScheduleDate(date) {
  return date ? format(new Date(date), "PP") : "";
}

/**
 *
 * @param {*} date
 * @returns Time: 02:20 PM
 */
export function formatGetTime(date) {
  return date ? format(new Date(date), "p") : "";
}
/**
 * You have to input separate date and time for convert to ISO standard
 * @param {*} date
 * @param {*} time
 * @returns ISOFormate: 2023-06-10T12:56:00+02:00
 */
export function formatToISO(date, time) {
  return new Date(`${date}T${time}`);
}

export function calculateAge(dateString) {
  let birthday = new Date(dateString);
  let today = new Date();
  let ageYears = today.getFullYear() - birthday.getFullYear();
  let ageMonths = today.getMonth() - birthday.getMonth();
  let ageDays = today.getDate() - birthday.getDate();

  // Adjust for negative months and days
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    let monthEnd = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += monthEnd;
    ageMonths--;
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
}

export function pick(obj, props) {
  // Create new object
  var picked = {};

  // Loop through props and push to new object
  for (let prop of props) {
    picked[prop] = obj[prop];
  }

  // Return new object
  return picked;
}

/**
 * Compares two objects and returns a new object containing properties from the
 * first object that have different values compared to the corresponding properties
 * in the second object.
 *
 * @param {Object} compareThis - The object to be compared.
 * @param {Object} compareWith - The object to compare against.
 * @returns {Object} An object containing properties with changed values.
 * @example
 * const originalObj = { a: 1, b: 2, c: 3 };
 * const newObj = { a: 1, b: 5, c: 3 };
 * const changedProperties = pickChangedProperties(newObj, originalObj);
 * // Result: { b: 5 }
 */
export function pickChangedProperties(compareThis, compareWith) {
  const picked = {};

  for (const key of Object.keys(compareThis)) {
    if (compareThis[key] !== compareWith[key]) {
      picked[key] = compareThis[key];
    }
  }

  return picked;
}

export function getTruthyKeys(obj) {
  // pass an object and return keys that are not empty string, null or undefined
  return Object.keys(obj).filter((key) => obj[key]);
}

// Sanitize query params and return searched params
export function sanitizeParams(params) {
  // Initial params object
  const sanitizedObj = {};

  for (const key in params) {
    if (params[key]) {
      sanitizedObj[key] = params[key];
    }
  }
  return sanitizedObj;
}

export function generateUID() {
  // Timestamp portion of the UID
  var timestamp = Date.now().toString(36);

  // Random number portion of the UID
  var randomNum = Math.random().toString(36).substr(2, 5);

  // Combine timestamp and random number to form the UID
  var uid = timestamp + randomNum;

  return uid;
}

export function minutesToHHMMSS(minutes) {
  if (isNaN(minutes)) {
    return "Invalid input";
  }

  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;
  let seconds = Math.floor((remainingMinutes % 1) * 60);

  // Add leading zeros if needed
  let formattedHours = hours.toString().padStart(2, "0");
  let formattedMinutes = remainingMinutes.toString().padStart(2, "0");
  let formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function convertTimeToMinutes(timeString) {
  if (!timeString) return "";

  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes + seconds / 60;
  return totalMinutes;
}

export function prefixCountryCode(phone) {
  if (phone.startsWith("+880")) return phone;

  if (phone.startsWith("0")) {
    return "+880" + phone.substring(1);
  } else {
    return "+880" + phone;
  }
}

export function isDatetimeInPast(datetime) {
  const currentDatetime = new Date();
  const inputDatetime = new Date(datetime);

  return inputDatetime < currentDatetime;
}

export function getLocalTimeFromUTC(utcTimeString) {
  if (!utcTimeString) return "";

  const utcTime = new Date(`1970-01-01T${utcTimeString}Z`);
  const offsetMinutes = utcTime.getTimezoneOffset();
  const localTime = new Date(utcTime.getTime() - offsetMinutes * 60000);
  const localTimeString = localTime.toISOString().substring(11, 19);

  return localTimeString;
}

export function getUTCtimeFromLocal(localTimeString) {
  if (!localTimeString) return "";

  const localDate = new Date(`1970-01-01T${localTimeString}Z`);
  const localOffset = new Date().getTimezoneOffset();
  const utcTime = new Date(localDate.getTime() + localOffset * 60 * 1000);
  const utcTimeString = utcTime.toISOString().substring(11, 19);

  return utcTimeString;
}

export function getRoomName(uid, schedule_start) {
  return `${format(new Date(schedule_start), "yyy-MMM-dd-Hmm")}-${
    uid.split("-")[0]
  }`;
}
