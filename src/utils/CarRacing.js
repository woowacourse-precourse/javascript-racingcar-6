import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";

const CarRacing = {
  async playCarRacing(){
    const carNameList = await Console.readLineAsync(IN_GAME_MESSAGE.getCarName);
    
  }
}
export default CarRacing;