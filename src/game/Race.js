import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Race {
  constructor() {
    this.car = new Car();
  }
  createRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  playRace(carsName, raceCount) {
    let playersPosition = new Array(carsName.length).fill(0);
    
    for (let i=0 ; i<raceCount; i++) {
      for (let j=0; j<carsName.length; j++) {
        let randomNum = this.createRandomNum();

        playersPosition[j] += this.car.moveOrStop(carsName[j], randomNum);
        this.car.printCurrentPosition(carsName[j], playersPosition[j]);
      }
      console.log();
    }
  }
}

export default Race;
