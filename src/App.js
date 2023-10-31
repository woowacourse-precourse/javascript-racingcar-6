import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await this.getCarName();
    const attempts = await this.getNumOfAttepmts();

    const cars = carNames.split(",").map((name) => ({ name, position: 0 }));

    for (let i = 0; i < attempts; i++) {
      this.performRace(cars);
      this.printCurrentStatus(cars);
    }

    const winners = this.getWinner(cars);
    this.printWinner(winners);
  }

  async getCarName() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차의 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    if (!carNames) {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    }
    const names = carNames.split("");
    for (const name of names) {
      if (name.length === 0 || name.length >= 6) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      }
    }
    return carNames;
  }

  async getNumOfAttepmts() {
    const numOfAttempts = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const attempts = parseInt(numOfAttempts);
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 올바른 시도 횟수를 입력해주세요.");
    }

    return attempts;
  }

  performRace(cars) {
    cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.position++;
      }
    });
  }

  printCurrentStatus(cars) {
    cars.forEach((car) => {
      const positionOfCar = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionOfCar}`);
    });
  }

  getWinner(cars) {
    const finalPosition = Math.max(...cars.map((car) => car.position));
    return cars
      .filter((car) => car.position === finalPosition)
      .map((car) => car.name);
  }

  printWinner(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(",")}`);
  }
}

export default App;
