import { MissionUtils } from "@woowacourse/mission-utils";
import { readCarName, readRaceCount } from './RaceInput.js';
import { printForwardCar, printWinner } from './PrintMessage.js';
import { RACE_RESULT } from './Messages.js';

const START_RANGE = 0;
const END_RANGE = 9;

class App {
  async play() {
    const carName = await readCarName();
    const carNames = carName.split(',');
    const raceCount = await readRaceCount();

    this.forwardCarData = this.setForwardCarData(carNames);
    this.startRace(carNames, raceCount);
  }

  setForwardCarData(carNames) {
    return carNames.reduce((acc, name) => ({ ...acc, [name]: 0 }), {});
  }

  startRace(carNames, raceCount) {
    MissionUtils.Console.print("");
    MissionUtils.Console.print(RACE_RESULT);
    for (let index = 0; index < raceCount; index += 1) {
      this.randomForward(carNames);
      MissionUtils.Console.print("");
    }

    printWinner(this.forwardCarData);
  }

  randomForward(carNames) {
    carNames.forEach((name) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(START_RANGE, END_RANGE);
      if (randomNumber >= 4) {
        this.forwardCarData[name] += 1;
      }
      printForwardCar(name, this.forwardCarData[name]);
    });
  }
};

export default App;
