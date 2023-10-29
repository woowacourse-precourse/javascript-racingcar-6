import { defaultErrorHandler } from '../util/error/errorhandler.js';
import receiveCarName from '../util/ready/receiveCarName.js';
import receiveGameCount from '../util/ready/receiveGameCount.js';
import parseArrayToMap from '../util/ready/parseArrayToMap.js';

export default async function gameStart() {
  try {
    const carList = await receiveCarName();
    const gameCount = await receiveGameCount();
    const carData = parseArrayToMap(carList);

    const gameData = {
      carData,
      gameCount,
    };

    return gameData;
  } catch (error) {
    const promise = defaultErrorHandler(error);
    return promise;
  }
}
