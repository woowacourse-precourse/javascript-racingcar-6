import { Console } from '@woowacourse/mission-utils';
import { validateCarNames } from './Validation.js';

//자동차 이름 입력받기
const getCarNames = async () => {
  const userInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const carNames = userInput.split(',');
  validateCarNames(carNames);

  return carNames;
};

//시도 횟수 입력받기
const getTryCount = async () => {
  const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  Console.print('');
  return Number(playCount);
};

export { getCarNames, getTryCount };
