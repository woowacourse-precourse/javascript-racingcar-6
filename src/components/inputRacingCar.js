import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

/** 자동차 입력받는 기능 */
export default async function inputRacingCar() {
  let CARS = [];
  const userInput = await MissionUtils.Console.readLineAsync(GAME.input);
  const CARS_STRING = userInput.split(",");

  CARS_STRING.forEach((car) => {
    const lengthInCodePoints = [...car].length;
    if (lengthInCodePoints > 5) throw new Error(ERROR.length);
    CARS.push({ name: car, go: 0 });
  });

  return CARS;
}
