import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    let carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
    );
    let carArray = carNameInput.split(",");
    Console.print("\n실행 결과");
    carArray.map((name, i) => {
      let car = new Car(name);
      Console.print(`${car.name} : ${car.drive()}`);
    });
  }
}

export default App;
