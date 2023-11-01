import ConsoleView from "../view/ConsoleView";
import Racing from "../model/Racing";

class RacingcarController {
  constructor() {
    this.consoleView = new ConsoleView();
    this.racing = new Racing();
  }
  async racingStart() {
    const racingCarList = await this.consoleView.inputRacingcar();
    const inputNumber = await this.consoleView.inputRacingNum();
    const distanceList = Array.from({ length: racingCarList.length }, () => 0);

    for (let i = 0; i < inputNumber; i++) {
      racingCarList.forEach((carName, index) => {
        distanceList[index] = this.racing.moveRacingCar(distanceList, index);
        this.consoleView.outputRacingResult(carName, distanceList, index);
      });
    }
    this.consoleView.outputFinalWinner(
      this.racing.updateRacingWinner(racingCarList, distanceList),
    );
  }
}
export default RacingcarController;
