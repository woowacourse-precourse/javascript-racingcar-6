import { MissionUtils } from '@woowacourse/mission-utils';
import Painter from '../Painter/Painter.js';

export default class Car {
  #carName;

  #carNum;

  #distance = 0;

  #DISTANCE_CONDITION = 4;

  static allCars = [];

  constructor(carName) {
    this.#carName = carName;
    Car.allCars.push(this);
  }

  moveCar() {
    this.createNewCarNum();
    this.calculateDistance();
  }

  createNewCarNum() {
    this.#carNum = MissionUtils.Random.pickNumberInRange(0, 9);
  }

  calculateDistance() {
    if (this.#carNum >= this.#DISTANCE_CONDITION) {
      this.#distance += 1;
    }
  }

  getCarInfomation() {
    let distancePicture = '';
    for (let i = 0; i < this.#distance; i += 1) {
      distancePicture += Painter.draw();
    }
    MissionUtils.Console.print(`${this.#carName} : ${distancePicture}`);
  }

  getCarName() {
    return this.#carName;
  }

  static versusCarDistance() {
    const maxDistance = Math.max(...Car.allCars.map((car) => car.#distance));
    return Car.allCars.filter((car) => car.#distance === maxDistance);
  }
}
