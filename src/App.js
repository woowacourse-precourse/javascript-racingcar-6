import { checkDistanceResult, printWinner } from './functions/gameFinish';
import { playRounds, printResultMessage } from './functions/gameProgress';
import {
  getCarName,
  getPlayCount,
  setInitialResult,
} from './functions/gameStart';

class App {
  constructor() {
    this.racingResult = [];
    this.playCount = 0;
  }

  async start() {
    const carNameList = await getCarName();
    this.playCount = await getPlayCount();
    this.racingResult = setInitialResult(carNameList);
  }

  progress() {
    printResultMessage();
    playRounds(this.racingResult, this.playCount);
  }

  finish() {
    const winnerList = checkDistanceResult(this.racingResult);
    printWinner(winnerList);
  }

  async play() {
    await this.start();
    this.progress();
    this.finish();
  }
}

export default App;
