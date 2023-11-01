import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    let carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
    );
    let tryNumberInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    let carNameArray = carNameInput.split(",");
    let cars = carNameArray.map((name) => new Car(name));

    for (let i = 0; i < tryNumberInput; i++) {
      Console.print("\n실행 결과");
      cars.map((car) => {
        let count = car.drive();
        Console.print(`${car.name} : ${"-".repeat(count)}`);
      });
    }
  }
}

export default App;
