import { validateAttempts, validateCarNames } from './validator.js';

import { Console } from '@woowacourse/mission-utils';

/** 경주할 자동차 이름을 입력받아 배열로 반환하는 함수 */
export const carNamesInput = async () => {
  const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

  return carNames.split(',').map((car) => validateCarNames(car));
};

/** 시도할 횟수를 입력받는 함수 */
export const attemptsInput = async () => {
  const attempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

  return validateAttempts(attempts);
};
