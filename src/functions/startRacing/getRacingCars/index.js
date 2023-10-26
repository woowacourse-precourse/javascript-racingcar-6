import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../../constants/message.js';

const getRacingCars = async () => {
  const racingCars = await Console.readLineAsync(`${MESSAGE.inputCars}\n`);
  const racingCarList = racingCars.split(',');
  return racingCarList;
};

export default getRacingCars;
