import MESSAGE from "../constants/message";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";
import RacingCar from "../model/racingCar";

class AppController {
  constructor() {
    this.racingCar = new RacingCar();
  }

  async play() {
    const names = await InputView.readName();
    const number = await InputView.readNumber();

    OutputView.printMessage(MESSAGE.RESULT);
    this.runRace(names, number);

    this.selectWinner();
    const winner = this.racingCar.getWinner();
    OutputView.printMessage(winner);
  }

  runRace(names, number) {
    this.racingCar.setResult(names);
    const result = this.racingCar.getResult();

    for (let i = 0; i < number; i++) {
      this.racingCar.carMove();
      this.displayResult(result);
    }
  }

  displayResult(result) {
    result.forEach((car) => {
      OutputView.printMessage(`${car.name} : ${car.point}`);
    });
  }

  selectWinner() {
    const maxPoint = this.racingCar.getMaxPoint();
    this.racingCar.calWinner(maxPoint);
  }
}

export default AppController;
