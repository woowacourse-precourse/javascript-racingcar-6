import { getCarName, getPlayNum } from './functions/gameStart';

class App {
  constructor() {
    this.carList = [];
    this.playNum = 0;
  }

  start() {
    this.carList = getCarName();
    this.playNum = getPlayNum();
  }

  async play() {
    this.start();
  }
}

export default App;
