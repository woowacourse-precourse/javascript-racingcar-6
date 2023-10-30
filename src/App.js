import * as MissionUtils from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async inputName() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = userInput.split(",");
    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    return carNames;
  }
  async inputRaceRound() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return userInput;
  }

  async makeRacingCar(carNames) {
    const racingCars = [];
    carNames.map((name) => {
      const newCar = new Car(name);
      racingCars.push(newCar);
    });

    return racingCars;
  }

  async runRace(racingCars, racingRound) {
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < racingRound; i++) {
      racingCars.map((car) => {
        car.move();
        car.print();
      });
      MissionUtils.Console.print("");
    }
  }

  async play() {
    const carNames = await this.inputName();

    const racingRound = await this.inputRaceRound();

    const racingCars = await this.makeRacingCar(carNames);

    await this.runRace(racingCars, racingRound);
  }
}

export default App;
