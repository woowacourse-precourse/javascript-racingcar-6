import { Console } from '@woowacourse/mission-utils';
import isValidRaceNumber from './isValidRaceNumber.js';

async function getRaceNumber() {
  try {
    const USER_INPUT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const RACE_NUMBER = Number(USER_INPUT);
    if (!isValidRaceNumber(RACE_NUMBER)) return false;
    return RACE_NUMBER;
  } catch (error) {
    throw new Error(error);
  }
}

export default getRaceNumber;
