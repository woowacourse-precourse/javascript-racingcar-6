import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../../constants/message.js';

const getRepeatNum = async () => {
  const repeatStr = await Console.readLineAsync(MESSAGE.howManyRepeat);
  const repeatNum = parseInt(repeatStr);
  return repeatNum;
};

export default getRepeatNum;
