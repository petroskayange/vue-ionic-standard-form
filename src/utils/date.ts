import dayjs from "dayjs";

const today = () => dayjs().format("YYYY-MM-DD");

export default {
  sessionDate: today,
  todayDateFormatted: () => dayjs().format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
  toStandardHisDisplayFormat: (date: string | Date) => dayjs(date).format("DD MMM, YYYY"),
};
