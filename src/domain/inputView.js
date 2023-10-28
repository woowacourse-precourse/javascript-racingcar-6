import { MissionUtils } from '@woowacourse/mission-utils';
import { makeRandomNumberAndJudge } from './NumberGenerator.js';
import { racingProgress } from './outputView.js';

export const getCarName = async () => {
  let CAR_NAMES_ARRAY = [];
  const CAR_NAMES = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  if (CAR_NAMES.split('').includes(' ')) {
    throw new Error('[ERROR] 공백을 제거하여 입력해주세요.');
  }
  CAR_NAMES_ARRAY = stringToArray(CAR_NAMES);
  for (let i = 0; i < CAR_NAMES_ARRAY.length; i++) {
    if (CAR_NAMES_ARRAY[i].length > 5) {
      throw new Error('[ERROR] 5자리 이하의 이름을 입력해주세요.');
    }
  }
  await getTryNumber(CAR_NAMES_ARRAY);
};

export const getTryNumber = async (carNames) => {
  const USER_TRY_NUMBER = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  if (USER_TRY_NUMBER <= 0) {
    throw new Error('[ERROR] 잘못된 값을 입력하였습니다.');
  }
  await racingProgress(carNames, USER_TRY_NUMBER);
};

export const stringToArray = (string) => {
  return string.split(',');
};
