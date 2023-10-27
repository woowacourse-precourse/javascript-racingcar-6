import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { checkValidCarsName, checkValidNumber } from "./Validation.js";

class RacingCar {
  #carList = [];

  async start() {
    await this.getCarsNames();
    await this.repeatForward();
  }

  async getCarsNames() {
    const input = await Console.readLineAsync('이름은 쉼표(,) 기준으로 구분\n');
    const inputList = input.split(',');
    if(!checkValidCarsName(inputList)){
      throw new Error('[ERROR] 유효하지 않은 입력 값');
    }
    this.#carList = inputList.map((car) => new Car(car, 0));
  }

  async getCountTimes() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    if(!checkValidNumber(input)){
      throw new Error('[ERROR] 올바른 숫자를 입력해주세요.');
    }
    return Number(input);
  }

  async repeatForward(){
    const input = await this.getCountTimes();
    console.log(input);
    for(let i = 0; i < input; i++){
      await this.createNumber();
      await this.printAllCars();
    }
  }

  async createNumber() {
    this.#carList.forEach((car) => {
      const randNum = Random.pickNumberInRange(1, 9);
      if(randNum >= 4){
        car.moveForward();
      }
    })
  }

  async printAllCars() {
    this.#carList.forEach(async (car) => {
      const distance = car.getCarDistance();
      const name = car.getCarName();
      const slash = await this.getDistanceToSlash(distance);
      this.carInfo(name,slash);
    })
    Console.print('\n');
  }

  carInfo(name, slash) {
    Console.print(`${name} : ${slash}`);
  }

  async getDistanceToSlash(num) {
    let slash = '';
    while(slash.length < num){
      slash += '-';
    }
    return slash;
  }
}

export default RacingCar;