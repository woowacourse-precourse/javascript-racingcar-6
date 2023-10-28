import { MissionUtils } from "@woowacourse/mission-utils";
import { messages } from "./Message.js";
import { checkCarNameLength, checkCountType } from "./Validation.js";
import Car from "./Car.js";

class App {
  constructor() {}

  /**
   * 경주할 자동차 이름을 입력받아 쉼표 단위로 구분하여 반환
   * @returns 자동차 이름을 담은 배열
   */
  async getInputCarNames() {
    const inputTmp = await MissionUtils.Console.readLineAsync(
      messages.INPUT_CARNAMES
    );
    const carNames = inputTmp.split(",");
    //예외처리
    checkCarNameLength(carNames);
    return carNames;
  }

  /**
   * 게임 시도 횟수를 입력받아 반환
   * @returns 게임 시도 횟수
   */
  async getInputCount() {
    const count = await MissionUtils.Console.readLineAsync(
      messages.INPUT_COUNT
    );
    //예외처리
    checkCountType(count);
    return count;
  }

  /**
   * 0 ~ 9의 임의의 수를 생성하여 4이상인 경우 true, 그렇지 않은 경우 false 반환
   * @returns boolean
   */
  getRandomNumber() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);
    const result = random >= 4 ? true : false;
    return result;
  }

  /**
   * 게임 진행 결과 출력
   * @param {*} cars 자동차 객체 배열
   */
  printCarPositions(cars) {
    cars.forEach((car) => car.print());
    MissionUtils.Console.print("\n");
  }

  /**
   * 우승자 확인
   * @param {*} cars 자동차 객체 배열
   * @returns 우승자
   */
  checkWinner(cars) {
    const tmpPositions = cars.map((car) => car.position);
    const maxPosition = Math.max(...tmpPositions);
    const winners = cars.filter((car) => car.position === maxPosition);
    return winners.map((winner) => winner.name);
  }

  async play() {
    const carNames = await this.getInputCarNames();
    const cars = [];
    carNames.forEach((carName) => {
      cars.push(new Car(carName));
    });
    const count = await this.getInputCount();

    MissionUtils.Console.print(messages.PRINT_RESULT);
    for (let i = 0; i < parseInt(count); i++) {
      cars.forEach((car, index) => {
        if (this.getRandomNumber()) car.forward();
      });
      this.printCarPositions(cars);
    }

    const winners = this.checkWinner(cars);
    MissionUtils.Console.print(messages.PRINT_WINNER + winners.join(", "));
  }
}

export default App;
