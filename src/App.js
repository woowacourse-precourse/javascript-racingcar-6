class App {
  participant = [];
  count = [];

  async participate() {
    const carNameInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    const carList = carNameInput.split(",");

    // TODO 자동차 이름의 길이 예외처리

    this.participant = carList;
    this.count = Array(this.participant.length).fill(0);
  }

  async play() {
    await this.participate();
  }
}

export default App;
