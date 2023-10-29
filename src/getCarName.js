import { MissionUtils } from "@woowacourse/mission-utils";
import { startPrint } from "./print.js";
import checkCarName from "./checkCarName.js";
async function getCarName() {
  startPrint();
  const carNamesStr = await MissionUtils.Console.readLineAsync("");
  const carNames = carNamesStr.split(",");
  checkCarName(carNames);
  return carNames;
}
export default getCarName;
