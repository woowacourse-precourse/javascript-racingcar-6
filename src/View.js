import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";
import Play from "./Play.js";
import CAR from "./constants/constant";
import MESSAGE from "./constants/MESSAGE";

class View {
  checkNumberDigits(carNames) {
    const carNamesInArray = carNames.split(CAR.name.separator);
    const hasConsecutiveCommas = /,,/.test(carNames);
    const startCommaOrEndComma = /^,|,$/.test(carNames);

    if (startCommaOrEndComma) {
      throw new Error("[ERROR] " + MESSAGE.error.COMMA_POSITION);
    }

    if (hasConsecutiveCommas) {
      throw new Error("[ERROR] " + MESSAGE.error.CONTINUOUS_COMMA);
    }

    const carList = carNamesInArray.map((carName) => {
      const moreThan5Characters = carName.length > CAR.name.maxLength;

      if (moreThan5Characters) {
        throw new Error("[ERROR] " + MESSAGE.error.NAME_LENGTH_LIMIT);
      }

      return new Car(carName);
    });

    const play = new Play();
    play.enterAttempt(carList);
  }

  checkComma(carNames) {
    const isEmpty = carNames.includes(" ") || carNames.length === 0;

    if (isEmpty) {
      throw new Error("[ERROR] " + MESSAGE.error.EMPTY_INPUT);
    }

    this.checkNumberDigits(carNames);
  }

  async start() {
    const carNames = await Console.readLineAsync(MESSAGE.read.CAR_LIST);
    this.checkComma(carNames);
  }
}

export default View;
