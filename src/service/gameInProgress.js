import { defaultErrorHandler } from '../util/error/errorhandler.js';
import { consolePrint } from '../util/libraryFeatures/MissionUtilsHandler.js';
import createExecutionLog from '../util/progress/createExecutionLog.js';
import getGoAndStop from '../util/progress/getGoAndStop.js';
import identifyWinner from '../util/progress/identifyWinner.js';

export default async function gameInProgress(gameData) {
  try {
    const CAR_DATA = gameData.carData;
    const countOfRacers = CAR_DATA.size;
    const countOfGame = gameData.gameCount;

    const goAndStop = [];
    const goAndStopResult = await getGoAndStop(countOfRacers, countOfGame, goAndStop);

    consolePrint('실행 결과');
    const gameResult = await createExecutionLog(goAndStopResult, CAR_DATA);

    const winner = await identifyWinner(gameResult);

    return winner;
  } catch (error) {
    const ERROR = defaultErrorHandler(error);
    return ERROR;
  }
}
