import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"
dayjs.extend(utc)

/**
 * 格式化utc类型的字符串
 * @param utcString 被格式化的utc类型字符串
 * @param format 格式
 */
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
