import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/constants.js";

class Output {
  racingStartMessage() {
    Console.print(MESSAGE.racingResult);
  }
  async eachRacingResult(carName, winner) {
    for (let i = 0; i < carName.length; i++) {
      await Console.print(`${carName[i]} : ${winner[i]}`);
    }
    Console.print(``);
  }

  // async inputTryNumber() {
  //   try {
  //     const TRY_NUMBER = await Console.readLineAsync(MESSAGE.inputTryNumber);
  //     // Console.print(TRY_NUMBER);
  //     return TRY_NUMBER;
  //   } catch (error) {
  //     throw `[ERROR]` + error;
  //   }
  // }
}

export default Output;
