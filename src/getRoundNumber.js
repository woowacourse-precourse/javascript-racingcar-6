import { Console } from '@woowacourse/mission-utils';
import STRINGS from './constants/strings';

export default async function getRoundNumber() {
  const INPUT_ROUND_NUMBER = await Console.readLineAsync(STRINGS.INPUT_ROUNDS);
  if (Number.isNaN(INPUT_ROUND_NUMBER.length)) {
    throw Error(STRINGS.ERROR_NAN);
  }

  return INPUT_ROUND_NUMBER;
}
