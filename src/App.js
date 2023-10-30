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

  async play() {
    this.start();
  }
}

export default App;
