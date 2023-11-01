const { MAX_CAR_NAME_LENGTH, MOVE_THRESHOLD, MAX_ROUNDS } = require('./module/constant');
const { START_MESSAGE, ATTEMPT_MESSAGE, RESULT_MESSAGE, FINAL_WINNER_MESSAGE } = require('./module/Message');
const { Random, Console } = require('@woowacourse/mission-utils');

class Car {
  constructor(name) {
    if (name.length > MAX_CAR_NAME_LENGTH) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= MOVE_THRESHOLD) {
      this.position++;
    }
  }

  toString() {
    return '-'.repeat(this.position);
  }
}

class App {
  async play() {
    Console.print(START_MESSAGE);
    const carNames = await Console.readLineAsync();
    const carNameArray = carNames.split(',');

    Console.print(ATTEMPT_MESSAGE);
    const attempts = await Console.readLineAsync();

    if (isNaN(attempts) || attempts < 1 || attempts > MAX_ROUNDS) {
      throw new Error('[ERROR] 시도 횟수가 잘못되었습니다.');
    }

    const cars = carNameArray.map((name) => new Car(name));

    this.playRounds(cars, attempts);

    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(', ');

    Console.print(`${FINAL_WINNER_MESSAGE} : ${winners}`);
  }

  playRounds(cars, attempts) {
    for (let round = 0; round < attempts; round++) {
      Console.print(RESULT_MESSAGE);
      cars.forEach((car) => {
        car.move();
        Console.print(`${car.name} : ${car.toString()}`);
      });
    }
  }
}

module.exports = App;
