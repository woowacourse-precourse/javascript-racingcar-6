import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './Message.js';

async function getCarName() {
  try {
    const carName = await Console.readLineAsync(INPUT_MESSAGES.INPUT_CAR_NAME);
  } catch (error) {
    // reject 되는 경우
  }
}