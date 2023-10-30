import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './constants/index.js';
import InputError from './errors/InputError.js';
import {
  validateInputCars,
  makeHash,
  validateInputCount,
} from './utils/index.js';

export async function playRacingCars() {
  const carList = await inputCars();

  const attemptCount = await inputCount();

  printResult(carList, attemptCount);
}

export async function inputCars() {
  try {
    const cars = await MissionUtils.Console.readLineAsync(MESSAGE.inputCarList);
    const { isValid, reason } = validateInputCars(cars);

    // if (!isValid) {
    //   throw new InputError(reason);
    // }
    return makeHash(cars);
  } catch (error) {
    console.log(error);
  }
}
export async function inputCount() {
  try {
    const count = await MissionUtils.Console.readLineAsync(MESSAGE.inputCount);
    const { isValid, reason } = validateInputCount(count);
    if (!isValid) {
      throw new InputError(reason);
    }
    return count;
  } catch (error) {
    console.log(error);
  }
}
export function printResult(carList, attemptCount) {
  MissionUtils.Console.print(MESSAGE.executionResult);
  let progressCount = 1;

  //시도횟수만큼
  while (progressCount <= attemptCount) {
    let executionResult = raceCars(carList);
    // Console.print(executionResult);
    MissionUtils.Console.print('\n');
    progressCount += 1;
  }
  const WinnerList = judgeWinner(carList);
  MissionUtils.Console.print(`최종 우승자 : ${WinnerList}`);
}
export function raceCars(carList) {
  let resultText = '';
  for (let car in carList) {
    if (isMove()) {
      carList[car] += 1;
    }
    // resultText = `${resultText}${car} : ${'-'.repeat(carList[car])}\n`;
    resultText = `${car} : ${'-'.repeat(carList[car])}`;
    MissionUtils.Console.print(resultText);
    // MissionUtils.Console.print('pobi : -');
  }

  return resultText;
}
export function isMove() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
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
