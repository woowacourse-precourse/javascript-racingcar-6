import { MissionUtils } from '@woowacourse/mission-utils';
import { makeRandomNumberAndJudge } from './NumberGenerator.js';
import { racingProgress } from './outputView.js';

export const getCarName = async () => {
  const CAR_NAMES = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  await getTryNumber(CAR_NAMES);
};

export const getTryNumber = async (carNames) => {
  const USER_TRY_NUMBER = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  racingProgress(stringToArray(carNames), USER_TRY_NUMBER);
};

export const stringToArray = (string) => {
  return string.split(',');
};
