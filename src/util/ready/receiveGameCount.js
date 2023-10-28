import { defaultErrorHandler } from '../error/errorhandler.js';
import { consoleInput } from '../libraryFeatures/consoleHandler.js';
import { checkRaceCountValid } from './checkInputValid.js';

async function receiveGameCount() {
  try {
    const count = await consoleInput('시도할 횟수는 몇 회인가요? \n');
    const isValid = count && (await checkRaceCountValid(count));

    const validCount = isValid;
    return validCount;
  } catch (error) {
    defaultErrorHandler(error);
    return null;
  }
}

export default receiveGameCount;
