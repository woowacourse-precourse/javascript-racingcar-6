import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../../constants/message';

const getRepeatNum = async () => {
  const repeatStr = await Console.readLineAsync(`${MESSAGE.howManyRepeat}\n`);
  const repeatNum = parseInt(repeatStr, 10);
  return repeatNum;
};

export default getRepeatNum;
