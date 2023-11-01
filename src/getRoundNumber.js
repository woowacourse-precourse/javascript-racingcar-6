import { Console } from '@woowacourse/mission-utils';
import STRINGS from './constants/strings';

export default async function getRoundNumber() {
  const inputRoundNumber = await Console.readLineAsync(STRINGS.INPUT_ROUNDS);
  if (Number.isNaN(inputRoundNumber.length)) {
    throw Error(STRINGS.ERROR_NAN);
  }

  return inputRoundNumber;
}
