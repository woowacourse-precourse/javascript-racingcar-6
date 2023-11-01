import { checkDistanceResult, printWinner } from './functions/gameFinish';
import { playRounds, printResultMessage } from './functions/gameProgress';
import {
  getCarName,
  getPlayNum,
  setInitialDistance,
} from './functions/gameStart';

class App {
  constructor() {
    this.carDistanceList = [];
    this.playNum = 0;
  }

  start() {
    const carList = getCarName();
    this.playNum = getPlayNum();
    this.carDistanceList = setInitialDistance(carList);
  }

  progress() {
    printResultMessage();
    playRounds(this.carDistanceList, this.playNum);
  }

  finish() {
    const winnerList = checkDistanceResult(this.carDistanceList);
    printWinner(winnerList);
  }

  async play() {
    this.start();
    this.progress();
    this.finish();
  }
}

export default App;
