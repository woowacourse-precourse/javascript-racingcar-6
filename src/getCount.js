import { MissionUtils } from "@woowacourse/mission-utils";
import checkCount from "./checkCount.js";

async function getCount() {
  const countStr = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  const count = Number(countStr);
  checkCount(count);
  return count;
}

export default getCount;
