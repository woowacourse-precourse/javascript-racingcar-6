import { defaultErrorHandler } from '../error/errorhandler.js';
import { getRandomNumberInRange } from '../libraryFeatures/MissionUtilsHandler.js';

export default async function getGoAndStop(count, recentGoAndStop) {
  try {
    const newGoAndStop = [];
    while (newGoAndStop.length < count) {
      const progressStatus = getRandomNumberInRange() > 4 ? 'go' : 'stop';
      newGoAndStop.push(progressStatus);
    }
    const resultGoAndStop = [...recentGoAndStop];

    resultGoAndStop.push(newGoAndStop);

    if (resultGoAndStop.length < count) {
      return getGoAndStop(count, resultGoAndStop);
    }
    return resultGoAndStop;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}
