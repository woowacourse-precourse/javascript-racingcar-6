import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';

export const getCarName = async () => {
  const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
  const carList = inputCarName.split(',');

  // TODO : 자동차 이름 유효검사

  return carList;
};

export const getPlayNum = async () => {
  const inputPlayNum = await Console.readLineAsync(MESSAGE.getPlayNum);
  const playNum = parseInt(inputPlayNum, 10);

  // TODO : 시도할 횟수 유효검사

  return playNum;
};
