import { MissionUtils } from "@woowacourse/mission-utils";

class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    // 무작위로 0에서 9까지의 숫자를 선택하여 4 이상이면 전진
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.position++;
    }
  }
}

class RacingGame {
  constructor() {
    this.cars = [];
    this.numberOfTries = 0;
  }

  async getCarNamesFromUser() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분): ");
    const names = carNames.split(",");

    for (const name of names) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }

    return names.join(",");
  }

  async getNumberOfTriesFromUser() {
    const numberOfTries = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? ");

    if (!numberOfTries || isNaN(numberOfTries)) {
      throw new Error("[ERROR] 올바른 횟수를 입력하세요.");
    }
    
    return parseInt(numberOfTries, 10);
  }

  initialize(carNames, numberOfTries) {
    // 게임 초기화: 자동차 이름과 시도 횟수 설정
    this.cars = carNames.split(",").map((name) => new RacingCar(name));
    this.numberOfTries = numberOfTries;
  }

  moveCars() {
    // 자동차들을 움직임
    for (const car of this.cars) {
      car.move();
    }
  }

  async printRaceResult() {
    // 경주 결과 출력
    await MissionUtils.Console.print("실행 결과\n");
    for (const car of this.cars) {
      const positionText = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionText}\n`);
    }
    await MissionUtils.Console.print("\n");
  }

  async playGame() {
    // 게임 실행: 시도 횟수만큼 자동차를 움직이고 결과 출력
    for (let i = 0; i < this.numberOfTries; i++) {
      this.moveCars();
      await this.printRaceResult();
    }
  }
  getWinners() {
    // 가장 멀리 간 자동차를 우승자로 반환
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars.filter((car) => car.position === maxPosition);
    return winners.map((winner) => winner.name).join(", ");
  }
}

class App {
  async play() {
    const game = new RacingGame();
    const carNames = await game.getCarNamesFromUser();
    const numberOfTries = await game.getNumberOfTriesFromUser();
    
    game.initialize(carNames, numberOfTries);
    await game.playGame();
    
    // 최종 우승자 출력
    await MissionUtils.Console.print("최종 우승자: " + game.getWinners());
  }
}

export default App;
