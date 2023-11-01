import { Random } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/constants';

/*
 * @param {array} carData - 자동차 이름, 무작위 숫자 초기값, 전진 거리 초기값을 가진 오브젝트를 담고 있는 배열
 * @returns {array} carData - 자동차 이름, 무작위 숫자, 전진 거리 초기값을 가진 오브젝트를 담고 있는 배열
 */
export const createRandomNumber = (carData) => {
  let randomNumber = Random.pickNumberInRange(
    CONFIG.range.minNumber,
    CONFIG.range.maxNumber,
  );

  carData.forEach((data) => {
    data.randomNumber = randomNumber;
  });

  return carData;
};
