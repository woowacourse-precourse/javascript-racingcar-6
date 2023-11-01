import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
  async getCarName() {
    const carName = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carName.split(",");
  }
  async getTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(
      "시도할 회수는 몇회인가요?\n"
    );
    return tryCount;
  }
  makeCar(carName) {
    return carName.map((name) => ({ name, position: 0 }));
  }
  racing(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        const random = MissionUtils.Random.pickNumberInRange(0, 9);
        if (random >= 4) {
          car.position++;
        }
      });
      cars.forEach((car) => {
        MissionUtils.Console.print(`${car.name}: ${"-".repeat(car.position)}`);
      });
    }
  }
  printResult(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);
    const winnerNames = winners.map((winner) => winner.name).join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default App;
