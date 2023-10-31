import { defaultErrorHandler } from '../error/errorhandler.js';
import { consoleInput } from '../libraryFeatures/MissionUtilsHandler.js';
import { checkRaceCountValid } from './checkInputValid.js';

async function receiveGameCount() {
  try {
    const count = await consoleInput('시도할 횟수는 몇 회인가요? \n');
    const validCount = await checkRaceCountValid(count);
    return validCount;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}

export default receiveGameCount;
