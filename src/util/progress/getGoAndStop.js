import { defaultErrorHandler } from '../error/errorhandler.js';
import { getRandomNumberInRange } from '../libraryFeatures/MissionUtilsHandler.js';

export default async function getGoAndStop(racerCount, gameCount, recentGoAndStop) {
  try {
    const newGoAndStop = [];
    while (newGoAndStop.length < racerCount) {
      const progressStatus = getRandomNumberInRange() > 4 ? '-' : '';
      newGoAndStop.push(progressStatus);
    }
    const resultGoAndStop = [...recentGoAndStop];

    resultGoAndStop.push(newGoAndStop);

    if (resultGoAndStop.length < gameCount) {
      return getGoAndStop(racerCount, gameCount, resultGoAndStop);
    }

    return resultGoAndStop;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}
