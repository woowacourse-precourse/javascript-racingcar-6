import { Random, Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/index.js';
import InputError from './errors/InputError.js';
import {
  validateInputCars,
  makeHash,
  validateInputCount,
} from './utils/index.js';

export async function playRacingCars() {
  const carList = await inputCars();
  // console.log(carList);
  const attemptCount = await inputCount();
  // console.log(attemptCount);
  printResult(carList, attemptCount);
}

export async function inputCars() {
  try {
    const cars = await Console.readLineAsync(MESSAGE.inputCarList);
    if (validateInputCars(cars)) {
      return makeHash(cars);
    }
  } catch (error) {
    throw new InputError(error);
  }
}
export async function inputCount() {
  try {
    const count = await Console.readLineAsync(MESSAGE.inputCount);
    if (validateInputCount(count)) {
      return count;
    }
  } catch (error) {
    throw new InputError(error);
  }
}
export function printResult(carList, attemptCount) {
  Console.print(MESSAGE.executionResult);
  let progressCount = 1;

  //시도횟수만큼
  while (progressCount <= attemptCount) {
    let executionResult = raceCars(carList);
    Console.print(executionResult);
    progressCount += 1;
  }
  const WinnerList = judgeWinner(carList);
  Console.print(`최종 우승자 : ${WinnerList}`);
}
export function raceCars(carList) {
  let resultText = '';
  for (let car in carList) {
    if (isMove()) {
      carList[car] += 1;
    }
    resultText = `${resultText}${car} : ${carList[car]}\n`;
  }

  return resultText;
}
export function isMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  //console.log(randomNumber);
  return randomNumber >= 4 ? true : false;
}
export function judgeWinner(carList) {
  const winnerLength = Math.max(...Object.values(carList));
  let winnerList = [];
  for (let car in carList) {
    if (carList[car] === winnerLength) {
      winnerList.push(car);
    }
  }

  return winnerList.join(',');
}
