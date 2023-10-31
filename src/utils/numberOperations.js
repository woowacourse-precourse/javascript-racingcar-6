import { MissionUtils } from '@woowacourse/mission-utils';
import { SETTING } from '../constants';

export const getRandomNumber = () => {
  const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } = SETTING;
  return MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
}

export const isforwardNumber = (num) => {
  const { TARGET_FORWARD_NUMBER } = SETTING;
  return num >= TARGET_FORWARD_NUMBER;
}
