import { MissionUtils } from "@woowacourse/mission-utils";
import { carGenerate } from "./car.js";
import { roundValidate } from "./validate.js";

export async function resultAlert() {
  MissionUtils.Console.print("\n실행 결과");
}
export async function userInputRound() {
  const roundNum = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  await roundValidate(roundNum);
  return roundNum;
}

export async function generateCars() {
  const carsList = await carGenerate();
  const randomCarsList = carsList.map((car) => ({
    carName: car,
    carDistance: "",
  }));
  return randomCarsList;
}

export async function checkRandomNum(carList) {
  return carList.map((car) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      return { ...car, carDistance: car.carDistance + "-" };
    }
    return car;
  });
}

export async function playRacing() {
  let cars = await generateCars();
  const round = await userInputRound();
  await resultAlert();
  for (let i = 0; i < round; i++) {
    cars = await checkRandomNum(cars);
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.carName} : ${car.carDistance}`);
    });
    MissionUtils.Console.print("\n");
  }
  return cars;
}

export async function winner() {
  const gameResult = await playRacing();
  const bestDistance = Math.max(
    ...gameResult.map((result) => result.carDistance.length)
  );
  const winners = gameResult.filter(
    (result) => result.carDistance.length === bestDistance
  );
  MissionUtils.Console.print(
    "최종 우승자 : " + winners.map((result) => result.carName).join(", ")
  );
  return;
}
