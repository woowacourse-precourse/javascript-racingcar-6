import { Console } from '@woowacourse/mission-utils';
import { INPUT_NAME, INPUT_COUNT } from './Constants.js';
import { validateCarName, validateGameCount } from './Validate.js';

async function getCarNames() {
  const input = await Console.readLineAsync(INPUT_NAME);
  const carNames = input.split(',').map((name) => name.trim());
  validateCarName(carNames);

  return carNames;
}

async function getGameCount() {
  const input = await Console.readLineAsync(INPUT_COUNT);
  validateGameCount(input);

  return Number(input);
}

export { getCarNames, getGameCount };
