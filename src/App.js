import { MissionUtils } from '@woowacourse/mission-utils';
import printFinish from './module/Result.js';
import getUserInput from './module/Start.js';
import initializeCarData from './module/InitializeCarData.js';

class App {
  constructor() {
    this.carData = {};
    this.distanceArray = [];
    this.carNames = [];
    this.userCount = 0;
  }

  async play() {
    const userInput = await getUserInput();
    this.userCount = userInput.userCount;
    this.carNames = userInput.carNames;
    this.carData = initializeCarData(this.carNames);
    printFinish(this.carData, this.userCount);
  }
}

export default App;
