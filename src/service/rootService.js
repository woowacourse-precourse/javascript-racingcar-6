import { defaultErrorHandler } from '../util/error/errorhandler.js';
import gameStart from './gameStart.js';

export default async function rootService() {
  try {
    const gameData = await gameStart();
    return gameData;
  } catch (error) {
    const promise = defaultErrorHandler(error);
    return promise;
  }
}
