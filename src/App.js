import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  constructor() {
    this.cars = [];
    this.number = 0;
  }
  async inputCars() {
    MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const input = await MissionUtils.Console.readLineAsync("");
    const splitInputs = input.split(",");
    splitInputs.map((car) => {
      if (car.length <= 5) this.cars.push(new Car(car, 0));
      else throw new Error("[ERROR] 이름이 5자리 이상입니다.");
    });
  }
  async inputNumber() {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const input = await MissionUtils.Console.readLineAsync("");
    if (/\d/.test(input) && input > 0) this.number = parseInt(input);
    else throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  racingGame() {
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < this.number; i++) {
      this.cars.map((car) => {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          car.go();
        }
        MissionUtils.Console.print(
          `${car.getName()} : ${"-".repeat(car.getDistance())}`
        );
      });
      MissionUtils.Console.print("");
    }
  }
  checkWinner() {
    const winners = [];
    let highScore = 0;
    this.cars.map((car) => {
      if (car.getDistance() > highScore) highScore = car.getDistance();
    });
    this.cars.map((car) => {
      if (car.getDistance() === highScore) winners.push(car.getName());
    });
    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }
  async play() {
    try {
      await this.inputCars();
      await this.inputNumber();
      this.racingGame();
      this.checkWinner();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
