import RacingCarModel from './RacingCarModel.js';
import RacingCarView from './RacingCarView.js';

class App {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
  }

  async play() {
    const carNames = await this.view.getCarNamesInput();
    const roundsInput = await this.view.getRoundsInput();

    this.model.setCars(carNames);
    this.model.setRounds(roundsInput);
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

const racingCargame = new App();
racingCargame.play();