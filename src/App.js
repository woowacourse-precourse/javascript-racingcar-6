import { Console } from "@woowacourse/mission-utils";
import Input from "./Input.js";
import Car from "./Car.js";

class App {
  async initGame() {
    const input = new Input();
    // CarName 입력 -> Car 배열 생성
    const carNames = await input.inputCarName();
    const cars = [];
    carNames.forEach((carName) => cars.push(new Car(carName)));
    // 시도 횟수 입력
    const tryNum = await input.inputTryNum();

    this.roundStart(cars, tryNum);
  }

  roundStart(cars, tryNum) {
    let round = 1;
    Console.print("실행 결과");
    while (round++ <= tryNum) {
      this.gameRound(cars);
    }
  }

  gameRound(cars) {
    cars.forEach((car) => {
      car.move();
      Console.print(car + "");
    });
    Console.print("\n");
  }

  async gameFinished() {}

  async play() {
    await this.initGame();
  }
}

export default App;

const a = new App();
a.play();
