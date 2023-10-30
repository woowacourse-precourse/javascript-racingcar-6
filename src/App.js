import { isNameLengthUnderFive } from "./utils/validation.js";
import inputHandler from "./utils/inputHandler.js";
import gameController from "./utils/gameController.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carArr = [];
    this.round = 0;
    this.carsWithMoveNum = {};
  }

  async play() {
    this.carArr = await inputHandler.getCarNamesAndCheck();
    this.carArr.forEach((car) => {
      isNameLengthUnderFive(car);
      this.carsWithMoveNum[car] = 0;
    });
    this.round = await inputHandler.getRoundAndCheck();
    gameController.playAllRounds(this.round, this.carArr, this.carsWithMoveNum);

    const winnersArr = gameController.selectWinner(
      this.carArr,
      this.carsWithMoveNum,
    );
    Console.print(`최종 우승자 : ${winnersArr.join(", ")}`);
  }
}

const app = new App();
app.play();

export default App;
