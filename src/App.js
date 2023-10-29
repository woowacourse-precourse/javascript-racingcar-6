import { MissionUtils } from "@woowacourse/mission-utils";
import { readCarName, readRaceCount } from './RaceInput.js';

const START_RANGE = 0;
const END_RANGE = 9;

class App {
  constructor() {
    this.forwardCarData = {};
  }

  async play() {
    const carName = await readCarName();
    const carNames = carName.split(',');
    const raceCount = await readRaceCount();

    this.startRace(carNames, raceCount);
  }

  startRace(carNames, raceCount) {
    this.forwardCarData = carNames.reduce((acc, name) => {
      return { ...acc, [name]: 0 };
    }, {});

    for (let index = 0; index < raceCount; index += 1) {
      this.randomForward(carNames);
    }
   return this.forwardCarData;
  }

  randomForward(carNames) {
    carNames.forEach((name) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(START_RANGE, END_RANGE);
      if (randomNumber >= 4) {
        this.forwardCarData[name] += 1;
      }
    });
  }
};

export default App;
