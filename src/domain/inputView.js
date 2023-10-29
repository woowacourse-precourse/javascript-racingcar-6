import { MissionUtils } from '@woowacourse/mission-utils';
import { racingProgress } from './outputView.js';
import {
  userInputCarNameFormError,
  userInputCarNameLengthError,
  userInputTryNumberError,
  userInputCarNameOverlapError,
} from './Error.js';
import { TEXT } from '../constants/constant.js';

export const getCarName = async () => {
  let CAR_NAMES_ARRAY = [];
  const CAR_NAMES = await MissionUtils.Console.readLineAsync(TEXT.GET_CAR_NAMES);
  userInputCarNameFormError(CAR_NAMES);
  CAR_NAMES_ARRAY = stringToArray(CAR_NAMES);
  userInputCarNameLengthError(CAR_NAMES_ARRAY);
  userInputCarNameOverlapError(CAR_NAMES_ARRAY);
  await getTryNumber(CAR_NAMES_ARRAY);
};

export const getTryNumber = async (carNames) => {
  const USER_TRY_NUMBER = await MissionUtils.Console.readLineAsync(TEXT.GET_TRY_NUMBER);
  userInputTryNumberError(USER_TRY_NUMBER);
  await racingProgress(carNames, USER_TRY_NUMBER);
};

export const stringToArray = (string) => {
  return string.split(',');
};
