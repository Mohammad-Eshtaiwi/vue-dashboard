import dayjs from "dayjs";
export default function getSinceTime(date) {
  const diffAsDay = dayjs().diff(date, "day");
  if (diffAsDay === 1) return "yesterday";
  if (diffAsDay > 1 && diffAsDay < 31) return diffAsDay + " days";
  const diffAsMonth = dayjs().diff(date, "month");
  if (diffAsMonth === 1) return "1 month";
  if (diffAsMonth < 13) return diffAsMonth + " months";
  const diffAsYear = dayjs().diff(date, "year");
  if (diffAsYear === 1) return "1 year";
  return diffAsYear + "years";
}
