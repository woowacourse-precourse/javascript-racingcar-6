import Model from "./Model.js";
import View from "./View.js";

class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }
  makePlayerObject() {
    let playersArray = new Array();
    for (let i = 0; i < this.model.players.length; i++) {
      let player = new Object();
      player.name = this.model.players[i];
      player.score = 0;
      playersArray.push(player);
    }
    this.model.setPlayerObject(playersArray);
  }
  validateCarName() {
    const carNameArray = this.model.getPlayerObject();
    for (let i = 0; i < carNameArray.length; i++) {
      if (carNameArray[i].length > 6) {
        throw new Error("[ERROR]");
      }
    }
  }
  validateTryNumber(tryNumber) {
    if (isNaN(tryNumber)) {
      throw new Error("[ERROR]");
    }
  }

  checkGoOrStop(randomNumber) {
    if (4 <= randomNumber) {
      return 1;
    } else {
      return 0;
    }
  }
  processGame() {
    const players = this.model.getPlayerObject();
    for (let i = 0; i < players.length; i++) {
      let randomNumber = this.view.makeRandomNumber();
      players[i].score += this.checkGoOrStop(randomNumber);
    }
    this.model.setPlayerObject(players);
    this.view.printCaseResult(this.model.getPlayerObject());
  }
  async play() {
    try {
      const inputCarNames = await this.view.input(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      this.model.processSeparatorOfCarName(inputCarNames);
      this.validateCarName();
      let inputTryNumber = Number(
        await this.view.input("시도할 횟수는 몇 회인가요?\n")
      );
      this.validateTryNumber(inputTryNumber);
      this.model.setTryNumber(inputTryNumber);
      this.model.initPlayerObject();
      for (let i = 0; i < this.model.getTryNumber(); i++) {
        this.processGame();
      }

      const winners = this.model.getWinner();
      this.view.printResult(winners);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
