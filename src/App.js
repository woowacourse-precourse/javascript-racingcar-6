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

  async play() {
    this.start();
    this.progress();
  }
}

export default App;
