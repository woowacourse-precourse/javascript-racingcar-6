import { Random } from "@woowacourse/mission-utils";
import Car from "../model/Car.js";
import GameResult from "./GameResult.js";
import IOManager from "../utils/IOManager.js";

class Race {
  constructor() {
    this.car = new Car();
    this.ioManager = new IOManager();
    this.gameResult = new GameResult();
  }
  createRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  executeRace(carsName, raceCount) {
    let carsPosition = new Array(carsName.length).fill(0);
    
    for (let i=0 ; i<raceCount; i++) {
      this.moveAllCars(carsName, carsPosition);
      console.log();
    }

    return this.gameResult.calculateWinner(carsName, carsPosition);
  }

  moveAllCars(carsName, carsPosition) {
    carsName.forEach((carName, index) => {
      const randomNum = this.createRandomNum();

      carsPosition[index] += this.car.moveOrStop(randomNum);
      this.ioManager.printCurrentPosition(carName, carsPosition[index]);
    })
  }
}

export default Race;
