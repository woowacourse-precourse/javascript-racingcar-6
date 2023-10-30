import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Race {
  constructor() {
    this.car = new Car();
  }
  createRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  playRace(carsName, raceCount) {
    let carsPosition = new Array(carsName.length).fill(0);
    
    for (let i=0 ; i<raceCount; i++) {
      for (let j=0; j<carsName.length; j++) {
        let randomNum = this.createRandomNum();

        carsPosition[j] += this.car.moveOrStop(carsName[j], randomNum);
        this.car.printCurrentPosition(carsName[j], carsPosition[j]);
      }
    }

    return this.calculateWinner(carsName, carsPosition);
  }

  calculateWinner(carsName, carsPosition) {
    let winnerPosition = Math.max(...carsPosition);
    return this.printWinner(carsName[carsPosition.indexOf(winnerPosition)]);
  }

  printWinner(winnerCarName) {
    Console.print('최종 우승자: '+ winnerCarName);
  }
}

export default Race;
