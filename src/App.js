import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carsStatus = [];
    this.tryNum = 0;
  }

  move_cars() {
    this.carsStatus = this.carsStatus.map((carStatus) => ({
      ...carStatus,
      move:
        Random.pickNumberInRange(0, 9) >= 4
          ? carStatus.move + 1
          : carStatus.move,
    }));
  }

  print_cars() {
    this.carsStatus.forEach((carStatus) => {
      Console.print(`${carStatus.name} : ${"-".padEnd(carStatus.move, "-")}`);
    });
    Console.print("");
  }

  validate_carNames(carsStatus) {
    if (carsStatus === undefined) {
      throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
    }
    carsStatus
      .split(",")
      .map((car) => car.trim())
      .forEach((car) => {
        if (car.length > 5) {
          throw new Error("[ERROR] 자동차 이름의 길이가 5 초과 입니다.");
        } else if (car.includes(" ")) {
          throw new Error("[ERROR] 자동차 이름에 빈 칸이 있습니다.");
        }
      });
  }

  validate_tryNumber(tryNum) {
    if (Number.isInteger(tryNum)) {
      throw new Error("[ERROR] 정수로 된 숫자를 입력해주세요.");
    } else if (tryNum <= 0) {
      throw new Error("[ERROR] 양수를 입력해주세요.");
    }
  }

  maxMove() {
    return Math.max(...this.carsStatus.map((carStatus) => carStatus.move));
  }

  winner() {
    const maxMove = this.maxMove();
    return this.carsStatus
      .filter((carStatus) => carStatus.move === maxMove)
      .map((carStatus) => carStatus.name);
  }

  async carsStatus_check() {
    const carsStatus = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.validate_carNames(carsStatus);

    this.carsStatus = carsStatus
      .split(",")
      .map((name) => ({ name: name.trim(), move: 0 }));
  }

  async tryNum_check() {
    const tryNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.validate_tryNumber(tryNum);

    this.tryNum = tryNum;
  }

  async play() {
    await this.carsStatus_check();
    await this.tryNum_check();
    Console.print("실행 결과");

    for (let i = 0; i < this.tryNum; i += 1) {
      this.move_cars();
      this.print_cars();
    }
    Console.print(`최종 우승자 : ${this.winner().join(", ")}`.trim());
  }
}

export default App;
