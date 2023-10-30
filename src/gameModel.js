import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_TEXT } from './message/gameMessage.js';
import { GAME_DEFAULT } from './default/gameDefault.js';

class Car {
  constructor(carName) {
    this.name = carName;
    this.position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(
      GAME_DEFAULT.randomMin,
      GAME_DEFAULT.randomMax,
    );
    if (randomValue >= GAME_DEFAULT.movable) {
      this.position += 1;
    }
  }

  getDisplay() {
    return `${this.name} : ${OUTPUT_TEXT.go.repeat(this.position)}`;
  }
}

export class RaceModel {
  constructor() {
    this.cars = [];
    this.winners = [];
  }

  addCar(carName) {
    const car = new Car(carName);
    this.cars.push(car);
  }

  play(numAttempt) {
    for (let attempt = 1; attempt <= numAttempt; attempt++) {
      MissionUtils.Console.print(this.moveCarsAndDisplay());
    }
    this.determineWinner();
  }

  moveCarsAndDisplay() {
    return this.cars
      .map((car) => {
        car.move();
        return car.getDisplay();
      })
      .join('\n');
  }

  compareWinner(maxPosition) {
    this.cars.forEach((car) => {
      if (car.position === maxPosition) {
        this.winners.push(car.name);
      }
    });
  }

  determineWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    this.compareWinner(maxPosition);
  }
}

export class RaceController {
  constructor(model) {
    this.model = model;
  }

  addCar(name) {
    this.model.addCar(name);
  }

  play(numAttempt) {
    this.model.play(numAttempt);
  }

  getWinner() {
    return this.model.winners.join(', '); //문자열
  }
}
