import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../../constants/message.js';

const getRepeatNum = async () => {
  const repeatStr = await Console.readLineAsync(`${MESSAGE.howManyRepeat}\n`);
  const repeatNum = parseInt(repeatStr);
  return repeatNum;
};

export default getRepeatNum;
