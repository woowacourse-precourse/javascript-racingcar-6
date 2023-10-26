import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await this.getCarNames();
    const playRounds = await this.getNumberOfRounds();
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = this.validateCarNames(input);
  }

  async getNumberOfRounds() {
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  }

  validateCarNames(input) {
    this.checkNameFormat(input);

    const carNames = input.split(',');

    if (carNames.includes('')) throw new Error('[ERROR] 자동차는 이름이 있어야 합니다.');
    carNames.forEach(this.checkNameLength);

    return carNames;
  }

  checkNameFormat(string) {
    if (!string.includes(',')) throw new Error('[ERROR] 이름 형식이 맞지 않습니다.');
  }

  checkNameLength(name) {
    if (name.length > 5) throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
  }
}

export default App;
