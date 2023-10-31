import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = [];
  }
  async play() {
    const nameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.cars = nameInput.split(",").map((name) => ({ name, position: 0 }));
    const tryCount = await Console.readLineAsync("시도할 회수는 몇회인가요?\n");
    Console.print("\n실행 결과");
    for (let i = 0; i < tryCount; i++) {
      this.randomMove();
      this.printResult();
      Console.print("");
    }
    const winnerNames = this.getWinners().map((car) => car.name);
    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
  }
  printResult() {
    // 게임 결과를 출력하는 메서드
    this.cars.forEach((car) => {
      Console.print(`${car.name}: ${"-".repeat(car.position)}`);
    });
  }
  randomMove() {
    this.cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        // 랜덤 숫자가 4 이상일 경우 전진
        car.position += 1;
      }
    });
  }
  getWinners() {
    // 최종 우승자 return하는 메서드
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars.filter((car) => car.position === maxPosition);
  }
}

export default App;
