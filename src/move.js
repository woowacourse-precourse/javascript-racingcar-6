import { Console } from "@woowacourse/mission-utils";

function moveCar(name, carsMovedCount) {
  carsMovedCount[name]++;
}

export function moveCars(names, carsMovedCount) {
  names.forEach((name) => moveCar(name, carsMovedCount));
}

function getResultString(count) {
  return "-".repeat(count);
}

export function printResult(names, carsMovedCount) {
  names.forEach((name) =>
    Console.print("pobi : " + getResultString(carsMovedCount[name]))
  );
}
