import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    try {
      const carNames = (await this.getCarNames()).split(",");
      carNames.forEach(this.validateCarName);

      const rounds = this.validateCount(await this.getRounds());

      const cars = carNames.map((name) => new Car(name));
      this.startRace(cars, rounds);

      this.displayWinners(cars);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async getCarNames() {
    return await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  async getRounds() {
    return await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  startRace(cars, rounds) {
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < rounds; i++) {
      cars.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
      });
      cars.forEach((car) => MissionUtils.Console.print(car.results()));
      MissionUtils.Console.print("\n");
    }
  }

  displayWinners(cars) {
    const WinCar = cars.reduce((prevCar, currCar) => {
      return prevCar.position > currCar.position ? prevCar : currCar;
    });
  
    const winners = cars
      .filter((car) => car.position === WinCar.position)
      .map((car) => car.name);
  
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
  

  validateCarName(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  validateCount(trialCount) {
    if (isNaN(Number(trialCount)) || trialCount <= 0) {
      throw new Error("[ERROR] 시도할 횟수는 양의 숫자여야 합니다.");
    }
    return Number(trialCount);
  }
}

export default App;
