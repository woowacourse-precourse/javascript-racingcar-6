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
  //Console.print('pobi : -'); x
  const attemptCount = await inputCount();

  if (carList && attemptCount) {
    printResult(carList, attemptCount);
  }
}

export async function inputCars() {
  try {
    const cars = await Console.readLineAsync(MESSAGE.inputCarList);

    validateInputCars(cars);
    const carList = makeHash(cars);
    //Console.print('pobi : -'); //0
    return carList;
  } catch (error) {
    console.log(error);
    // 종료
    if (error instanceof InputError) {
      throw error;
    }
  }
}
// export async function inputCount() {
//   try {
//     const count = await Console.readLineAsync(MESSAGE.inputCount);
//     return validateInputCount(count);
//   } catch (error) {
//     console.log(error);
//   }
// }
export async function inputCount() {
  try {
    Console.print('pobi : -');
    const count = await Console.readLineAsync(MESSAGE.inputCount);
    const { isValid, reason } = validateInputCount(count);
    if (!isValid) {
      throw new InputError(reason);
    }
    return parseInt(count);
  } catch (error) {
    console.log(error);
  }
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
