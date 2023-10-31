import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";

class App {
  validateCarName = (carNamesArray) => {
    carNamesArray.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR.CAR_NAME);
      }
    });
  };

  getCarName = async () => {
    const getCarName = await Console.readLineAsync(GAME.GET_CAR_NAME);
    const carNamesArray = getCarName.split(",");
    this.validateCarName(carNamesArray);

    return carNamesArray;
  };
  async play() {}
}

export default App;
