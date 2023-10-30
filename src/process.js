import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from './constants';

const calculateNextResult = result => {
  const randomInt = Random.pickNumberInRange(0, 9);

  if (randomInt < CONSTANTS.NUMBERS.MOVE_FORWARD) {
    return result;
  }

  const nextResult = result;
  nextResult.numberOfAttempts++;

  return nextResult;
};
