import Car from './Car.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';

class CarRacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  // Todo: 각 인스턴스에서 랜덤값이 4이상일때 move실행
  // Todo: Random 생성을 유틸함수로 만들어서 분리해야됨
  race(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      console.log(randomNumber);

      if (randomNumber >= 4) car.move();
    });
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const progress = car.getProgress();

      return { name, progress };
    });
  }

  getWinners() {}
}

// console.log 테스트를 위한 코드
const racingGame = new CarRacingGame(['Car1', 'Car2', 'Car3'], 1);
racingGame.race(randomNumberGenerator);
console.log(racingGame.getRoundResult());

export default CarRacingGame;
