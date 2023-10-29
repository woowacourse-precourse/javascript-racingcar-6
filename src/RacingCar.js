import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { checkValidCarsName, checkValidNumber } from "./Validation.js";
import View from "./View.js";

class RacingCar {
  #carList
  #view

  constructor() {
    this.#carList = [];
    this.#view = new View();
  }

  async start() {
    await this.setCarList();
    const times = await this.getRepeatTime();
    this.repeatMoveOrStop(times);
  }

  async setCarList() {
    const carArr = await this.#view.inputCarNames();
    this.#carList = carArr.map((car) => new Car(car, 0));
  }

  async getRepeatTime() {
    const input = await this.#view.InputRepeatNumber();
    return input;
  }

  repeatMoveOrStop(input) {
    for(let i = 0; i < input; i++){
      this.determineMoveByRandom();
      this.printAllCarsInfo();
    }
    this.chooseWinner();
  }

  determineMoveByRandom() {
    this.#carList.forEach((car) => {
      const randNum = Random.pickNumberInRange(1, 9);
      if(randNum >= 4){
        car.moveForward();
      }
    })
  }

  printAllCarsInfo() {
    this.#carList.forEach((car) => {
      this.#view.printCarResult(car.getName(), car.getDistance());
    })
    Console.print('');
  }

  chooseWinner() {
    const allDistance = this.#carList.map((car) => car.getDistance());
    const maxDistance = Math.max(...allDistance);
    const winners = this.#carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
    
    this.#view.printWinners(winners);
  }
  
}

export default RacingCar;