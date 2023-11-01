import { Console } from '@woowacourse/mission-utils';
import { message, error } from '../../Constants';
import checkAttemptValidity from '../validation/checkAttemptValidity';

async function getAttemptInput() {
  const attemptInput = await Console.readLineAsync(message.ASK_ATTEMPT_NUMBER);

  const isValid = checkAttemptValidity(attemptInput);

  if (isValid) {
    return Number(attemptInput);
  } else {
    throw new Error(error.NOT_A_NUMBER);
  }
}

export default getAttemptInput;
