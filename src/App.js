import { getCarNameList, getTryNum } from './util/Utils.js';
import RaceGame from './domain/RaceGame.js';

export default class App {
  async play() {
    const carNameList = await getCarNameList();
    const tryNum = await getTryNum();
    const raceGame = new RaceGame(carNameList, tryNum);
    raceGame.gameStart();
  }
}
