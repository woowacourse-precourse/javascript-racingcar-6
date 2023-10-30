import { Console, Random } from "@woowacourse/mission-utils";
const InputError = require("./lib/utils/error.js");
const { GAME_MESSAGE } = require("./lib/constants/message.js");

class App {
  constructor() {
    this.Error = new InputError();
  }

  async play() {
    const carList = await this.getCarList();
    const count = await this.getTryCount();
  }

  async getCarList() {
    const carInput = await Console.readLineAsync(GAME_MESSAGE.CARNAME_INPUT);
    const carList = [...carInput.split(",")];
    this.Error.validateCarNameInput(carList);

    return carList;
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync(GAME_MESSAGE.COUNT_INPUT);
    this.Error.validateCountInput(tryCount);

    return tryCount;
  }
}

export default App;
