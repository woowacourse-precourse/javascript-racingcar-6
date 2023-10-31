import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    const cars = await this.getCars();
    let rounds = await this.getRounds();
    const racingGame = await this.racingRounds(cars, rounds);
    await this.printWinner(racingGame);
  }
  async racingRounds(cars, rounds) {
    let roundsCars = [];
    while (rounds--) {
      const initCars = await this.initCars(cars);
      roundsCars = await this.randomNumberRoundForwards(initCars);
      await this.afterPrint();
    }
    return roundsCars;
  }
  initCars(cars) {
    return cars.map((car) => {
      car.forward = false;
      return car;
    });
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
    await this.beforePrint();
    return roundsInput;
  }
  randomNumberRoundForwards(cars) {
    const forwardCars = cars.map((car) => {
      const random = MissionUtils.Random.pickNumberInRange(0, 9);
      if (random >= 4) {
        car.score = car.score + random - 4;
        this.printRoundscore(car, random);
      }
      return car;
    });
    return forwardCars;
  }
  beforePrint() {
    MissionUtils.Console.print("\n실행결과");
  }
  afterPrint() {
    MissionUtils.Console.print("");
  }
  printRoundscore(car, random) {
    const scorePrint = [car.name, " : ", this.repeatPrint(random - 4)].join("");
    MissionUtils.Console.print(scorePrint);
  }
  repeatPrint(n) {
    const scorePrint = ["-"].map((a) => a.repeat(n)).join("");
    return scorePrint;
  }
  async printWinner(racingCars) {
    const scoreList = await racingCars.map((car) => car.score);
    const winners = await racingCars.filter(
      (cars) => cars.score === Math.max(...scoreList)
    );
    await MissionUtils.Console.print(
      "최종 우승자 : " + winners.map((car) => car.name).join(", ")
    );
  }
}

export default App;
