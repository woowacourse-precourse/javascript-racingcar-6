import Car from './Car.js';

class CarRacingGame {
  #cars;
  #round;

  // carNames 배열로 받아야됨. ex) ['Car1', 'Car2', 'Car3']
  // Todo: 각 이름에 맞는 Car인스턴스 생성
  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  race() {}

  // Todo: 해당 라운드의 Car인스턴스의 각 이름과 진행값을 return시킴
  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const progress = car.getProgress();

      return console.log({ name, progress });
    });
  }

  getWinners() {}
}

// console.log 테스트를 위한 코드
const racingGame = new CarRacingGame(['Car1', 'Car2', 'Car3'], 5);
racingGame.getRoundResult();

export default CarRacingGame;
