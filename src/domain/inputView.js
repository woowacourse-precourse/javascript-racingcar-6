import { MissionUtils } from '@woowacourse/mission-utils';
import { racingProgress } from './outputView.js';
import {
  userInputCarNameFormError,
  userInputCarNameLengthError,
  userInputTryNumberError,
} from './Error.js';

export const getCarName = async () => {
  let CAR_NAMES_ARRAY = [];
  const CAR_NAMES = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  userInputCarNameFormError(CAR_NAMES);
  CAR_NAMES_ARRAY = stringToArray(CAR_NAMES);
  userInputCarNameLengthError(CAR_NAMES_ARRAY);
  await getTryNumber(CAR_NAMES_ARRAY);
};

export const getTryNumber = async (carNames) => {
  const USER_TRY_NUMBER = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  userInputTryNumberError(USER_TRY_NUMBER);
  await racingProgress(carNames, USER_TRY_NUMBER);
};

export const stringToArray = (string) => {
  return string.split(',');
};
