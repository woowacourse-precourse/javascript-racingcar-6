import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    let carArray = carNames.split(",");

    carArray = carArray.map((carName) => new Car(carName));

    const roundNum = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    MissionUtils.Console.print(`\n실행 결과`);
    for (let i = 0; i < roundNum; i += 1) {
      carArray.forEach((car) => {
        let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          car.distance += 1;
        }
        const hyphen = "-".repeat(car.distance);
        MissionUtils.Console.print(`${car.name} : ${hyphen}`);
      });
      MissionUtils.Console.print(``);
    }
  }
}

export default App;
