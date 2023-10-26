import { Console } from "@woowacourse/mission-utils";
import racingCar from "./racingCar.js";

class App {
  async play() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.carNames = await this.getCarNamesInput();
    this.carNamesValidation();
    this.racingCars = [];
    this.buildRacingCar();
    this.repeatCount = await this.getRepeatCountInput();
    this.repeatCountValidation();
    this.repeatGame();
  }

  async getCarNamesInput() {
    const carNames = await Console.readLineAsync("");
    const splitCarNames = carNames.split(",");
    const carNamesRemoveWhitespace = splitCarNames.map((name) => name.trim());
    return carNamesRemoveWhitespace;
  }

  carNamesValidation() {
    this.carNames.forEach((name) => {
      const nameValidate = name.length > 5 || name === "";
      if (nameValidate) throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
    });
  }

  buildRacingCar() {
    for (let i = 0; i < this.carNames.length; i++) {
      const carName = this.carNames[i];
      const car = new racingCar(carName);
      this.racingCars.push(car);
    }
  }

  async getRepeatCountInput() {
    Console.print("시도할 횟수는 몇 회인가요?");
    return await Console.readLineAsync("");
  }

  repeatCountValidation() {
    const numberValidate = [...this.repeatCount].every((digit) => !isNaN(+digit));
    if (!numberValidate) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  repeatGame() {
    Console.print("");
    Console.print("실행 결과");
    for (let i = 0; i < this.repeatCount; i++) {
      this.repeatCarMove();
    }
  }
  repeatCarMove() {
    this.racingCars.forEach((car) => car.carMoveEvaluation());
    Console.print("");
  }
}

export default App;
