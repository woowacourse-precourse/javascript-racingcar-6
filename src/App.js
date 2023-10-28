import { Console } from "@woowacourse/mission-utils";
import Car from "./Model/Car.js";
import Message from "./util/Message.js";
import InputValidator from "./util/InputValidator.js";
import GenerateStepStr from "./util/GenerateStep.js";

class App {
  constructor() {
    this.executeCount = 0;
    this.cars = [];
    this.maxStep = 0;
  }

  async play() {
    const carNamesArr = await this.getValidCarNames(); // 자동차 이름 묻기
    this.createCars(carNamesArr); // 자동차 생성하기
    await this.getValidExecuteCount(); // 실행횟수 묻기
    this.execute(); // 실행 결과 출력하기
  }

  async getValidCarNames() {
    const input = await Console.readLineAsync(Message.INFO.ASK_CAR_NAMES);
    return InputValidator.CarNames(input);
  }

  createCars(carNamesArr) {
    this.cars = carNamesArr.map((carName) => new Car(carName));
  }

  async getValidExecuteCount() {
    const input = await Console.readLineAsync(Message.INFO.ASK_EXECUTE_COUNT);
    this.executeCount = InputValidator.executeCount(input);
  }

  execute() {
    Console.print(Message.INFO.SHOW_EXECUTE_RESULT);
    for (let round = 0; round < this.executeCount; round += 1) {
      this.executeOneRound(round);
    }
  }

  executeOneRound(roundNum) {
    for (let index = 0; index < this.cars.length; index += 1) {
      const currentCar = this.cars[index];
      currentCar.decideGoOrStop(); // 해당 라운드 전진 혹은 정지 결정하기
      const step = currentCar.getStep(); // 현재까지 최종 step 구하기
      Console.print(`${currentCar.name} : ${GenerateStepStr(step)}`); // 현재까지 상태 출력하기
      // 마지막 라운드일때 각 차량의 최종step수와 비교를 통해 1등의 step수 구하기
      if (roundNum === this.executeCount - 1) {
        this.maxStep = Math.max(this.maxStep, currentCar.getStep());
      }
    }
  }
}

export default App;
