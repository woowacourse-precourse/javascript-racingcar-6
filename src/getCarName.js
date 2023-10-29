import { MissionUtils } from "@woowacourse/mission-utils";
import { startPrint } from "./print.js";
async function getCarName() {
  startPrint();
  const carNamesStr = await MissionUtils.Console.readLineAsync("");
  const carNames = carNamesStr.split(",");
  return carNames;
}
export default getCarName;
