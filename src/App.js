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
    this.tryNumber = Number(receivedTryNumber);
  }

  async play() {
    await this.getCarName();
    await this.getTryNumber();
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  isMovable(number) {
    return number >= 4;
  }
}

export default App;
