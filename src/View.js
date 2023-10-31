import { Console } from '@woowacourse/mission-utils';

const MESSAGE = {
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n',
  OUTPUT_WINNER: winners => `${winners.join(', ')}가 최종 우승했습니다.`,
  OUTPUT_ERROR: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
};
const inputCarNames = async () => {
  const carNames = (await Console.readLineAsync(MESSAGE.INPUT_CAR_NAMES))
    .split(',')
    .map(carName => {
      if (carName.length > 5) {
        throw new Error(MESSAGE.OUTPUT_ERROR);
      }
      return carName;
    });
  return carNames;
};

const inputTryCount = async () => {
  const tryCount = await Console.readLineAsync(MESSAGE.INPUT_TRY_COUNT);
  return tryCount;
};

export { inputCarNames, inputTryCount };
