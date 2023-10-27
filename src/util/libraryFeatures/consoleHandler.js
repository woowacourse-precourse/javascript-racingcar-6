import { MissionUtils } from '@woowacourse/mission-utils';
import { defaultErrorHandler } from '../error/errorhandler.js';

async function consoleInput(text) {
  try {
    const consoleText = text;
    return MissionUtils.Console.readLineAsync(consoleText);
  } catch (error) {
    defaultErrorHandler(error);
    return null;
  }
}

async function consolePrint(text) {
  try {
    const consoleText = text;
    return MissionUtils.Console.print(consoleText);
  } catch (error) {
    defaultErrorHandler(error);
    return null;
  }
}

async function getrandomNumberInRange(firstNumber, secondNumber) {
  try {
    return MissionUtils.Random.pickNumberInRange(firstNumber, secondNumber);
  } catch (error) {
    defaultErrorHandler(error);
    return null;
  }
}

export { consoleInput, consolePrint, getrandomNumberInRange };
