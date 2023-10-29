import { defaultErrorHandler } from '../util/error/errorhandler.js';
import { consolePrint } from '../util/libraryFeatures/MissionUtilsHandler.js';
import gameInProgress from './gameInProgress.js';
import gameStart from './gameStart.js';

export default async function rootService() {
  try {
    const gameData = await gameStart();
    const gameResult = await gameInProgress(gameData);
    consolePrint(gameResult);
    return gameResult;
  } catch (error) {
    const promise = defaultErrorHandler(error);
    return promise;
  }
}
