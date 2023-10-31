import { Console } from "@woowacourse/mission-utils";
import Car from "./Model/Car.js";
import Message from "./util/Message.js";
import InputValidator from "./util/InputValidator.js";
import Constant from "./util/Constant.js";

class App {
  constructor() {
    this.executionCount = 0;
    this.cars = [];
  }

  async play() {
    const carNamesArr = await this.getValidCarNames(); // 자동차 이름 묻기
    this.createCars(carNamesArr); // 자동차 생성하기
    await this.getValidExecutionCount(); // 실행횟수 묻기
    this.execute(); // 실행 결과 출력하기
    this.getWinner(); // 우승자 출력
  }

  async getValidCarNames() {
    const input = await Console.readLineAsync(Message.INFO.ASK_CAR_NAMES);
    return InputValidator.CarNames(input);
  }

  createCars(carNamesArr) {
    this.cars = carNamesArr.map((carName) => new Car(carName));
  }

  async getValidExecutionCount() {
    const input = await Console.readLineAsync(Message.INFO.ASK_EXECUTE_COUNT);
    this.executionCount = InputValidator.executionCount(input);
  }

  execute() {
    Console.print(Message.INFO.SHOW_EXECUTE_RESULT);
    for (let count = 0; count < this.executionCount; count += 1) {
      this.executeOneRound(count);
      Console.print("\n");
    }
  }

  executeOneRound(roundNum) {
    for (let index = 0; index < this.cars.length; index += 1) {
      const currentCar = this.cars[index];
      currentCar.decideGoOrStop(); // 해당 라운드 전진 혹은 정지 결정하기
      const step = currentCar.stepCount; // 현재까지 최종 step 구하기
      Console.print(`${currentCar.name} : ${Constant.ONE_STEP.repeat(step)}`); // 현재까지 상태 출력하기
    }
  }

  getWinner() {
    let maxStep = -1;
    let winners = [];

    for (let i = 0; i < this.cars.length; i += 1) {
      const car = this.cars[i];
      if (car.stepCount > maxStep) {
        maxStep = car.stepCount;
        winners = [car.name];
      } else if (car.stepCount === maxStep) {
        winners.push(car.name);
      }
    }
    Console.print(`${Message.INFO.FINAL_WINNER}${winners.join(", ")}`);
  }
}

export default App;
