import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant.js";
import { Validator } from "./Validator.js";

const Input = {
  async racingCar() {
    const racingCars = await Console.readLineAsync(MESSAGE.car);
    
    const racingCarList = racingCars.split(',');
    return racingCarList;
  },
  async racingCount() {
    const racingCount = await Console.readLineAsync(MESSAGE.count);
    Validator.checkCount(racingCount);
    return Number(racingCount);
  },
}

export { Input };