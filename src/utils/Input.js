import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant";

const Input = {
  async racingCar() {
    const racingCars = await Console.readLineAsync(MESSAGE.car);
    const racingCarList = racingCars.split(',');
    return racingCarList;
  },
  async racingCount() {
    const racingCount = await Console.readLineAsync(MESSAGE.count);
    return Number(racingCount);
  },
}

export default Input;