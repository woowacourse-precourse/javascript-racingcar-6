import { MissionUtils } from "@woowacourse/mission-utils";
import checkCarName from "./checkCarName.js";

async function getCarName() {
  const carNamesStr = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const carNames = carNamesStr.split(",");
  checkCarName(carNames);
  return carNames;
}
export default getCarName;
