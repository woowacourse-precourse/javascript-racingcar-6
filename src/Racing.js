import { Console, Random } from "@woowacourse/mission-utils";

export default function startRacing(cars, moveCount) {
  if (moveCount > 0) {
    cars.forEach((car) => {
      racing(car);
    });
    displayRacingResults(cars);

    startRacing(cars, moveCount - 1);
  }
}

function racing(car) {
  const number = Random.pickNumberInRange(0, 9);
  if (number >= 4) {
    car.move();
  }
}

function printResult(car) {
  const score = [];
  for (let i of Array.from({ length: car.position }, (_, index) => index)) {
    score.push("-");
  }
  Console.print(car.name + " : " + score.join(""));
}

function displayRacingResults(cars) {
  cars.forEach((car) => {
    printResult(car);
  });
  Console.print("");
}
