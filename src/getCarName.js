import { Console } from '@woowacourse/mission-utils';
import STRINGS from './constants/strings';

export default async function getCarName() {
  const INPUT_CAR_NAMES = await Console.readLineAsync(STRINGS.INPUT_CAR);
  const PARSED_CAR_NAMES = INPUT_CAR_NAMES.split(',');
  PARSED_CAR_NAMES.forEach(name => {
    if (name.length > 5) {
      throw Error(STRINGS.ERROR_NAME_LENGTH);
    }
  });
  return PARSED_CAR_NAMES;
}
