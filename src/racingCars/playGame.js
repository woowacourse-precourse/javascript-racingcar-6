import { Random, Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/index.js';
import InputError from './errors/InputError.js';
import { validateInputCars } from './utils/index.js';

export async function playRacingCars() {
  const carList = await inputCars();
}

export async function inputCars() {
  try {
    const cars = await Console.readLineAsync(MESSAGE.inputCarList);
    console.log(validateInputCars(cars));
    // if (validInputCars(cars)) {
    //   return makeHash(cars);
    // }
  } catch (e) {}
}
