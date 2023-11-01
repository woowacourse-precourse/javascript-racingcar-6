import { Console } from '@woowacourse/mission-utils';
import { message, error } from '../../Constants';
import checkRacecarNameValidity from '../validation/checkRacecarNameValidity';

async function getRacecarNameInput() {
  const racecarNameInput = await Console.readLineAsync(message.ASK_RACECAR_NAMES);

  // split the inputs by "," and trim any possible whitespaces
  const names = racecarNameInput.split(',').map((item) => item.trim());

  if (await checkRacecarNameValidity(names)) {
    return names;
  } else {
    throw new Error(error.NOT_VALID_NAME);
  }
}

export default getRacecarNameInput;
