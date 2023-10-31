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

    OutputView.printMessage(MESSAGE.result);
    this.startRace(names, number);

    const maxCount = this.racingApp.getMaxCount();
    const winner = this.racingApp.getWinner(maxCount);
    OutputView.printMessage(`${MESSAGE.winner} : ${winner.join(", ")}`);
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
      const name = car.getName();
      const count = MESSAGE.moveSymbol.repeat(car.getMoveCount());
      OutputView.printMessage(`${name} : ${count}`);
    });
  }
}

export default AppController;
