import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from '../../../constants/message';

const getRacingCars = async () => {
  let racingCars = await Console.readLineAsync(`${MESSAGE.inputCars}\n`);
  racingCars = racingCars.replaceAll(' ', '');
  const racingCarList = racingCars.split(',');

  racingCarList.forEach((racingCar) => {
    if (racingCar.length > 5) {
      throw Error(ERROR_MESSAGE.tooLongName);
    }

    if (racingCar.length <= 0) {
      throw Error(ERROR_MESSAGE.tooShortName);
    }
  });
  return racingCarList;
};

export default getRacingCars;
