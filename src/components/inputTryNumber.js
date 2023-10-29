import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

export default async function inputTryNumber() {
  const TRYS = await MissionUtils.Console.readLineAsync(GAME.TRY);
  console.log(TRYS);
}
