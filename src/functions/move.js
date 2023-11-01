import { Console, Random } from "@woowacourse/mission-utils";

const TARGET_NUMBER = 4;

function canMove(number) {
  if (number < TARGET_NUMBER) return false;
  return true;
}

function moveCar(nameIndex, carsMovedCount) {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (canMove(randomNumber)) carsMovedCount[nameIndex]++;
}

export function moveCars(names, carsMovedCount) {
  names.forEach((_, nameIndex) => moveCar(nameIndex, carsMovedCount));
}

function getResultString(count) {
  return "-".repeat(count);
}

export function printResult(names, carsMovedCount) {
  names.forEach((name, nameIndex) =>
    Console.print(name + " : " + getResultString(carsMovedCount[nameIndex]))
  );
}
