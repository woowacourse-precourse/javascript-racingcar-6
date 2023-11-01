import { Console } from '@woowacourse/mission-utils';
import { validateCarName, validateRoundCount } from './validate.js';

async function getCarNames() {
  const inputName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  const carNames = inputName.split(',').map((name) => name.trim());
  validateCarName(carNames);

  return carNames;
}

async function getRoundCount() {
  const inputCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  validateRoundCount(inputCount);

  return Number(inputCount);
}

export { getCarNames, getRoundCount };