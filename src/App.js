import RacingCarModel from './RacingCarModel.js';
import RacingCarView from './RacingCarView.js';

class App {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
  }

  async play() {
    const CARNAMES = await this.view.getCarNamesInput();
    const ROUNDINPUT = await this.view.getRoundsInput();

    this.model.setCars(CARNAMES);
    this.model.setRounds(ROUNDINPUT);
    this.model.validateCarNames();

    for (let i = 0; i < this.model.rounds; i++) {
      this.model.playRound();
      const roundResult = this.model.getRoundResult();
      this.view.printRoundResult(roundResult);
    }

    const winners = this.model.getWinners();
    this.view.printWinners(winners);
  }
}

export default App;

const racingCarGame = new App();
racingCarGame.play();