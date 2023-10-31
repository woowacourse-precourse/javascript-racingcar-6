import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {}

  validateCar = (cars) => {
    for (let car of cars) {
      if (car.length > 5) {
        throw new Error("[ERORR] 자동차 이름은 5글자 이하입니다.");
      }
    }
  };

  carCreate = (cars) => {
    let car = new Map();
    for (let carName of car) {
      cars.set(carName, 0);
    }
    return car;
  };

  async createCarName() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const cars = input.split(",");
    this.validateCar(cars);
    let car = this.carCreate(cars);
    // if(this.validateCar(cars)) this.racingGame(cars, car);
  }

  async attempts() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
  }

  racingGame(cars, car) {
    for (carName of cars) {
      const moveNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      let move = 0;
      if (moveNumber >= 4) {
        move = 1;
      }
      car.set(cars, car.get(cars) + move);
    }
  }
}

export default App;
