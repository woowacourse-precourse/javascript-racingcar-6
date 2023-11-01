import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    const cars = await this.getCars();
    const rounds = await this.getRounds();
    const racingGame = await this.racingRounds(cars, rounds);
    await this.printWinner(racingGame);
  }

  async racingRounds(cars, rounds) {
    const roundsCars = [...cars];
    Array.from({ length: rounds }).map(async () => {
      await this.randomNumberRoundForwards(roundsCars);
      await this.afterPrint();
    });
    return roundsCars;
  }

  async getCars() {
    const carsInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return this.carsCheck(carsInput);
  }

  carsCheck(carsInput) {
    const cars = carsInput.split(",").map((car) => {
      if (car.length > 5) throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      return { name: car, score: 0 };
    });
    return cars;
  }
  async getRounds() {
    const NUMBER_CHECK = /[0-9]$/g;
    const roundsInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (!NUMBER_CHECK.test(roundsInput))
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");

    await this.beforePrint();
    return roundsInput;
  }
  randomNumberRoundForwards(cars) {
    const forwardCars = cars.map((car) => {
      const random = MissionUtils.Random.pickNumberInRange(0, 9);
      if (random > 3) {
        const forward = random - 3;
        car.score = car.score + forward;
        this.printRoundscore(car, forward);
      }
      return car;
    });
    return forwardCars;
  }
  async beforePrint() {
    await MissionUtils.Console.print("\n실행결과");
  }
  async afterPrint() {
    await MissionUtils.Console.print("");
  }
  printRoundscore(car, forward) {
    const scorePrint = `${car.name} : ${this.repeatPrint("-", forward)}`;
    MissionUtils.Console.print(scorePrint);
  }
  repeatPrint(keyword, n) {
    return keyword.repeat(n);
  }
  async printWinner(racingCars) {
    if (!racingCars.length) return;
    const scoreList = racingCars.map((car) => car.score);
    const winners = racingCars.filter(
      (cars) => cars.score === Math.max(...scoreList)
    );
    await MissionUtils.Console.print(
      "최종 우승자 : " + winners.map((car) => car.name).join(", ")
    );
  }
}

export default App;
