import { Console, Random } from '@woowacourse/mission-utils';

import CONSTANTS from './constants';
import { parseCarNames, parseNumberOfAttempts } from './parse';
import { outputCurrentProgress, outputFinalProgress } from './output';

const performGame = async () => {
  const carInput = await Console.readLineAsync(
    CONSTANTS.MESSAGES.CAR_INPUT_MESSAGE,
  );

  const names = parseCarNames(carInput);

  const attemptInput = await Console.readLineAsync(
    CONSTANTS.MESSAGES.ATTEMPT_INPUT_MESSAGE,
  );

  const numberOfAttempts = parseNumberOfAttempts(attemptInput);

  executeRace(names, numberOfAttempts);
};

const executeRace = (names, numberOfAttempts) => {
  let results = names.map(name => {
    return { name, distanceFromStart: 0 };
  });

  for (let i = 0; i < numberOfAttempts; i++) {
    results = results.map(calculateNextResult);
    outputCurrentProgress(results);
  }

  outputFinalProgress(results);
};

const calculateNextResult = result => {
  const randomInt = Random.pickNumberInRange(0, 9);

  if (randomInt < CONSTANTS.NUMBERS.MOVE_FORWARD) {
    return result;
  }

  const nextResult = result;
  nextResult.distanceFromStart++;

  return nextResult;
};

export default performGame;
