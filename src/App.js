import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.results = {}; // 각 자동차의 결과를 저장하는 객체
  }

  async play() {
    this.gameStart();
  }

  async gameStart() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const input = await Console.readLineAsync("");
    const carArr = input.split(",");
    Console.print(carArr);
    this.checkInputValidity(carArr);
  }

  checkInputValidity(carArr) {
    carArr.map((car) => {
      if (car.length > 5) {
        throw new Error("숫자가 잘못된 형식입니다. 5자 이하만 가능합니다.");
      }
    });
    this.inputTrialNum(carArr);
  }

  async inputTrialNum(carArr) {
    Console.print("시도할 횟수는 몇 회인가요?");
    const trialNum = await Console.readLineAsync("");

    if (Number(isNaN(trialNum))) {
      throw new Error("숫자가 아닙니다.");
    }

    this.racingCar(carArr, trialNum);
  }

  racingCar(carArr, trialNum) {
    for (let i = 0; i < trialNum; i++) {
      carArr.forEach((car) => {
        this.calcResult(car);
      });
      Console.print("");
      this.printResults();
    }
  }

  printResults() {
    for (const car in this.results) {
      Console.print(`${car} : ${this.results[car]}`);
    }
  }

  calcResult(car) {
    const condition = this.racingCondition();

    let carResult = this.results[car] || ""; // 자동차의 이전 결과 가져오기
    if (condition === "전진") {
      carResult += "-";
    }
    this.results[car] = carResult;
  }

  racingCondition() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) {
      return "전진";
    } else {
      return "정지";
    }
  }
}

export default App;
