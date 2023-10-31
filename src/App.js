import { isNameLengthUnderFive } from "./utils/validation.js";
import { Console } from "@woowacourse/mission-utils";
import { getCarNamesAndCheck, getRoundAndCheck } from "./utils/inputHandler.js";
import GameController from "./utils/GameController.js";
import { GAME_MESSAGE } from "./constants/message.js";

class App {
  constructor() {
    this.carArr = [];
    this.round = 0;
  }

  async play() {
    const gameController = new GameController();

    this.carArr = await getCarNamesAndCheck();
    this.carArr.forEach((car) => {
      isNameLengthUnderFive(car);
    });
    gameController.makeCarsObjWithNum(this.carArr);

    this.round = await getRoundAndCheck();
    gameController.playAllRounds(this.round, this.carArr);

    const winnersArr = gameController.selectWinner(this.carArr);
    Console.print(GAME_MESSAGE.PRINT_WINNER(`${winnersArr.join(", ")}`));
  }
}

const app = new App();
app.play();

export default App;
