import { Console, Random } from "@woowacourse/mission-utils";

class App {
  carNames = [];
  tryNumber = 0;
  racingCounts = {};

  async getCarName() {
    const receivedCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = receivedCarNames.split(",");
    this.carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR]: 자동차 이름은 5자 이하로 입력해주세요");
      }
      this.racingCounts[carName] = 0;
    });
  }

  async getTryNumber() {
    const receivedTryNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    //TODO 숫자가 아니거나 0 미만의 숫자를 입력했을 때 에러 반환
    this.tryNumber = Number(receivedTryNumber);
  }

  async play() {
    await this.getCarName();
    await this.getTryNumber();
    Console.print("실행 결과");

    while (this.tryNumber > 0) {
      Object.keys(this.racingCounts).forEach((key) => {
        if (this.isMovable(this.getRandomNumber())) {
          this.racingCounts[key] = this.racingCounts[key] + 1;
        }
      });
      Object.keys(this.racingCounts).forEach((key) => {
        Console.print(`${key} : ${"-".repeat(this.racingCounts[key])}`);
      });
      Console.print("");
      this.tryNumber = this.tryNumber - 1;
    }

    const { winner } = Object.entries(this.racingCounts).reduce(
      ({ winner, maxRacingCount }, [key, value]) => {
        if (maxRacingCount < value) {
          return { winner: [key], maxRacingCount: value };
        } else if (maxRacingCount === value) {
          return { winner: [...winner, key], maxRacingCount };
        } else {
          return { winner, maxRacingCount };
        }
      },
      { winner: [], maxRacingCount: -1 }
    );

    Console.print(`최종 우승자: ${winner.join(", ")}`);
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  isMovable(number) {
    return number >= 4;
  }
}

export default App;
