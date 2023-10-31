class App {
  async play() {
    const carNames = await this.getCarNameInput();

    if (!this.validateCarNames(carNames)) return;

    const attemptCount = await this.getAttemptCount();

    if (!this.validateAttemptCount(attemptCount)) return;

    const carStatus = new Array(carNames.length).fill(0);
    await MissionUtils.Console.print("\n실행 결과:");

    for (let i = 0; i < attemptCount; i++) {
      this.simulateCarRace(carNames, carStatus);
      await MissionUtils.Console.print();
    }

    this.showWinners(carNames, carStatus);
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

  updateCarStatus(carStatus, index) {
    const randomNumber = this.generateRandomNumber();
    if (randomNumber >= 4) {
      carStatus[index]++;
    }
  }

  showCarPosition(carStatus) {
    return '-'.repeat(carStatus);
  }

  showRaceProgress(carName, carPosition) {
    MissionUtils.Console.print(`${carName} : ${carPosition}`);
  }

  simulateCarRace(carNames, carStatus) {
    for (let index = 0; index < carNames.length; index++) {
      this.updateCarStatus(carStatus, index);
      const carPosition = this.showCarPosition(carStatus[index]);
      this.showRaceProgress(carNames[index], carPosition);
    }
  }

  showWinners(carNames, carStatus) {
    const firstPosition = Math.max(...carStatus);
    const winners = carNames.filter((car, index) => carStatus[index] === firstPosition);
    MissionUtils.Console.print(`\n최종 우승자: ${winners.join(", ")}`);
    return winners;
  }
}

export default App;