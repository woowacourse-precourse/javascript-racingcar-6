import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "./Constants.js";

const CarRacing = {
  async playCarRacing(){
    Console.print(IN_GAME_MESSAGE.getCarName);
  }
}
export default CarRacing;