import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from '../../../constants/message';

const getRacingCars = async () => {
  const racingCars = await Console.readLineAsync(`${MESSAGE.inputCars}\n`);
  const racingCarList = racingCars.split(',');

  racingCarList.forEach((racingCar) => {
    if (racingCar.length > 5) {
      throw Error(ERROR_MESSAGE.tooLongName);
    }
  });
  return racingCarList;
};

export default getRacingCars;
