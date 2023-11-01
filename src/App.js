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

  async start() {
    const carList = await getCarName();
    this.playNum = await getPlayNum();
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
    await this.start();
    this.progress();
    this.finish();
  }
}

export default App;
