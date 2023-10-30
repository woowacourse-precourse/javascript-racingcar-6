import MESSAGE from "../constants/message";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";
import RacingApp from "../model/RacingApp";

class AppController {
  constructor() {
    this.racingApp = new RacingApp();
  }

  async play() {
    const names = await InputView.readName();
    const number = await InputView.readNumber();

    OutputView.printMessage(MESSAGE.RESULT);
    this.startRace(names, number);

    const maxCount = this.racingApp.getMaxCount();
    const winner = this.racingApp.getWinner(maxCount);
    OutputView.printMessage(`${MESSAGE.WINNER} : ${winner.join(", ")}`);
  }

  startRace(names, number) {
    this.racingApp.setCars(names);
    const cars = this.racingApp.getCars();

    for (let i = 0; i < number; i++) {
      this.racingApp.carMove();
      this.displayResult(cars);
    }
  }

  displayResult(cars) {
    cars.forEach((car) => {
      const { name } = car;
      const count = MESSAGE.MOVE_SYMBOL.repeat(car.moveCount);
      OutputView.printMessage(`${name} : ${count}`);
    });
  }
}

export default AppController;
