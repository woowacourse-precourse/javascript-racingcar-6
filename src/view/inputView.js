import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/ErrorMessage.js';

export const getCarNames = async () => {
  const inputName = await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGE.INPUT_CAR_NAME,
  );
  return inputName; 
};

export const getRoundCount = async () => {
  const round = await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGE.TRY_ROUND_COUNT,
  );
  return round;
};
