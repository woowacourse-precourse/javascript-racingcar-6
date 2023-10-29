import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

/** 자동차 입력받는 기능 */
export default async function inputRacingCar() {
  const userInput = await MissionUtils.Console.readLineAsync(GAME.INPUT);
  const CARS = userInput.split(",");

  CARS.forEach((car) => {
    const lengthInCodePoints = [...car].length;
    if (lengthInCodePoints > 5) throw new Error(ERROR.LENGTH);
  });
  return CARS;
}
