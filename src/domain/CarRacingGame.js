import Car from './Car.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';

class CarRacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  // race 돌때마다, round에 - 1을 해줌
  race(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      console.log(randomNumber);

      if (randomNumber >= 4) car.move();
    });

    console.log(this.#round, '라운드수');
    this.#round -= 1;
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const progress = car.getProgress();

      return { name, progress };
    });
  }

  // Todo: round가 마지막일때, progress가 가장 큰 값을 가진 자동차들을 리턴해야됨
  getWinners() {
    const highProgress = Math.max(...this.#cars.map((car) => car.getProgress()));
    const winners = this.#cars.filter((car) => car.getProgress() === highProgress);
    return winners.map((car) => car.getName());
  }

  // isPlaying이 false일때, 외부에서 getWinners 호출 <- 마지막라운드
  // true일땐, 실행결과 반복출력
  isPlaying() {
    return this.#round > 0;
  }
}

// console.log 테스트를 위한 코드
const racingGame = new CarRacingGame(['Car1', 'Car2', 'Car3'], 1);
racingGame.race(randomNumberGenerator);
console.log(racingGame.getRoundResult());
console.log(racingGame.getWinners(), '우승자');
console.log(racingGame.isPlaying());
export default CarRacingGame;
