import { Random, Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );
    const roundsInputs = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );

    const carNames = carNamesInput.split(",");
    const rounds = Number(roundsInputs);

    const cars = carNames.map((name) => new Car(name));
  }
}

export default App;
