import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";

const CarRacing = {
  async playCarRacing() {
    const carNameList = await Console.readLineAsync(IN_GAME_MESSAGE.getCarName);
    const tryCount = await Console.readLineAsync(IN_GAME_MESSAGE.getTryCount);

    for (let count = 0; count < tryCount; count+=1) {
      
    }
  },
};
export default CarRacing;
