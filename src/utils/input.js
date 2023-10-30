import { Console } from '@woowacourse/mission-utils';

import { INPUT_NAME, INPUT_COUNT } from '../constants/constants.js';
import { validateCarName, validateGameCount } from './validate.js';

async function getCarNames() {
  const input = await Console.readLineAsync(INPUT_NAME);
  const carNames = input.split(',').map((name) => name.trim());
  validateCarName(carNames);

  return carNames;
}

async function getGameCount() {
  const input = await Console.readLineAsync(INPUT_COUNT);
  const count = Number(input);
  validateGameCount(count);

  return count;
}

export { getCarNames, getGameCount };
