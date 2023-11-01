import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move(randomGoNum) {
    if (randomGoNum >= 4) {
      this.distance++;
    }
  }

  getDistance() {
    return "-".repeat(this.distance);
  }
}

class App {
  constructor() {
    this.cars = [];
    this.numberOfAttempts = 0;
  }

  validateCarNames(carNames) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length === 0 || carNames[i].length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하이어야 합니다."
        );
      }
    }
  }

  async play() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분\n"
    );
    const carNames = input.split(","); // 배열로 변환
    this.validateCarNames(carNames);
    this.cars = carNames.map((name) => new Car(name));

    this.numberOfAttempts = Number(
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    if (isNaN(this.numberOfAttempts) || this.numberOfAttempts <= 0) {
      throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
    }

    MissionUtils.Console.print("\n실행결과");
    // 시도횟수만큼 돌려서 "-"를 통해 차 전진하는 for문
    for (let i = 0; i < this.numberOfAttempts; i++) {
      this.moveCars();
      this.moveCarsResult();
    }

    this.winner();
  }

  moveCars() {
    // 0에서 9사이 랜덤숫자를 생성해 자동차 이동하는 함수
    for (let i = 0; i < this.cars.length; i++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      this.cars[i].move(randomNumber);
    }
  }

  moveCarsResult() {
    // 차 이동 결과 함수
    for (let i = 0; i < this.cars.length; i++) {
      const car = this.cars[i];
      MissionUtils.Console.print(`${car.name} : ${car.getDistance()}`);
    }
  }

  getWinners() {
    let maxDistance = 0;
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].distance > maxDistance) {
        maxDistance = this.cars[i].distance;
      }
    }

    let winner = [];
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].distance === maxDistance) {
        winner.push(this.cars[i].name);
      }
    }

    return winner;
  }

  winner() {
    // 최종 우승자 출력 함수
    const winner = this.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winner.join(",")}`);
  }
}

export default App;
