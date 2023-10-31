import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './constants/index.js';
import InputError from './errors/InputError.js';
import {
  validateInputCars,
  makeHash,
  validateInputCount,
} from './utils/index.js';

export async function playRacingCars() {
  const carList = await inputCars();
  const attemptCount = await inputCount().catch((error) => {
    console.error('예외 처리: ', error.message);
  });

  if (carList && attemptCount) {
    printResult(carList, attemptCount);
  }
}

export async function inputCars() {
  const cars = await Console.readLineAsync(MESSAGE.inputCarList);
  const { isValid, reason } = validateInputCars(cars);
  if (!isValid) {
    throw new Error(`[ERROR] ${reason}`);
  }
  const carList = makeHash(cars);
  return carList;
}
export async function inputCount() {
  const count = await Console.readLineAsync(MESSAGE.inputCount);
  const { isValid, reason, value } = validateInputCount(count);
  if (!isValid) {
    throw new Error(`[ERROR] ${reason}`);
  }
  return value;
}

export function printResult(carList, attemptCount) {
  Console.print(MESSAGE.executionResult);
  let progressCount = 1;

  //시도횟수만큼
  while (progressCount <= attemptCount) {
    let executionResult = raceCars(carList);
    // Console.print(executionResult);
    Console.print('\n');
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
    // resultText = `${resultText}${car} : ${'-'.repeat(carList[car])}\n`;
    resultText = `${car} : ${'-'.repeat(carList[car])}`;
    Console.print(resultText);
    // MissionUtils.Console.print('pobi : -');
  }

  return resultText;
}
export function isMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  //console.log(randomNumber);
  return randomNumber >= 4 ? true : false;
}
export function judgeWinner(carList) {
  // console.log(carList);
  const winnerLength = Math.max(...Object.values(carList));
  let winnerList = [];
  for (let car in carList) {
    if (carList[car] === winnerLength) {
      winnerList.push(car);
    }
  }

  return winnerList.join(',');
}
