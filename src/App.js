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
    let rank = {};

    Console.print("\n실행 결과");
    for (let i = 0; i < tryNumberInput; i++) {
      cars.map((car) => {
        let count = car.drive();
        Console.print(`${car.name} : ${"-".repeat(count)}`);
        rank[car.name] = count;
      });
      Console.print("");
    }

    let max = Math.max(...Object.values(rank));
    let winners = Object.keys(rank).filter((key) => rank[key] === max);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
