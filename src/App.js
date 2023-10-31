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
    const overlapCarNames = new Set(carNames);

    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length === 0 || carNames[i].length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하이어야 합니다."
        );
      }
    }

    if (overlapCarNames.length != carNames.length) {
      // 중복된 이름을 뺀 배열 overlapCarNames와
      // 입력을 통해 만들어진 carNames 배열의 길이를 비교해 다르면 중복 예외 처리
      throw new Error("[ERROR] 중복된 이름은 허용되지 않습니다.");
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

  getCarNames() {
    // 자동차 이름 입력 받기
    const input = MissionUtils.Console.readLineAsync(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분"
    );
    this.validateCarNames(carNames);
    this.carNames = input.split(",");
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
    let maxPosition = 0;
    for (let i = 0; i < this.cars.length; i++) {
      // 특정 차 전진 거리가 최대 전진 거리보다 많으면 maxPosition 값 교체
      if (this.cars[i].distance > maxPosition) {
        maxPosition = this.cars[i].distance;
      }
    }

    let winners = [];
    for (let i = 0; i < this.cars.length; i++) {
      // 최대전진거리와 같으면 winners 배열에 추가
      if (this.cars[i].distance === maxPosition) {
        winners.push(this.cars[i].name);
      }
    }

    return winners;
  }

  winner() {
    // 최종 우승자 출력 함수
    const winner = this.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winner.join(",")}`);
  }
}

export default App;
