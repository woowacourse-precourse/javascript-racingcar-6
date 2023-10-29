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
  const randomCarsList = carsList.map((car) => ({
    carName: car,
    carRandomNum: MissionUtils.Random.pickNumberInRange(0, 9),
    carDistance: "",
  }));
  return randomCarsList;
}

async function checkRandomNum() {
  const needCheckList = await generateRandomNum();
  const filteredCars = needCheckList.map((car) => {
    if (car.carRandomNum >= 4) {
      return { ...car, carDistance: car.carDistance + "-" };
    }
    return car;
  });
}

checkRandomNum();
