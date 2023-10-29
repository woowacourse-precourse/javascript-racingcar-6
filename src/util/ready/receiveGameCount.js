import { defaultErrorHandler } from '../error/errorhandler.js';
import { consoleInput } from '../libraryFeatures/consoleHandler.js';
import { checkRaceCountValid } from './checkInputValid.js';

async function receiveGameCount() {
  try {
    const count = await consoleInput('시도할 횟수는 몇 회인가요? \n');
    const validCount = await checkRaceCountValid(count);

    return validCount;
  } catch (error) {
    const promise = defaultErrorHandler(error);
    return promise;
  }
}

export default receiveGameCount;
