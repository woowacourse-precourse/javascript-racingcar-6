import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from './constants';

const executeRace = (names, numberOfAttempts) => {
  let results = names.map(name => {
    return { name, distanceFromStart: 0 };
  });

  for (let i = 0; i < numberOfAttempts; i++) {
    results = results.map(calculateNextResult);
  }
};

const calculateNextResult = result => {
  const randomInt = Random.pickNumberInRange(0, 9);

  if (randomInt < CONSTANTS.NUMBERS.MOVE_FORWARD) {
    return result;
  }

  const nextResult = result;
  nextResult.numberOfAttempts++;

  return nextResult;
};
