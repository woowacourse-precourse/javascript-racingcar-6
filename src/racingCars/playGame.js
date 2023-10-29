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
  console.log(carList);
  const attemptCount = await inputCount();
  console.log(attemptCount);
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
