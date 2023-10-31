class App {
  async play() {
    const carNames = await this.getCarNameInput();
  }

  async getCarNameInput() {
    const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분, 5자 이하):");
    const carNames = carNamesInput.split(",");
    return carNames;
  }
}

export default App;