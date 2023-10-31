import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";

class App {
  validateCarName = (carNamesArray) => {
    // for (let i = 0; i < carNamesArray.length; i++) {
    //   if (carNamesArray[i].length > 5) throw new Error(ERROR.CAR_NAME);
    // }
    for (let i = 0; i < carNamesArray.length; i++) {
      const carNames = carNamesArray[i].trim(); // 공백 제거
      if (carNames.length > 5) {
        throw new Error("ERROR.CAR_NAME");
      }
    }
  };

  getCarName = async () => {
    const getCarName = await Console.readLineAsync(GAME.GET_CAR_NAME);
    //const carNamesArray = [...new Set(getCarName.split(",").map(String))];
    const carNamesArray = getCarName.split(",");
    this.validateCarName(carNamesArray);

    return carNamesArray;
  };
  async play() {}
}

export default App;
