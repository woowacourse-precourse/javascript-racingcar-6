import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
  async play() {
    const names = await this.getCarNames();
    const count = await this.getPlayCount();
    const nameToNumberMap = Object.fromEntries(names.map((name) => [name, 0]));

    Console.print("\n실행 결과");
    for (let i = 0; i < count; i++) {
      this.playRound(nameToNumberMap);
    }

    this.printResults(nameToNumberMap);
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carNamesInput.split(",").map((item) => item.trim());

    this.validateCarNames(carNames);

    return carNames;
  }

  async getPlayCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const count = parseInt(input, 10);

    this.validatePlayCount(count);

    return count;
  }

  validateCarNames(carNames) {
    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 이름은 5글자 이하로만 입력할 수 있습니다.");
    }
  }

  validatePlayCount(count) {
    if (isNaN(count)) {
      throw new Error("[ERROR] 값이 잘 못 입력되었습니다.");
    }
  }

  playRound(nameToNumberMap) {
    for (const [name, number] of Object.entries(nameToNumberMap)) {
      const randomNumber = this.randomIndex();
      const updatedNumber = number + randomNumber;
      const dashes = "-".repeat(updatedNumber);
      Console.print(`${name} : ${dashes} `);
    }
    Console.print("\n");
  }

  printResults(nameToNumberMap) {
    const winners = this.findWinners(nameToNumberMap);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  randomIndex() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4 ? 1 : 0;
  }

  findWinners(nameToNumberMap) {
    const highestScore = Math.max(...Object.values(nameToNumberMap));
    const winners = Object.keys(nameToNumberMap).filter(
      (name) => nameToNumberMap[name] == highestScore
    );

    return winners;
  }
}

export default App;
