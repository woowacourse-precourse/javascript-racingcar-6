import { MissionUtils } from '@woowacourse/mission-utils';
import { nameError, numberError } from './gameError.js';

class Car {
  constructor(carName) {
    this.name = carName;
    this.position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  getDisplay() {
    MissionUtils.Console.print(`${this.name} : ${'-'.repeat(this.position)}`);
  }
}

class RaceModel {
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
      this.cars.forEach((car) => {
        car.move();
        car.getDisplay();
      });
      MissionUtils.Console.print('\n');
    }
  }

  determineWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    this.winners = this.cars.filter((car) => car.position === maxPosition).map((car) => car.name);
  }
}

class RaceController {
  constructor(model) {
    this.model = model;
  }

  addCar(name) {
    this.model.addCar(name);
  }

  play(numAttempt) {
    this.model.play(numAttempt);
    this.model.determineWinner();
  }

  getWinner() {
    return this.model.winners.join('');
  }
}

class App {
  async play() {
    await gameStart();
  }
}

const gamePlay = (carNames, gameAttempt) => {
  MissionUtils.Console.print('\n실행 결과');

  const raceModel = new RaceModel();
  const raceController = new RaceController(raceModel);

  carNames.forEach((carName) => raceController.addCar(carName));
  raceController.play(gameAttempt);

  MissionUtils.Console.print(`\n최종 우승자 : ${raceController.getWinner}`);
};

const gameStart = async () => {
  try {
    const nameInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ); //배열
    const carNames = nameInput.split(',');
    nameError(carNames); //배열

    const gameAttempt = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    numberError(gameAttempt); //문자열

    //에러 통과 후 play
    gamePlay(carNames, gameAttempt);
  } catch (error) {
    throw error;
  }
};

export default App;
