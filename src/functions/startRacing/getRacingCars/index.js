import { Console } from '@woowacourse/mission-utils';

const getRacingCars = async () => {
  const racingCars = await Console.readLineAsync('');
  const racingCarList = racingCars.split(',');
  return racingCarList;
};

export default getRacingCars;
