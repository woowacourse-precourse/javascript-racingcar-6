import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCars } from "./car.js";
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

export async function constructCar() {
  const carsList = await inputCars();
  const randomCarsList = carsList.map((car) => ({
    carName: car,
    carDistance: "",
  }));
  return randomCarsList;
}

export async function generateRandomNum() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

export async function updateDistance(car, randomNum) {
  if (randomNum >= 4) {
    return { ...car, carDistance: car.carDistance + "-" };
  }

  return car;
}

export async function checkRandomNum(carList) {}

export async function playRacing() {
  let cars = await constructCar();
  const round = await userInputRound();
  await resultAlert();

  for (let i = 0; i < round; i++) {
    cars = await checkRandomNum(cars);
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.carName} : ${car.carDistance}`);
    });
    MissionUtils.Console.print("");
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
