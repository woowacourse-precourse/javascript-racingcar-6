import Car from "../model/Car.js";
import GameResult from "./GameResult.js";

class Race {
  constructor() {
    this.car = new Car();
    this.gameResult = new GameResult();
  }

  executeRace(carsName, raceCount) {
    let carsPosition = new Array(carsName.length).fill(0);
    
    for (let i=0 ; i<raceCount; i++) {
      this.car.moveAllCars(carsName, carsPosition);
      console.log();
    }

    return this.gameResult.calculateWinner(carsName, carsPosition);
  }
}

export default Race;
