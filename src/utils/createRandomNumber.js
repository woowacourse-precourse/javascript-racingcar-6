import { Random } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/constants';

export const createRandomNumber = (carData) => {
  let randomNumber = Random.pickNumberInRange(
    CONFIG.range.minNumber,
    CONFIG.range.maxNumber,
  );

  carData.forEach((data) => {
    data.number = randomNumber;
  });

  return carData;
};
