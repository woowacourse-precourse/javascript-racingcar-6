import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.results = []; // 각 자동차의 결과를 저장하는 객체
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
    this.checkInputValidity(carArr);
  }

  checkInputValidity(carArr) {
    carArr.map((car) => {
      if (car.length > 5) {
        throw new Error(
          "[ERROR] 숫자가 잘못된 형식입니다. 5자 이하만 가능합니다."
        );
      }
    });
    this.inputTrialNum(carArr);
  }

  async inputTrialNum(carArr) {
    Console.print("시도할 횟수는 몇 회인가요?");
    const trialNum = await Console.readLineAsync("");

    if (Number(isNaN(trialNum))) {
      throw new Error("[ERROR] 숫자가 아닙니다.");
    }
    this.addObj(carArr);
    Console.print("");
    Console.print("실행 결과");
    this.racingCar(carArr, trialNum);
  }

  addObj(carArr) {
    carArr.forEach((car) => {
      this.results.push({ car, state: [] });
    });
  }

  racingCar(carArr, trialNum) {
    for (let i = 0; i < trialNum; i++) {
      carArr.forEach((car) => {
        this.calcResult(car);
      });

      this.printResults();
      Console.print("");
    }
    this.printWinner();
  }

  printWinner() {
    const winners = [];

    let maxDistance = -1;
    this.results.forEach((result) => {
      if (result.state.toString().length > maxDistance) {
        maxDistance = result.state.toString().length;
      }
    });

    this.results.forEach((result) => {
      if (result.state.toString().length === maxDistance) {
        winners.push(result.car);
      }
    });

    Console.print("최종 우승자: " + winners.join(", "));
  }

  printResults() {
    this.results.forEach((result) => {
      const movements = result.state.join("");
      Console.print(`${result.car} : ${movements}`);
    });
  }

  calcResult(car) {
    const condition = this.racingCondition();

    const addState = condition === "전진" ? "-" : "";

    const carName = this.results.find((result) => result.car === car);
    carName.state.push(addState);
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
