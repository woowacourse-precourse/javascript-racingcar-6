class App {
  async play() {
    const carNames = await this.getCarNameInput();

    if (!this.validateCarNames(carNames)) return;

    const attemptCount = await this.getAttemptCount();

    if (!this.validateAttemptCount(attemptCount)) return;
  }

  async getCarNameInput() {
    const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분, 5자 이하):");
    const carNames = carNamesInput.split(",");
    return carNames;
  }

  validateCarNames(carNames) {
    if (carNames.some(name => name.length > 5)) {
      MissionUtils.Console.readLineAsync("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
    return true;
  }

  async getAttemptCount() {
    const attemptCountInput = await MissionUtils.Console.readLineAsync("시도할 횟수를 입력하세요:");
    const attemptCount = parseInt(attemptCountInput);
    return attemptCount;
  }

  validateAttemptCount(attemptCount) {
    if (isNaN(attemptCount) || attemptCount <= 0) {
      MissionUtils.Console.readLineAsync("[ERROR] 올바른 시도 횟수를 입력하세요.");
    }
    return true;
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default App;