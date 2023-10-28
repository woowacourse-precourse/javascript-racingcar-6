import MESSAGE from "../constants/message";
import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import RacingCar from "../model/racingCar";

class AppController {
  constructor() {
    this.racingGame = new RacingCar();
  }

  async play() {
    const names = await InputView.readName();
    const number = await InputView.readNumber();

    OutputView.printMessage(MESSAGE.RESULT);
    this.runRace(names, number);

    this.selectWinner();
    const winner = this.racingGame.getWinner();
    OutputView.printMessage(winner);
  }

  runRace(names, number) {
    this.racingGame.setResult(names);
    const result = this.racingGame.getResult();

    for (let i = 0; i < number; i++) {
      this.racingGame.carMove();
      this.displayResult(result);
    }
  }

  displayResult(result) {
    result.forEach(([name, point]) => {
      OutputView.printMessage(`${name} : ${point}`);
    });
  }

  selectWinner() {
    const maxPoint = this.racingGame.getMaxPoint();
    this.racingGame.calWinner(maxPoint);
  }
}

export default AppController;
