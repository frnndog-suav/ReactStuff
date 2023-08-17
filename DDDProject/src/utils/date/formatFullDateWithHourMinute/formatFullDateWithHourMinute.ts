import { add, format } from "date-fns";

const utcDateTimeRegex =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;

export const formatFullDateWithHourMinute = (date?: Date | string) => {
  if (!date) return "-";

  if (typeof date === "string" && !utcDateTimeRegex.test(date)) {
    return "-";
  }

  let formattedDate: Date;
  if (typeof date === "string") {
    formattedDate = add(new Date(date), {
      minutes: new Date().getTimezoneOffset(),
    });
  } else {
    formattedDate = date;
  }

  return `${format(formattedDate, "dd")}/${format(
    formattedDate,
    "MM"
  )}/${format(formattedDate, "yyyy")} ${format(formattedDate, "HH")}:${format(
    formattedDate,
    "mm"
  )}`;
};
