class App {
  async play() {
    const carNames = await this.getCarNameInput();

    if (!this.validateCarNames(carNames)) return;
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
}

export default App;