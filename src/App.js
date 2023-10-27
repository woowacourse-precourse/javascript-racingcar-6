import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    MissionUtils.Console.print(
      "경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.CAR_NAMES = [];
  }
  // 자동차 이름 입력
  addCar(names) {
    const carNames = names.split(",");
    for (const carName of carNames) {
      if (carName.trim().length > 5) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      this.CAR_NAMES.push({ name: carName, position: 0 });
    }
  }
  //자동차 경주 시작
  async play() {
    const carNames = await this.inputCarNames();
    this.addCar(carNames);
    const TRY_COUNT = await this.inputNumber();
    // 자동차 전진
    for (let i = 0; i < TRY_COUNT; i++) {
      this.CAR_NAMES.forEach((car) => this.MOVE_CAR(car));
    }
    this.printRoundResults();
    this.printWinner();
  }
  // 중간 결과 출력창
  printRoundResults() {
    let result = "";
    for (const car of this.CAR_NAMES) {
      const carName = car.name;
      const dashes = "-".repeat(car.position);
      result += `${carName} : ${dashes}\n`;
    }
    MissionUtils.Console.print(result);
  }
  // 전진하는 조건
  MOVE_CAR(car) {
    const randomNumbers = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumbers >= 4) {
      car.position++;
    }
  }

  // 시도할 횟수
  async inputNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    return parseInt(input);
  }

  // 자동차 이름 입력
  async inputCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    return input;
  }
}

const app = new App();
app.play();

export default App;
