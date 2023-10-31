import { Console } from '@woowacourse/mission-utils';
import validation from './validation/validationCarName';
import validateRaceCount from './validation/validationRaceCount';

const getRaceCount = async (carNamesToArray) => {
  const raceCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  const raceCountsToNumber = parseInt(raceCount);
  
  validateRaceCount(carNamesToArray, raceCountsToNumber);
};

const getCarNames = async () => {
  const carNames = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
  );

  const carNamesToArray = carNames.split(',');
  
  validation(carNamesToArray);
  await getRaceCount(carNamesToArray);
};

module.exports = { getCarNames, getRaceCount };
