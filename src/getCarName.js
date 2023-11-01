import { Console } from '@woowacourse/mission-utils';
import STRINGS from './constants/strings';

export default async function getCarName() {
  const inputCarNames = await Console.readLineAsync(STRINGS.INPUT_CAR);
  const parsedCarNames = inputCarNames.split(',');
  parsedCarNames.forEach(name => {
    if (name.length > 5) {
      throw Error(STRINGS.ERROR_NAME_LENGTH);
    }
  });
  return parsedCarNames;
}
