import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.rounds = 0;
    this.cars = [];
    this.userInputCars = "";
  }

  async play() {
    const cars = await this.getCars();
    let rounds = await this.getRounds();
    console.log(cars);
    while (rounds) {
      const roundsCars = this.randomNumberForwards(cars);
      rounds--;
      // if (checkForward) doForward();
    }
    // printWinner();
  }
  async getCars() {
    const carsInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carsList = this.carsCheck(carsInput);
    return carsList;
  }

  carsCheck(carsInput) {
    const cars = carsInput.split(",").map((car) => {
      if (car.length > 5) throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      return { name: car, score: 0 };
    });
    return cars;
  }
  async getRounds() {
    const roundsInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return roundsInput;
  }
  // randomNumberForwards(cars) {
  //   const forwardCars = this.cars.map((car) => {
  //     const random = MissionUtils.Random.pickNumberInRange(0, 9);
  //     if (random >= 4) {
  //       car.score = car.score + random - 4;
  //     }
  //     console.log(car);
  //     return car;
  //   });
  //   return forwardCars;
  // }
}


export default App;
