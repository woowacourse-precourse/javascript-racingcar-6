import { Console } from '@woowacourse/mission-utils';
import {
  checkCarNamesAreValid,
  checkTryNumberIsValid,
} from './inputValidation.js';

const getCarNames = async () => {
  const carNames = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  return carNames;
};

const getTryNumber = async () => {
  const tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  Console.print('\n실행 결과');

  return tryNumber;
};

export { getCarNames, getTryNumber };
