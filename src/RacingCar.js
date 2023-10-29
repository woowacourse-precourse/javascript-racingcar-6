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
  }

  async getCarsNames() {
    const carArr = await this.#view.initCarName();
    this.#carList = carArr.map((car) => new Car(car, 0));
    console.log(this.#carList);
    await this.getCountTimes();
  }

  async getCountTimes() {
    const input = await this.#view.initCountNumber();
    this.repeatForward(input);
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
    this.#carList.forEach(async (car) => {
      const distance = car.getCarDistance();
      const name = car.getCarName();
      const slash = this.getDistanceToSlash(distance);
      this.carInfo(name,slash);
    })
    Console.print('\n');
  }

  carInfo(name, slash) {
    Console.print(`${name} : ${slash}`);
  }

  getDistanceToSlash(num) {
    let slash = '';
    while(slash.length < num){
      slash += '-';
    }
    return slash;
  }

  checkWinner() {
    const allDistance = this.#carList.map((car) => car.getCarDistance());
    const maxDistance = Math.max(...allDistance);
    const winners = this.#carList
      .filter((car) => car.getCarDistance() === maxDistance)
      .map((car) => car.getCarName());
    
    Console.print(`최종 우승자 : ${winners}`);
  }
  
}

export default RacingCar;