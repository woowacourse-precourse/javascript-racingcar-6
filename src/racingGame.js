import { MissionUtils } from "@woowacourse/mission-utils";
import { carGenerate } from "./car.js";

export async function userInputRound() {
  const roundNum = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  return roundNum;
}

export async function generateRandomNum() {
  const carsList = await carGenerate();
  const movingCarsList = carsList.map((car) => ({
    carName: car,
    carMoveDistance: MissionUtils.Random.pickNumberInRange(0, 9),
  }));
  return movingCarsList;
}
