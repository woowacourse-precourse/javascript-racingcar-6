import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message.js';
import getRacingCars from './getRacingCars/index.js';
import getRepeatNum from './getRepeatNum/index.js';

const startRacing = async () => {
  Console.print(MESSAGE.startGame);
  const racingCarList = await getRacingCars();
  const repeatNum = await getRepeatNum();
};

export default startRacing;
