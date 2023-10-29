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
    await this.getCarsNames();
    const times = await this.getCountTimes();
    this.repeatForward(times);
  }

  async getCarsNames() {
    const carArr = await this.#view.initCarName();
    this.#carList = carArr.map((car) => new Car(car, 0));
  }

  async getCountTimes() {
    const input = await this.#view.initCountNumber();
    return input;
  }

  repeatForward(input) {
    for(let i = 0; i < input; i++){
      this.createNumber();
      this.printAllCars();
    }
    this.checkWinner();
  }

  createNumber() {
    this.#carList.forEach((car) => {
      const randNum = Random.pickNumberInRange(1, 9);
      if(randNum >= 4){
        car.moveForward();
      }
    })
  }

  printAllCars() {
    this.#carList.forEach((car) => {
      this.#view.printDistanceToSlash(car.getName(),car.getDistance());
    })
    Console.print('\n');
  }

  checkWinner() {
    const allDistance = this.#carList.map((car) => car.getDistance());
    const maxDistance = Math.max(...allDistance);
    const winners = this.#carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
    
    Console.print(`최종 우승자 : ${winners}`);
  }
  
}

export default RacingCar;