import { Console } from "@woowacourse/mission-utils";

async function enterValue(str, type) {
  const value = await Console.readLineAsync(str);
  if (type === "string") {
    return value;
  }
  if (type === "number") {
    return Number(value);
  }
}

export default enterValue;
