import { defaultErrorHandler } from '../error/errorhandler.js';
import { getRandomNumberInRange } from '../libraryFeatures/MissionUtilsHandler.js';

export default async function getGoAndStop(count, recentGoAndStop) {
  try {
    const number = getRandomNumberInRange() > 4 ? 'go' : 'stop';
    const goAndStop = [...recentGoAndStop];
    goAndStop.push(number);

    if (goAndStop.length < count) {
      return getGoAndStop(count, goAndStop);
    }
    return goAndStop;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}
